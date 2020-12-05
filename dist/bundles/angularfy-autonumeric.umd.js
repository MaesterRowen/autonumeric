(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('autonumeric'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angularfy/autonumeric', ['exports', '@angular/core', '@angular/forms', 'autonumeric', '@angular/common'], factory) :
    (factory((global.angularfy = global.angularfy || {}, global.angularfy.autonumeric = {}),global.ng.core,global.ng.forms,global.AutoNumeric,global.ng.common));
}(this, (function (exports,core,forms,AutoNumeric,common) { 'use strict';

    AutoNumeric = AutoNumeric && AutoNumeric.hasOwnProperty('default') ? AutoNumeric['default'] : AutoNumeric;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutonumericDefaults = /** @class */ (function () {
        function AutonumericDefaults() {
            this.allowDecimalPadding = AutoNumeric.options.allowDecimalPadding.always;
            this.alwaysAllowDecimalCharacter = AutoNumeric.options.alwaysAllowDecimalCharacter.doNotAllow;
            this.caretPositionOnFocus = AutoNumeric.options.caretPositionOnFocus.doNoForceCaretPosition;
            this.createLocalList = AutoNumeric.options.createLocalList.createList;
            this.currencySymbol = AutoNumeric.options.currencySymbol.none;
            this.currencySymbolPlacement = AutoNumeric.options.currencySymbolPlacement.prefix;
            this.decimalCharacter = AutoNumeric.options.decimalCharacter.dot;
            this.decimalCharacterAlternative = AutoNumeric.options.decimalCharacterAlternative.none;
            this.decimalPlaces = AutoNumeric.options.decimalPlaces.two;
            this.decimalPlacesRawValue = AutoNumeric.options.decimalPlacesRawValue.useDefault;
            this.decimalPlacesShownOnBlur = AutoNumeric.options.decimalPlacesShownOnBlur.useDefault;
            this.decimalPlacesShownOnFocus = AutoNumeric.options.decimalPlacesShownOnFocus.useDefault;
            this.defaultValueOverride = AutoNumeric.options.defaultValueOverride.doNotOverride;
            this.digitalGroupSpacing = AutoNumeric.options.digitalGroupSpacing.three;
            this.digitGroupSeparator = AutoNumeric.options.digitGroupSeparator.comma;
            this.divisorWhenUnfocused = AutoNumeric.options.divisorWhenUnfocused.none;
            this.emptyInputBehavior = AutoNumeric.options.emptyInputBehavior.focus;
            this.eventBubbles = AutoNumeric.options.eventBubbles.bubbles;
            this.eventIsCancelable = AutoNumeric.options.eventIsCancelable.isCancelable;
            this.failOnUnknownOption = AutoNumeric.options.failOnUnknownOption.ignore;
            this.formatOnPageLoad = AutoNumeric.options.formatOnPageLoad.format;
            this.formulaMode = AutoNumeric.options.formulaMode.disabled;
            this.historySize = AutoNumeric.options.historySize.medium;
            this.isCancellable = AutoNumeric.options.isCancellable.cancellable;
            this.leadingZero = AutoNumeric.options.leadingZero.deny;
            this.maximumValue = AutoNumeric.options.maximumValue.tenTrillions;
            this.minimumValue = AutoNumeric.options.minimumValue.tenTrillions;
            this.modifyValueOnWheel = AutoNumeric.options.modifyValueOnWheel.modifyValue;
            this.negativeBracketsTypeOnBlur = AutoNumeric.options.negativeBracketsTypeOnBlur.none;
            this.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.none;
            this.negativeSignCharacter = AutoNumeric.options.negativeSignCharacter.hyphen;
            this.noEventListeners = AutoNumeric.options.noEventListeners.addEvents;
            this.onInvalidPaste = AutoNumeric.options.onInvalidPaste.error;
            this.outputFormat = AutoNumeric.options.outputFormat.none;
            this.overrideMinMaxLimits = AutoNumeric.options.overrideMinMaxLimits.doNotOverride;
            this.positiveSignCharacter = AutoNumeric.options.positiveSignCharacter.plus;
            this.rawValueDivisor = AutoNumeric.options.rawValueDivisor.none;
            this.readOnly = AutoNumeric.options.readOnly.readWrite;
            this.roundingMethod = AutoNumeric.options.roundingMethod.halfUpSymmetric;
            this.saveValueToSessionStorage = AutoNumeric.options.saveValueToSessionStorage.doNotSave;
            this.selectNumberOnly = AutoNumeric.options.selectNumberOnly.selectNumbersOnly;
            this.selectOnFocus = AutoNumeric.options.selectOnFocus.select;
            this.serializeSpaces = AutoNumeric.options.serializeSpaces.plus;
            this.showOnlyNumbersOnFocus = AutoNumeric.options.showOnlyNumbersOnFocus.showAll;
            this.showPositiveSign = AutoNumeric.options.showPositiveSign.hide;
            this.showWarnings = AutoNumeric.options.showWarnings.show;
            this.styleRules = AutoNumeric.options.styleRules.none;
            this.suffixText = AutoNumeric.options.suffixText.none;
            this.symbolWhenUnfocused = AutoNumeric.options.symbolWhenUnfocused.none;
            this.unformatOnHover = AutoNumeric.options.unformatOnHover.unformat;
            this.unformatOnSubmit = AutoNumeric.options.unformatOnSubmit.keepCurrentValue;
            this.valuesToStrings = AutoNumeric.options.valuesToStrings.none;
            this.watchExternalChanges = AutoNumeric.options.watchExternalChanges.doNotWatch;
            this.wheelOn = AutoNumeric.options.wheelOn.focus;
            this.wheelStep = AutoNumeric.options.wheelStep.progressive;
        }
        AutonumericDefaults.decorators = [
            { type: core.Injectable }
        ];
        return AutonumericDefaults;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUTONUMERIC_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(( /**
         * @return {?}
         */function () { return AutonumericDirective; })),
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
            this.formatted = new core.EventEmitter();
            this.rawValueModified = new core.EventEmitter();
            this.onChangeFn = ( /**
             * @return {?}
             */function () {
            });
            this.onTouchedFn = ( /**
             * @return {?}
             */function () {
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
                Object.keys(AutoNumeric.options).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    if (typeof options[key] === 'undefined') {
                        normalized[key] = (( /** @type {?} */(_this.defaults)))[key];
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
                this.unsubscribeFormat = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:formatted', ( /**
                 * @param {?} $event
                 * @return {?}
                 */function ($event) {
                    _this.formatted.emit($event);
                }));
                this.unsubscribeRawValueModified = this.renderer.listen(this.elm.nativeElement, 'autoNumeric:rawValueModified', ( /**
                 * @param {?} $event
                 * @return {?}
                 */function ($event) {
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
            { type: core.Directive, args: [{
                        selector: '[autonumeric]',
                        providers: [AUTONUMERIC_CONTROL_VALUE_ACCESSOR],
                        // tslint:disable-next-line:use-host-property-decorator
                        host: {
                            '(blur)': 'onTouchedFn()'
                        },
                    },] }
        ];
        /** @nocollapse */
        AutonumericDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: AutonumericDefaults },
                { type: core.Renderer2 }
            ];
        };
        AutonumericDirective.propDecorators = {
            strategy: [{ type: core.Input }],
            options: [{ type: core.Input }],
            predefined: [{ type: core.Input }],
            formatted: [{ type: core.Output }],
            rawValueModified: [{ type: core.Output }]
        };
        return AutonumericDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_DEFAULTS = new core.InjectionToken('autonumeric defaults');
    /**
     * @param {?} userDefaults
     * @return {?}
     */
    function defaultsFactory(userDefaults) {
        /** @type {?} */
        var defaults = new AutonumericDefaults();
        Object.assign(defaults, userDefaults);
        return defaults;
    }
    var AutonumericModule = /** @class */ (function () {
        function AutonumericModule() {
        }
        /**
         * @param {?=} userDefaults
         * @return {?}
         */
        AutonumericModule.forRoot = /**
         * @param {?=} userDefaults
         * @return {?}
         */
            function (userDefaults) {
                if (userDefaults === void 0) {
                    userDefaults = {};
                }
                return {
                    ngModule: AutonumericModule,
                    providers: [
                        {
                            provide: USER_DEFAULTS,
                            useValue: userDefaults
                        },
                        {
                            provide: AutonumericDefaults,
                            useFactory: defaultsFactory,
                            deps: [USER_DEFAULTS]
                        }
                    ]
                };
            };
        AutonumericModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [AutonumericDirective],
                        exports: [AutonumericDirective]
                    },] }
        ];
        return AutonumericModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AutonumericDefaults = AutonumericDefaults;
    exports.defaultsFactory = defaultsFactory;
    exports.USER_DEFAULTS = USER_DEFAULTS;
    exports.AutonumericModule = AutonumericModule;
    exports.ɵa = AUTONUMERIC_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = AutonumericDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angularfy-autonumeric.umd.js.map