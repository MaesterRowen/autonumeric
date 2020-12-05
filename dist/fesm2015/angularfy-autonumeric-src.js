import { Injectable, Directive, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, InjectionToken, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutonumericDefaults {
    constructor() {
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
}
AutonumericDefaults.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AUTONUMERIC_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AutonumericDirective)),
    multi: true
};
class AutonumericDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_DEFAULTS = new InjectionToken('autonumeric defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
function defaultsFactory(userDefaults) {
    /** @type {?} */
    const defaults = new AutonumericDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
class AutonumericModule {
    /**
     * @param {?=} userDefaults
     * @return {?}
     */
    static forRoot(userDefaults = {}) {
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
    }
}
AutonumericModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AutonumericDirective],
                exports: [AutonumericDirective]
            },] }
];

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

export { AutonumericDefaults, defaultsFactory, USER_DEFAULTS, AutonumericModule, AUTONUMERIC_CONTROL_VALUE_ACCESSOR as ɵa, AutonumericDirective as ɵb };

//# sourceMappingURL=angularfy-autonumeric-src.js.map