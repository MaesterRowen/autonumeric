/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { AutonumericDefaults } from './autonumeric-defaults.service';
/** @type {?} */
export var AUTONUMERIC_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return AutonumericDirective; })),
    multi: true
};
var AutonumericDirective = /** @class */ (function () {
    function AutonumericDirective(elm, defaults, renderer) {
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
        function () {
        });
        this.onTouchedFn = (/**
         * @return {?}
         */
        function () {
        });
    }
    /**
     * @return {?}
     */
    AutonumericDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new AutoNumeric(this.elm.nativeElement, this.getOptions());
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    AutonumericDirective.prototype.normalize = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var normalized = {};
        Object.keys(AutoNumeric.options).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (typeof options[key] === 'undefined') {
                normalized[key] = ((/** @type {?} */ (_this.defaults)))[key];
            }
            else {
                normalized[key] = options[key];
            }
        }));
        return normalized;
    };
    /**
     * @return {?}
     */
    AutonumericDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setDisabledState(this.isDisabled);
        this.unsubscribeFormat = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            _this.formatted.emit($event);
        }));
        this.unsubscribeRawValueModified = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:rawValueModified', (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            _this.onChangeFn($event.detail.newRawValue);
            _this.rawValueModified.emit($event);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AutonumericDirective.prototype.getOptions = /**
     * @private
     * @return {?}
     */
    function () {
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
        var predefined = AutoNumeric.getPredefinedOptions()[this.predefined];
        return this.normalize(predefined);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AutonumericDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.options || changes.predefined) {
            if (this.strategy === 'reset') {
                this.instance.options.reset();
            }
            this.instance.update(this.getOptions());
        }
    };
    /**
     * @return {?}
     */
    AutonumericDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeFormat();
        this.unsubscribeRawValueModified();
        try {
            this.instance.remove(); // remove listeners
        }
        catch (e) {
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutonumericDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.instance) {
            this.instance.set(value);
        }
        else {
            // autonumeric hasn't been initialised yet, store the value for later use
            this.initialValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AutonumericDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AutonumericDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AutonumericDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
        if (this.instance) {
            if (this.isDisabled) {
                this.renderer.setProperty(this.instance.domElement, 'disabled', 'disabled');
            }
            else {
                this.renderer.removeAttribute(this.instance.domElement, 'disabled');
            }
        }
    };
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
    AutonumericDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AutonumericDefaults },
        { type: Renderer2 }
    ]; };
    AutonumericDirective.propDecorators = {
        strategy: [{ type: Input }],
        options: [{ type: Input }],
        predefined: [{ type: Input }],
        formatted: [{ type: Output }],
        rawValueModified: [{ type: Output }]
    };
    return AutonumericDirective;
}());
export { AutonumericDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvbnVtZXJpYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHbkUsTUFBTSxLQUFPLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFvQ0UsOEJBQ1UsR0FBZSxFQUNmLFFBQTZCLEVBQzdCLFFBQW1CO1FBRm5CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFXOzs7OztRQXhCN0IsYUFBUSxHQUF1QixPQUFPLENBQUM7UUFPL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUszQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGVBQVU7OztRQUF5QjtRQUNuQyxDQUFDLEVBQUM7UUFFRixnQkFBVzs7O1FBQUc7UUFDZCxDQUFDLEVBQUM7SUFPRixDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FB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Z0JBdElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7O29CQUUvQyxJQUFJLEVBQUU7d0JBQ0osUUFBUSxFQUFFLGVBQWU7cUJBQzFCO2lCQUNGOzs7O2dCQTdCQyxVQUFVO2dCQWFKLG1CQUFtQjtnQkFMekIsU0FBUzs7OzJCQTRCUixLQUFLOzBCQUdMLEtBQUs7NkJBRUwsS0FBSzs0QkFPTCxNQUFNO21DQUVOLE1BQU07O0lBMkdULDJCQUFDO0NBQUEsQUF2SUQsSUF1SUM7U0EvSFksb0JBQW9COzs7SUFNL0Isd0NBQ3VDOztJQUV2Qyx1Q0FDNEI7O0lBQzVCLDBDQUNtQjs7SUFDbkIsd0NBQWM7Ozs7O0lBQ2QsMENBQTJCOzs7OztJQUMzQiw0Q0FBMEI7O0lBQzFCLGlEQUE4Qjs7SUFDOUIsMkRBQXdDOztJQUN4Qyx5Q0FDK0I7O0lBQy9CLGdEQUNzQzs7SUFDdEMsMENBQ0U7O0lBRUYsMkNBQ0U7Ozs7O0lBR0EsbUNBQXVCOzs7OztJQUN2Qix3Q0FBcUM7Ozs7O0lBQ3JDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBBdXRvTnVtZXJpYyBmcm9tICdhdXRvbnVtZXJpYyc7XHJcbmltcG9ydCB7QXV0b251bWVyaWNEZWZhdWx0c30gZnJvbSAnLi9hdXRvbnVtZXJpYy1kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdXRvbnVtZXJpY09wdGlvbnN9IGZyb20gJy4vYXV0b251bWVyaWMubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFVVE9OVU1FUklDX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvbnVtZXJpY0RpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F1dG9udW1lcmljXScsXHJcbiAgcHJvdmlkZXJzOiBbQVVUT05VTUVSSUNfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkRm4oKSdcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b251bWVyaWNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIC8qIERlZmluZXMgdGhlIHN0cmF0ZWd5IHRvIGFwcGx5IHdoZW4gb3B0aW9ucyBjaGFuZ2UuXHJcbiAgICogcmVzZXQgd2lsbCBkcm9wIGFueSBwcmV2aW91cyBvcHRpb25zXHJcbiAgICogdXBkYXRlIHdpbGwgY2hhbmdlIG9sZCB2YWx1ZXMgb25lIGJ5IG9uZSBidXQga2VlcCB0aG9zZSB0aGF0IGFyZSBub3QgbWVudGlvbmVkIGluIHRoZSBuZXcgb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc3RyYXRlZ3k6ICdyZXNldCcgfCAndXBkYXRlJyA9ICdyZXNldCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uczogQXV0b251bWVyaWNPcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJlZGVmaW5lZDogc3RyaW5nO1xyXG4gIGluc3RhbmNlOiBhbnk7XHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpbml0aWFsVmFsdWU6IGFueTtcclxuICB1bnN1YnNjcmliZUZvcm1hdDogKCkgPT4gdm9pZDtcclxuICB1bnN1YnNjcmliZVJhd1ZhbHVlTW9kaWZpZWQ6ICgpID0+IHZvaWQ7XHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybWF0dGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJhd1ZhbHVlTW9kaWZpZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb25DaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgb25Ub3VjaGVkRm4gPSAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgZGVmYXVsdHM6IEF1dG9udW1lcmljRGVmYXVsdHMsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHR0aGlzLmluc3RhbmNlID0gbmV3IEF1dG9OdW1lcmljKFxyXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm9ybWFsaXplKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMoQXV0b051bWVyaWMub3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBub3JtYWxpemVkW2tleV0gPSAodGhpcy5kZWZhdWx0cyBhcyBhbnkpW2tleV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9ybWFsaXplZFtrZXldID0gb3B0aW9uc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHRoaXMuaXNEaXNhYmxlZCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlRm9ybWF0ID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2F1dG9OdW1lcmljOmZvcm1hdHRlZCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0ZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlUmF3VmFsdWVNb2RpZmllZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICdhdXRvTnVtZXJpYzpyYXdWYWx1ZU1vZGlmaWVkJywgKCRldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oJGV2ZW50LmRldGFpbC5uZXdSYXdWYWx1ZSk7XHJcbiAgICAgIHRoaXMucmF3VmFsdWVNb2RpZmllZC5lbWl0KCRldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnByZWRlZmluZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0cztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByZWRlZmluZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ByZWRlZmluZWQgYXR0cmlidXRlIGNvdWxkIG5vdCBiZSBjb21iaW5lZCB3aXRoIG9wdGlvbnMuIFBsZWFzZSB1c2UgZWl0aGVyIHByZWRlZmluZWQgb3Igb3B0aW9ucycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJlZGVmaW5lZCA9IEF1dG9OdW1lcmljLmdldFByZWRlZmluZWRPcHRpb25zKClbdGhpcy5wcmVkZWZpbmVkXTtcclxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZShwcmVkZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMucHJlZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy5zdHJhdGVneSA9PT0gJ3Jlc2V0Jykge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub3B0aW9ucy5yZXNldCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKHRoaXMuZ2V0T3B0aW9ucygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZUZvcm1hdCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZVJhd1ZhbHVlTW9kaWZpZWQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlKCk7IC8vIHJlbW92ZSBsaXN0ZW5lcnNcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYXV0b251bWVyaWMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgeWV0LCBzdG9yZSB0aGUgdmFsdWUgZm9yIGxhdGVyIHVzZVxyXG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmluc3RhbmNlLmRvbUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UuZG9tRWxlbWVudCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19