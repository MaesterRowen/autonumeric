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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvbnVtZXJpYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHbkUsTUFBTSxPQUFPLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFVRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUE0Qi9CLFlBQ1UsR0FBZSxFQUNmLFFBQTZCLEVBQzdCLFFBQW1CO1FBRm5CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFXOzs7OztRQXhCN0IsYUFBUSxHQUF1QixPQUFPLENBQUM7UUFPL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUszQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGVBQVU7OztRQUF5QixHQUFHLEVBQUU7UUFDeEMsQ0FBQyxFQUFDO1FBRUYsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRTtRQUNuQixDQUFDLEVBQUM7SUFPRixDQUFDOzs7O0lBRUQs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LENBQUMsa0NBQWtDLENBQUM7O2dCQUUvQyxJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2FBQ0Y7Ozs7WUE3QkMsVUFBVTtZQWFKLG1CQUFtQjtZQUx6QixTQUFTOzs7dUJBNEJSLEtBQUs7c0JBR0wsS0FBSzt5QkFFTCxLQUFLO3dCQU9MLE1BQU07K0JBRU4sTUFBTTs7OztJQWRQLHdDQUN1Qzs7SUFFdkMsdUNBQzRCOztJQUM1QiwwQ0FDbUI7O0lBQ25CLHdDQUFjOzs7OztJQUNkLDBDQUEyQjs7Ozs7SUFDM0IsNENBQTBCOztJQUMxQixpREFBOEI7O0lBQzlCLDJEQUF3Qzs7SUFDeEMseUNBQytCOztJQUMvQixnREFDc0M7O0lBQ3RDLDBDQUNFOztJQUVGLDJDQUNFOzs7OztJQUdBLG1DQUF1Qjs7Ozs7SUFDdkIsd0NBQXFDOzs7OztJQUNyQyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnYXV0b251bWVyaWMnO1xyXG5pbXBvcnQge0F1dG9udW1lcmljRGVmYXVsdHN9IGZyb20gJy4vYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZSc7XHJcbmltcG9ydCB7QXV0b251bWVyaWNPcHRpb25zfSBmcm9tICcuL2F1dG9udW1lcmljLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBBVVRPTlVNRVJJQ19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQXV0b251bWVyaWNEaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thdXRvbnVtZXJpY10nLFxyXG4gIHByb3ZpZGVyczogW0FVVE9OVU1FUklDX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZEZuKCknXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9udW1lcmljRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAvKiBEZWZpbmVzIHRoZSBzdHJhdGVneSB0byBhcHBseSB3aGVuIG9wdGlvbnMgY2hhbmdlLlxyXG4gICAqIHJlc2V0IHdpbGwgZHJvcCBhbnkgcHJldmlvdXMgb3B0aW9uc1xyXG4gICAqIHVwZGF0ZSB3aWxsIGNoYW5nZSBvbGQgdmFsdWVzIG9uZSBieSBvbmUgYnV0IGtlZXAgdGhvc2UgdGhhdCBhcmUgbm90IG1lbnRpb25lZCBpbiB0aGUgbmV3IG9wdGlvbnNcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHN0cmF0ZWd5OiAncmVzZXQnIHwgJ3VwZGF0ZScgPSAncmVzZXQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IEF1dG9udW1lcmljT3B0aW9ucztcclxuICBASW5wdXQoKVxyXG4gIHByZWRlZmluZWQ6IHN0cmluZztcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIHByaXZhdGUgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaW5pdGlhbFZhbHVlOiBhbnk7XHJcbiAgdW5zdWJzY3JpYmVGb3JtYXQ6ICgpID0+IHZvaWQ7XHJcbiAgdW5zdWJzY3JpYmVSYXdWYWx1ZU1vZGlmaWVkOiAoKSA9PiB2b2lkO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1hdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KClcclxuICByYXdWYWx1ZU1vZGlmaWVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG9uQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hlZEZuID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGRlZmF1bHRzOiBBdXRvbnVtZXJpY0RlZmF1bHRzLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0dGhpcy5pbnN0YW5jZSA9IG5ldyBBdXRvTnVtZXJpYyhcclxuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5nZXRPcHRpb25zKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vcm1hbGl6ZShvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKEF1dG9OdW1lcmljLm9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbm9ybWFsaXplZFtrZXldID0gKHRoaXMuZGVmYXVsdHMgYXMgYW55KVtrZXldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZSh0aGlzLmlzRGlzYWJsZWQpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZUZvcm1hdCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICdhdXRvTnVtZXJpYzpmb3JtYXR0ZWQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGVkLmVtaXQoJGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZVJhd1ZhbHVlTW9kaWZpZWQgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnYXV0b051bWVyaWM6cmF3VmFsdWVNb2RpZmllZCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZuKCRldmVudC5kZXRhaWwubmV3UmF3VmFsdWUpO1xyXG4gICAgICB0aGlzLnJhd1ZhbHVlTW9kaWZpZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zID09PSB1bmRlZmluZWQgJiYgdGhpcy5wcmVkZWZpbmVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdHM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcmVkZWZpbmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcmVkZWZpbmVkIGF0dHJpYnV0ZSBjb3VsZCBub3QgYmUgY29tYmluZWQgd2l0aCBvcHRpb25zLiBQbGVhc2UgdXNlIGVpdGhlciBwcmVkZWZpbmVkIG9yIG9wdGlvbnMnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByZWRlZmluZWQgPSBBdXRvTnVtZXJpYy5nZXRQcmVkZWZpbmVkT3B0aW9ucygpW3RoaXMucHJlZGVmaW5lZF07XHJcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUocHJlZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLnByZWRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuc3RyYXRlZ3kgPT09ICdyZXNldCcpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9wdGlvbnMucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZSh0aGlzLmdldE9wdGlvbnMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVGb3JtYXQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVSYXdWYWx1ZU1vZGlmaWVkKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnJlbW92ZSgpOyAvLyByZW1vdmUgbGlzdGVuZXJzXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGF1dG9udW1lcmljIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIHlldCwgc3RvcmUgdGhlIHZhbHVlIGZvciBsYXRlciB1c2VcclxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnN0YW5jZS5kb21FbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLmRvbUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==