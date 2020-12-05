/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import AutoNumeric from 'autonumeric';
export class AutonumericDefaults {
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
if (false) {
    /** @type {?} */
    AutonumericDefaults.prototype.allowDecimalPadding;
    /** @type {?} */
    AutonumericDefaults.prototype.alwaysAllowDecimalCharacter;
    /** @type {?} */
    AutonumericDefaults.prototype.caretPositionOnFocus;
    /** @type {?} */
    AutonumericDefaults.prototype.createLocalList;
    /** @type {?} */
    AutonumericDefaults.prototype.currencySymbol;
    /** @type {?} */
    AutonumericDefaults.prototype.currencySymbolPlacement;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalCharacter;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalCharacterAlternative;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalPlaces;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalPlacesRawValue;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalPlacesShownOnBlur;
    /** @type {?} */
    AutonumericDefaults.prototype.decimalPlacesShownOnFocus;
    /** @type {?} */
    AutonumericDefaults.prototype.defaultValueOverride;
    /** @type {?} */
    AutonumericDefaults.prototype.digitalGroupSpacing;
    /** @type {?} */
    AutonumericDefaults.prototype.digitGroupSeparator;
    /** @type {?} */
    AutonumericDefaults.prototype.divisorWhenUnfocused;
    /** @type {?} */
    AutonumericDefaults.prototype.emptyInputBehavior;
    /** @type {?} */
    AutonumericDefaults.prototype.eventBubbles;
    /** @type {?} */
    AutonumericDefaults.prototype.eventIsCancelable;
    /** @type {?} */
    AutonumericDefaults.prototype.failOnUnknownOption;
    /** @type {?} */
    AutonumericDefaults.prototype.formatOnPageLoad;
    /** @type {?} */
    AutonumericDefaults.prototype.formulaMode;
    /** @type {?} */
    AutonumericDefaults.prototype.historySize;
    /** @type {?} */
    AutonumericDefaults.prototype.isCancellable;
    /** @type {?} */
    AutonumericDefaults.prototype.leadingZero;
    /** @type {?} */
    AutonumericDefaults.prototype.maximumValue;
    /** @type {?} */
    AutonumericDefaults.prototype.minimumValue;
    /** @type {?} */
    AutonumericDefaults.prototype.modifyValueOnWheel;
    /** @type {?} */
    AutonumericDefaults.prototype.negativeBracketsTypeOnBlur;
    /** @type {?} */
    AutonumericDefaults.prototype.negativePositiveSignPlacement;
    /** @type {?} */
    AutonumericDefaults.prototype.negativeSignCharacter;
    /** @type {?} */
    AutonumericDefaults.prototype.noEventListeners;
    /** @type {?} */
    AutonumericDefaults.prototype.onInvalidPaste;
    /** @type {?} */
    AutonumericDefaults.prototype.outputFormat;
    /** @type {?} */
    AutonumericDefaults.prototype.overrideMinMaxLimits;
    /** @type {?} */
    AutonumericDefaults.prototype.positiveSignCharacter;
    /** @type {?} */
    AutonumericDefaults.prototype.rawValueDivisor;
    /** @type {?} */
    AutonumericDefaults.prototype.readOnly;
    /** @type {?} */
    AutonumericDefaults.prototype.roundingMethod;
    /** @type {?} */
    AutonumericDefaults.prototype.saveValueToSessionStorage;
    /** @type {?} */
    AutonumericDefaults.prototype.selectNumberOnly;
    /** @type {?} */
    AutonumericDefaults.prototype.selectOnFocus;
    /** @type {?} */
    AutonumericDefaults.prototype.serializeSpaces;
    /** @type {?} */
    AutonumericDefaults.prototype.showOnlyNumbersOnFocus;
    /** @type {?} */
    AutonumericDefaults.prototype.showPositiveSign;
    /** @type {?} */
    AutonumericDefaults.prototype.showWarnings;
    /** @type {?} */
    AutonumericDefaults.prototype.styleRules;
    /** @type {?} */
    AutonumericDefaults.prototype.suffixText;
    /** @type {?} */
    AutonumericDefaults.prototype.symbolWhenUnfocused;
    /** @type {?} */
    AutonumericDefaults.prototype.unformatOnHover;
    /** @type {?} */
    AutonumericDefaults.prototype.unformatOnSubmit;
    /** @type {?} */
    AutonumericDefaults.prototype.valuesToStrings;
    /** @type {?} */
    AutonumericDefaults.prototype.watchExternalChanges;
    /** @type {?} */
    AutonumericDefaults.prototype.wheelOn;
    /** @type {?} */
    AutonumericDefaults.prototype.wheelStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyZnkvYXV0b251bWVyaWMvc3JjLyIsInNvdXJjZXMiOlsibGliL2F1dG9udW1lcmljLWRlZmF1bHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBRXRDLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFSSx3QkFBbUIsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNyRSxnQ0FBMkIsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQztRQUN6Rix5QkFBb0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO1FBQ3ZGLG9CQUFlLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ2pFLG1CQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ3pELDRCQUF1QixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBQzdFLHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQzVELGdDQUEyQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDO1FBQ25GLGtCQUFhLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3RELDBCQUFxQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1FBQzdFLDZCQUF3QixHQUFHLFdBQVcsQ0FBQyxP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RDs7SUFDekQsc0RBQTZFOztJQUM3RSwrQ0FBNEQ7O0lBQzVELDBEQUFtRjs7SUFDbkYsNENBQXNEOztJQUN0RCxvREFBNkU7O0lBQzdFLHVEQUFtRjs7SUFDbkYsd0RBQXFGOztJQUNyRixtREFBOEU7O0lBQzlFLGtEQUFvRTs7SUFDcEUsa0RBQW9FOztJQUNwRSxtREFBcUU7O0lBQ3JFLGlEQUFrRTs7SUFDbEUsMkNBQXdEOztJQUN4RCxnREFBdUU7O0lBQ3ZFLGtEQUFxRTs7SUFDckUsK0NBQStEOztJQUMvRCwwQ0FBdUQ7O0lBQ3ZELDBDQUFxRDs7SUFDckQsNENBQThEOztJQUM5RCwwQ0FBbUQ7O0lBQ25ELDJDQUE2RDs7SUFDN0QsMkNBQTZEOztJQUM3RCxpREFBd0U7O0lBQ3hFLHlEQUFpRjs7SUFDakYsNERBQXVGOztJQUN2RixvREFBeUU7O0lBQ3pFLCtDQUFrRTs7SUFDbEUsNkNBQTBEOztJQUMxRCwyQ0FBcUQ7O0lBQ3JELG1EQUE4RTs7SUFDOUUsb0RBQXVFOztJQUN2RSw4Q0FBMkQ7O0lBQzNELHVDQUFrRDs7SUFDbEQsNkNBQW9FOztJQUNwRSx3REFBb0Y7O0lBQ3BGLCtDQUEwRTs7SUFDMUUsNENBQXlEOztJQUN6RCw4Q0FBMkQ7O0lBQzNELHFEQUE0RTs7SUFDNUUsK0NBQTZEOztJQUM3RCwyQ0FBcUQ7O0lBQ3JELHlDQUFpRDs7SUFDakQseUNBQWlEOztJQUNqRCxrREFBbUU7O0lBQ25FLDhDQUErRDs7SUFDL0QsK0NBQXlFOztJQUN6RSw4Q0FBMkQ7O0lBQzNELG1EQUEyRTs7SUFDM0Usc0NBQTRDOztJQUM1Qyx3Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXV0b251bWVyaWNPcHRpb25zfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy5tb2RlbFwiO1xyXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnYXV0b251bWVyaWMnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRvbnVtZXJpY0RlZmF1bHRzIGltcGxlbWVudHMgQXV0b251bWVyaWNPcHRpb25zIHtcclxuICAgIGFsbG93RGVjaW1hbFBhZGRpbmcgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmFsbG93RGVjaW1hbFBhZGRpbmcuYWx3YXlzO1xyXG4gICAgYWx3YXlzQWxsb3dEZWNpbWFsQ2hhcmFjdGVyID0gQXV0b051bWVyaWMub3B0aW9ucy5hbHdheXNBbGxvd0RlY2ltYWxDaGFyYWN0ZXIuZG9Ob3RBbGxvdztcclxuICAgIGNhcmV0UG9zaXRpb25PbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5jYXJldFBvc2l0aW9uT25Gb2N1cy5kb05vRm9yY2VDYXJldFBvc2l0aW9uO1xyXG4gICAgY3JlYXRlTG9jYWxMaXN0ID0gQXV0b051bWVyaWMub3B0aW9ucy5jcmVhdGVMb2NhbExpc3QuY3JlYXRlTGlzdDtcclxuICAgIGN1cnJlbmN5U3ltYm9sID0gQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5ub25lO1xyXG4gICAgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sUGxhY2VtZW50LnByZWZpeDtcclxuICAgIGRlY2ltYWxDaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXIuZG90O1xyXG4gICAgZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyQWx0ZXJuYXRpdmUubm9uZTtcclxuICAgIGRlY2ltYWxQbGFjZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXMudHdvO1xyXG4gICAgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzUmF3VmFsdWUudXNlRGVmYXVsdDtcclxuICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlc1Nob3duT25CbHVyLnVzZURlZmF1bHQ7XHJcbiAgICBkZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzLnVzZURlZmF1bHQ7XHJcbiAgICBkZWZhdWx0VmFsdWVPdmVycmlkZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVmYXVsdFZhbHVlT3ZlcnJpZGUuZG9Ob3RPdmVycmlkZTtcclxuICAgIGRpZ2l0YWxHcm91cFNwYWNpbmcgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0YWxHcm91cFNwYWNpbmcudGhyZWU7XHJcbiAgICBkaWdpdEdyb3VwU2VwYXJhdG9yID0gQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmNvbW1hO1xyXG4gICAgZGl2aXNvcldoZW5VbmZvY3VzZWQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpdmlzb3JXaGVuVW5mb2N1c2VkLm5vbmU7XHJcbiAgICBlbXB0eUlucHV0QmVoYXZpb3IgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmVtcHR5SW5wdXRCZWhhdmlvci5mb2N1cztcclxuICAgIGV2ZW50QnViYmxlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZXZlbnRCdWJibGVzLmJ1YmJsZXM7XHJcbiAgICBldmVudElzQ2FuY2VsYWJsZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZXZlbnRJc0NhbmNlbGFibGUuaXNDYW5jZWxhYmxlO1xyXG4gICAgZmFpbE9uVW5rbm93bk9wdGlvbiA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZmFpbE9uVW5rbm93bk9wdGlvbi5pZ25vcmU7XHJcbiAgICBmb3JtYXRPblBhZ2VMb2FkID0gQXV0b051bWVyaWMub3B0aW9ucy5mb3JtYXRPblBhZ2VMb2FkLmZvcm1hdDtcclxuICAgIGZvcm11bGFNb2RlID0gQXV0b051bWVyaWMub3B0aW9ucy5mb3JtdWxhTW9kZS5kaXNhYmxlZDtcclxuICAgIGhpc3RvcnlTaXplID0gQXV0b051bWVyaWMub3B0aW9ucy5oaXN0b3J5U2l6ZS5tZWRpdW07XHJcbiAgICBpc0NhbmNlbGxhYmxlID0gQXV0b051bWVyaWMub3B0aW9ucy5pc0NhbmNlbGxhYmxlLmNhbmNlbGxhYmxlO1xyXG4gICAgbGVhZGluZ1plcm8gPSBBdXRvTnVtZXJpYy5vcHRpb25zLmxlYWRpbmdaZXJvLmRlbnk7XHJcbiAgICBtYXhpbXVtVmFsdWUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1heGltdW1WYWx1ZS50ZW5UcmlsbGlvbnM7XHJcbiAgICBtaW5pbXVtVmFsdWUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1pbmltdW1WYWx1ZS50ZW5UcmlsbGlvbnM7XHJcbiAgICBtb2RpZnlWYWx1ZU9uV2hlZWwgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1vZGlmeVZhbHVlT25XaGVlbC5tb2RpZnlWYWx1ZTtcclxuICAgIG5lZ2F0aXZlQnJhY2tldHNUeXBlT25CbHVyID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZUJyYWNrZXRzVHlwZU9uQmx1ci5ub25lO1xyXG4gICAgbmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50Lm5vbmU7XHJcbiAgICBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlU2lnbkNoYXJhY3Rlci5oeXBoZW47XHJcbiAgICBub0V2ZW50TGlzdGVuZXJzID0gQXV0b051bWVyaWMub3B0aW9ucy5ub0V2ZW50TGlzdGVuZXJzLmFkZEV2ZW50cztcclxuICAgIG9uSW52YWxpZFBhc3RlID0gQXV0b051bWVyaWMub3B0aW9ucy5vbkludmFsaWRQYXN0ZS5lcnJvcjtcclxuICAgIG91dHB1dEZvcm1hdCA9IEF1dG9OdW1lcmljLm9wdGlvbnMub3V0cHV0Rm9ybWF0Lm5vbmU7XHJcbiAgICBvdmVycmlkZU1pbk1heExpbWl0cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMub3ZlcnJpZGVNaW5NYXhMaW1pdHMuZG9Ob3RPdmVycmlkZTtcclxuICAgIHBvc2l0aXZlU2lnbkNoYXJhY3RlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMucG9zaXRpdmVTaWduQ2hhcmFjdGVyLnBsdXM7XHJcbiAgICByYXdWYWx1ZURpdmlzb3IgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnJhd1ZhbHVlRGl2aXNvci5ub25lO1xyXG4gICAgcmVhZE9ubHkgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnJlYWRPbmx5LnJlYWRXcml0ZTtcclxuICAgIHJvdW5kaW5nTWV0aG9kID0gQXV0b051bWVyaWMub3B0aW9ucy5yb3VuZGluZ01ldGhvZC5oYWxmVXBTeW1tZXRyaWM7XHJcbiAgICBzYXZlVmFsdWVUb1Nlc3Npb25TdG9yYWdlID0gQXV0b051bWVyaWMub3B0aW9ucy5zYXZlVmFsdWVUb1Nlc3Npb25TdG9yYWdlLmRvTm90U2F2ZTtcclxuICAgIHNlbGVjdE51bWJlck9ubHkgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNlbGVjdE51bWJlck9ubHkuc2VsZWN0TnVtYmVyc09ubHk7XHJcbiAgICBzZWxlY3RPbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5zZWxlY3RPbkZvY3VzLnNlbGVjdDtcclxuICAgIHNlcmlhbGl6ZVNwYWNlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2VyaWFsaXplU3BhY2VzLnBsdXM7XHJcbiAgICBzaG93T25seU51bWJlcnNPbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5zaG93T25seU51bWJlcnNPbkZvY3VzLnNob3dBbGw7XHJcbiAgICBzaG93UG9zaXRpdmVTaWduID0gQXV0b051bWVyaWMub3B0aW9ucy5zaG93UG9zaXRpdmVTaWduLmhpZGU7XHJcbiAgICBzaG93V2FybmluZ3MgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dXYXJuaW5ncy5zaG93O1xyXG4gICAgc3R5bGVSdWxlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3R5bGVSdWxlcy5ub25lO1xyXG4gICAgc3VmZml4VGV4dCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3VmZml4VGV4dC5ub25lO1xyXG4gICAgc3ltYm9sV2hlblVuZm9jdXNlZCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3ltYm9sV2hlblVuZm9jdXNlZC5ub25lO1xyXG4gICAgdW5mb3JtYXRPbkhvdmVyID0gQXV0b051bWVyaWMub3B0aW9ucy51bmZvcm1hdE9uSG92ZXIudW5mb3JtYXQ7XHJcbiAgICB1bmZvcm1hdE9uU3VibWl0ID0gQXV0b051bWVyaWMub3B0aW9ucy51bmZvcm1hdE9uU3VibWl0LmtlZXBDdXJyZW50VmFsdWU7XHJcbiAgICB2YWx1ZXNUb1N0cmluZ3MgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnZhbHVlc1RvU3RyaW5ncy5ub25lO1xyXG4gICAgd2F0Y2hFeHRlcm5hbENoYW5nZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLndhdGNoRXh0ZXJuYWxDaGFuZ2VzLmRvTm90V2F0Y2g7XHJcbiAgICB3aGVlbE9uID0gQXV0b051bWVyaWMub3B0aW9ucy53aGVlbE9uLmZvY3VzO1xyXG4gICAgd2hlZWxTdGVwID0gQXV0b051bWVyaWMub3B0aW9ucy53aGVlbFN0ZXAucHJvZ3Jlc3NpdmU7XHJcbn1cclxuIl19