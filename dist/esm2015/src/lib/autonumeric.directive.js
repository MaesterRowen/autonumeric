/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { AutonumericDefaults } from './autonumeric-defaults.service';
/** @type {?} */
export const AUTONUMERIC_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AutonumericDirective)),
    multi: true
};
export class AutonumericDirective {
    /**
     * @param {?} elm
     * @param {?} defaults
     * @param {?} renderer
     */
    constructor(elm, defaults, renderer) {
        this.elm = elm;
        this.defaults = defaults;
        this.renderer = renderer;
        /* Defines the strategy to apply when options change.
           * reset will drop any previous options
           * update will change old values one by one but keep those that are not mentioned in the new options
           */
        this.strategy = 'reset';
        this.isDisabled = false;
        this.formatted = new EventEmitter();
        this.rawValueModified = new EventEmitter();
        this.onChangeFn = (/**
         * @return {?}
         */
        () => {
        });
        this.onTouchedFn = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new AutoNumeric(this.elm.nativeElement, this.getOptions());
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    normalize(options) {
        /** @type {?} */
        const normalized = {};
        Object.keys(AutoNumeric.options).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (typeof options[key] === 'undefined') {
                normalized[key] = ((/** @type {?} */ (this.defaults)))[key];
            }
            else {
                normalized[key] = options[key];
            }
        }));
        return normalized;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setDisabledState(this.isDisabled);
        this.unsubscribeFormat = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            this.formatted.emit($event);
        }));
        this.unsubscribeRawValueModified = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:rawValueModified', (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            this.onChangeFn($event.detail.newRawValue);
            this.rawValueModified.emit($event);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getOptions() {
        if (this.options === undefined && this.predefined === undefined) {
            return this.defaults;
        }
        if (this.options !== undefined && this.predefined !== undefined) {
            throw new Error('predefined attribute could not be combined with options. Please use either predefined or options');
        }
        if (this.options !== undefined) {
            return this.normalize(this.options);
        }
        /** @type {?} */
        const predefined = AutoNumeric.getPredefinedOptions()[this.predefined];
        return this.normalize(predefined);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.options || changes.predefined) {
            if (this.strategy === 'reset') {
                this.instance.options.reset();
            }
            this.instance.update(this.getOptions());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeFormat();
        this.unsubscribeRawValueModified();
        try {
            this.instance.remove(); // remove listeners
        }
        catch (e) {
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.instance) {
            this.instance.set(value);
        }
        else {
            // autonumeric hasn't been initialised yet, store the value for later use
            this.initialValue = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.instance) {
            if (this.isDisabled) {
                this.renderer.setProperty(this.instance.domElement, 'disabled', 'disabled');
            }
            else {
                this.renderer.removeAttribute(this.instance.domElement, 'disabled');
            }
        }
    }
}
AutonumericDirective.decorators = [
    { type: Directive, args: [{
                selector: '[autonumeric]',
                providers: [AUTONUMERIC_CONTROL_VALUE_ACCESSOR],
                // tslint:disable-next-line:use-host-property-decorator
                host: {
                    '(blur)': 'onTouchedFn()'
                },
            },] }
];
/** @nocollapse */
AutonumericDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AutonumericDefaults },
    { type: Renderer2 }
];
AutonumericDirective.propDecorators = {
    strategy: [{ type: Input }],
    options: [{ type: Input }],
    predefined: [{ type: Input }],
    formatted: [{ type: Output }],
    rawValueModified: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AutonumericDirective.prototype.strategy;
    /** @type {?} */
    AutonumericDirective.prototype.options;
    /** @type {?} */
    AutonumericDirective.prototype.predefined;
    /** @type {?} */
    AutonumericDirective.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    AutonumericDirective.prototype.isDisabled;
    /**
     * @type {?}
     * @private
     */
    AutonumericDirective.prototype.initialValue;
    /** @type {?} */
    AutonumericDirective.prototype.unsubscribeFormat;
    /** @type {?} */
    AutonumericDirective.prototype.unsubscribeRawValueModified;
    /** @type {?} */
    AutonumericDirective.prototype.formatted;
    /** @type {?} */
    AutonumericDirective.prototype.rawValueModified;
    /** @type {?} */
    AutonumericDirective.prototype.onChangeFn;
    /** @type {?} */
    AutonumericDirective.prototype.onTouchedFn;
    /**
     * @type {?}
     * @private
     */
    AutonumericDirective.prototype.elm;
    /**
     * @type {?}
     * @private
     */
    AutonumericDirective.prototype.defaults;
    /**
     * @type {?}
     * @private
     */
    AutonumericDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJsaWIvYXV0b251bWVyaWMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7O0FBR25FLE1BQU0sT0FBTyxrQ0FBa0MsR0FBUTtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBVUQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBNEIvQixZQUNVLEdBQWUsRUFDZixRQUE2QixFQUM3QixRQUFtQjtRQUZuQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7Ozs7UUF4QjdCLGFBQVEsR0FBdUIsT0FBTyxDQUFDO1FBTy9CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0IscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxlQUFVOzs7UUFBeUIsR0FBRyxFQUFFO1FBQ3hDLENBQUMsRUFBQztRQUVGLGdCQUFXOzs7UUFBRyxHQUFHLEVBQUU7UUFDbkIsQ0FBQyxFQUFDO0lBT0YsQ0FBQzs7OztJ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RUFBRSxDQUFDLGtDQUFrQyxDQUFDOztnQkFFL0MsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxlQUFlO2lCQUMxQjthQUNGOzs7O1lBN0JDLFVBQVU7WUFhSixtQkFBbUI7WUFMekIsU0FBUzs7O3VCQTRCUixLQUFLO3NCQUdMLEtBQUs7eUJBRUwsS0FBSzt3QkFPTCxNQUFNOytCQUVOLE1BQU07Ozs7SUFkUCx3Q0FDdUM7O0lBRXZDLHVDQUM0Qjs7SUFDNUIsMENBQ21COztJQUNuQix3Q0FBYzs7Ozs7SUFDZCwwQ0FBMkI7Ozs7O0lBQzNCLDRDQUEwQjs7SUFDMUIsaURBQThCOztJQUM5QiwyREFBd0M7O0lBQ3hDLHlDQUMrQjs7SUFDL0IsZ0RBQ3NDOztJQUN0QywwQ0FDRTs7SUFFRiwyQ0FDRTs7Ozs7SUFHQSxtQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUFxQzs7Ozs7SUFDckMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJ2F1dG9udW1lcmljJztcclxuaW1wb3J0IHtBdXRvbnVtZXJpY0RlZmF1bHRzfSBmcm9tICcuL2F1dG9udW1lcmljLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0F1dG9udW1lcmljT3B0aW9uc30gZnJvbSAnLi9hdXRvbnVtZXJpYy5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQVVUT05VTUVSSUNfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9udW1lcmljRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXV0b251bWVyaWNdJyxcclxuICBwcm92aWRlcnM6IFtBVVRPTlVNRVJJQ19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXHJcbiAgaG9zdDoge1xyXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWRGbigpJ1xyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvbnVtZXJpY0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgLyogRGVmaW5lcyB0aGUgc3RyYXRlZ3kgdG8gYXBwbHkgd2hlbiBvcHRpb25zIGNoYW5nZS5cclxuICAgKiByZXNldCB3aWxsIGRyb3AgYW55IHByZXZpb3VzIG9wdGlvbnNcclxuICAgKiB1cGRhdGUgd2lsbCBjaGFuZ2Ugb2xkIHZhbHVlcyBvbmUgYnkgb25lIGJ1dCBrZWVwIHRob3NlIHRoYXQgYXJlIG5vdCBtZW50aW9uZWQgaW4gdGhlIG5ldyBvcHRpb25zXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzdHJhdGVneTogJ3Jlc2V0JyB8ICd1cGRhdGUnID0gJ3Jlc2V0JztcclxuXHJcbiAgQElucHV0KClcclxuICBvcHRpb25zOiBBdXRvbnVtZXJpY09wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICBwcmVkZWZpbmVkOiBzdHJpbmc7XHJcbiAgaW5zdGFuY2U6IGFueTtcclxuICBwcml2YXRlIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGluaXRpYWxWYWx1ZTogYW55O1xyXG4gIHVuc3Vic2NyaWJlRm9ybWF0OiAoKSA9PiB2b2lkO1xyXG4gIHVuc3Vic2NyaWJlUmF3VmFsdWVNb2RpZmllZDogKCkgPT4gdm9pZDtcclxuICBAT3V0cHV0KClcclxuICBmb3JtYXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgcmF3VmFsdWVNb2RpZmllZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBvbkNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICBvblRvdWNoZWRGbiA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0czogQXV0b251bWVyaWNEZWZhdWx0cyxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdHRoaXMuaW5zdGFuY2UgPSBuZXcgQXV0b051bWVyaWMoXHJcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhBdXRvTnVtZXJpYy5vcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRba2V5XSA9ICh0aGlzLmRlZmF1bHRzIGFzIGFueSlba2V5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub3JtYWxpemVkW2tleV0gPSBvcHRpb25zW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUodGhpcy5pc0Rpc2FibGVkKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVGb3JtYXQgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnYXV0b051bWVyaWM6Zm9ybWF0dGVkJywgKCRldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRlZC5lbWl0KCRldmVudCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVSYXdWYWx1ZU1vZGlmaWVkID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2F1dG9OdW1lcmljOnJhd1ZhbHVlTW9kaWZpZWQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbigkZXZlbnQuZGV0YWlsLm5ld1Jhd1ZhbHVlKTtcclxuICAgICAgdGhpcy5yYXdWYWx1ZU1vZGlmaWVkLmVtaXQoJGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIHRoaXMucHJlZGVmaW5lZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJlZGVmaW5lZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHJlZGVmaW5lZCBhdHRyaWJ1dGUgY291bGQgbm90IGJlIGNvbWJpbmVkIHdpdGggb3B0aW9ucy4gUGxlYXNlIHVzZSBlaXRoZXIgcHJlZGVmaW5lZCBvciBvcHRpb25zJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmVkZWZpbmVkID0gQXV0b051bWVyaWMuZ2V0UHJlZGVmaW5lZE9wdGlvbnMoKVt0aGlzLnByZWRlZmluZWRdO1xyXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHByZWRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5wcmVkZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0cmF0ZWd5ID09PSAncmVzZXQnKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vcHRpb25zLnJlc2V0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUodGhpcy5nZXRPcHRpb25zKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlRm9ybWF0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlUmF3VmFsdWVNb2RpZmllZCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5yZW1vdmUoKTsgLy8gcmVtb3ZlIGxpc3RlbmVyc1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhdXRvbnVtZXJpYyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCB5ZXQsIHN0b3JlIHRoZSB2YWx1ZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5zdGFuY2UuZG9tRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5kb21FbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=