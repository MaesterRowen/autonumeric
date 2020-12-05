/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import AutoNumeric from 'autonumeric';
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
        { type: Injectable }
    ];
    return AutonumericDefaults;
}());
export { AutonumericDefaults };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyZnkvYXV0b251bWVyaWMvIiwic291cmNlcyI6WyJsaWIvYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEM7SUFBQTtRQUVJLHdCQUFtQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ3JFLGdDQUEyQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDO1FBQ3pGLHlCQUFvQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7UUFDdkYsb0JBQWUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDakUsbUJBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDekQsNEJBQXVCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDN0UscUJBQWdCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDNUQsZ0NBQTJCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUM7UUFDbkYsa0JBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDdEQsMEJBQXFCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7UUFDN0UsNkJBQXdCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxV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Riw4Q0FBaUU7O0lBQ2pFLDZDQUF5RDs7SUFDekQsc0RBQTZFOztJQUM3RSwrQ0FBNEQ7O0lBQzVELDBEQUFtRjs7SUFDbkYsNENBQXNEOztJQUN0RCxvREFBNkU7O0lBQzdFLHVEQUFtRjs7SUFDbkYsd0RBQXFGOztJQUNyRixtREFBOEU7O0lBQzlFLGtEQUFvRTs7SUFDcEUsa0RBQW9FOztJQUNwRSxtREFBcUU7O0lBQ3JFLGlEQUFrRTs7SUFDbEUsMkNBQXdEOztJQUN4RCxnREFBdUU7O0lBQ3ZFLGtEQUFxRTs7SUFDckUsK0NBQStEOztJQUMvRCwwQ0FBdUQ7O0lBQ3ZELDBDQUFxRDs7SUFDckQsNENBQThEOztJQUM5RCwwQ0FBbUQ7O0lBQ25ELDJDQUE2RDs7SUFDN0QsMkNBQTZEOztJQUM3RCxpREFBd0U7O0lBQ3hFLHlEQUFpRjs7SUFDakYsNERBQXVGOztJQUN2RixvREFBeUU7O0lBQ3pFLCtDQUFrRTs7SUFDbEUsNkNBQTBEOztJQUMxRCwyQ0FBcUQ7O0lBQ3JELG1EQUE4RTs7SUFDOUUsb0RBQXVFOztJQUN2RSw4Q0FBMkQ7O0lBQzNELHVDQUFrRDs7SUFDbEQsNkNBQW9FOztJQUNwRSx3REFBb0Y7O0lBQ3BGLCtDQUEwRTs7SUFDMUUsNENBQXlEOztJQUN6RCw4Q0FBMkQ7O0lBQzNELHFEQUE0RTs7SUFDNUUsK0NBQTZEOztJQUM3RCwyQ0FBcUQ7O0lBQ3JELHlDQUFpRDs7SUFDakQseUNBQWlEOztJQUNqRCxrREFBbUU7O0lBQ25FLDhDQUErRDs7SUFDL0QsK0NBQXlFOztJQUN6RSw4Q0FBMkQ7O0lBQzNELG1EQUEyRTs7SUFDM0Usc0NBQTRDOztJQUM1Qyx3Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXV0b251bWVyaWNPcHRpb25zfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy5tb2RlbFwiO1xyXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnYXV0b251bWVyaWMnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRvbnVtZXJpY0RlZmF1bHRzIGltcGxlbWVudHMgQXV0b251bWVyaWNPcHRpb25zIHtcclxuICAgIGFsbG93RGVjaW1hbFBhZGRpbmcgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmFsbG93RGVjaW1hbFBhZGRpbmcuYWx3YXlzO1xyXG4gICAgYWx3YXlzQWxsb3dEZWNpbWFsQ2hhcmFjdGVyID0gQXV0b051bWVyaWMub3B0aW9ucy5hbHdheXNBbGxvd0RlY2ltYWxDaGFyYWN0ZXIuZG9Ob3RBbGxvdztcclxuICAgIGNhcmV0UG9zaXRpb25PbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5jYXJldFBvc2l0aW9uT25Gb2N1cy5kb05vRm9yY2VDYXJldFBvc2l0aW9uO1xyXG4gICAgY3JlYXRlTG9jYWxMaXN0ID0gQXV0b051bWVyaWMub3B0aW9ucy5jcmVhdGVMb2NhbExpc3QuY3JlYXRlTGlzdDtcclxuICAgIGN1cnJlbmN5U3ltYm9sID0gQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5ub25lO1xyXG4gICAgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sUGxhY2VtZW50LnByZWZpeDtcclxuICAgIGRlY2ltYWxDaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXIuZG90O1xyXG4gICAgZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyQWx0ZXJuYXRpdmUubm9uZTtcclxuICAgIGRlY2ltYWxQbGFjZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXMudHdvO1xyXG4gICAgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzUmF3VmFsdWUudXNlRGVmYXVsdDtcclxuICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlc1Nob3duT25CbHVyLnVzZURlZmF1bHQ7XHJcbiAgICBkZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzLnVzZURlZmF1bHQ7XHJcbiAgICBkZWZhdWx0VmFsdWVPdmVycmlkZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVmYXVsdFZhbHVlT3ZlcnJpZGUuZG9Ob3RPdmVycmlkZTtcclxuICAgIGRpZ2l0YWxHcm91cFNwYWNpbmcgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0YWxHcm91cFNwYWNpbmcudGhyZWU7XHJcbiAgICBkaWdpdEdyb3VwU2VwYXJhdG9yID0gQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmNvbW1hO1xyXG4gICAgZGl2aXNvcldoZW5VbmZvY3VzZWQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpdmlzb3JXaGVuVW5mb2N1c2VkLm5vbmU7XHJcbiAgICBlbXB0eUlucHV0QmVoYXZpb3IgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmVtcHR5SW5wdXRCZWhhdmlvci5mb2N1cztcclxuICAgIGV2ZW50QnViYmxlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZXZlbnRCdWJibGVzLmJ1YmJsZXM7XHJcbiAgICBldmVudElzQ2FuY2VsYWJsZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZXZlbnRJc0NhbmNlbGFibGUuaXNDYW5jZWxhYmxlO1xyXG4gICAgZmFpbE9uVW5rbm93bk9wdGlvbiA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZmFpbE9uVW5rbm93bk9wdGlvbi5pZ25vcmU7XHJcbiAgICBmb3JtYXRPblBhZ2VMb2FkID0gQXV0b051bWVyaWMub3B0aW9ucy5mb3JtYXRPblBhZ2VMb2FkLmZvcm1hdDtcclxuICAgIGZvcm11bGFNb2RlID0gQXV0b051bWVyaWMub3B0aW9ucy5mb3JtdWxhTW9kZS5kaXNhYmxlZDtcclxuICAgIGhpc3RvcnlTaXplID0gQXV0b051bWVyaWMub3B0aW9ucy5oaXN0b3J5U2l6ZS5tZWRpdW07XHJcbiAgICBpc0NhbmNlbGxhYmxlID0gQXV0b051bWVyaWMub3B0aW9ucy5pc0NhbmNlbGxhYmxlLmNhbmNlbGxhYmxlO1xyXG4gICAgbGVhZGluZ1plcm8gPSBBdXRvTnVtZXJpYy5vcHRpb25zLmxlYWRpbmdaZXJvLmRlbnk7XHJcbiAgICBtYXhpbXVtVmFsdWUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1heGltdW1WYWx1ZS50ZW5UcmlsbGlvbnM7XHJcbiAgICBtaW5pbXVtVmFsdWUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1pbmltdW1WYWx1ZS50ZW5UcmlsbGlvbnM7XHJcbiAgICBtb2RpZnlWYWx1ZU9uV2hlZWwgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm1vZGlmeVZhbHVlT25XaGVlbC5tb2RpZnlWYWx1ZTtcclxuICAgIG5lZ2F0aXZlQnJhY2tldHNUeXBlT25CbHVyID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZUJyYWNrZXRzVHlwZU9uQmx1ci5ub25lO1xyXG4gICAgbmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50Lm5vbmU7XHJcbiAgICBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlU2lnbkNoYXJhY3Rlci5oeXBoZW47XHJcbiAgICBub0V2ZW50TGlzdGVuZXJzID0gQXV0b051bWVyaWMub3B0aW9ucy5ub0V2ZW50TGlzdGVuZXJzLmFkZEV2ZW50cztcclxuICAgIG9uSW52YWxpZFBhc3RlID0gQXV0b051bWVyaWMub3B0aW9ucy5vbkludmFsaWRQYXN0ZS5lcnJvcjtcclxuICAgIG91dHB1dEZvcm1hdCA9IEF1dG9OdW1lcmljLm9wdGlvbnMub3V0cHV0Rm9ybWF0Lm5vbmU7XHJcbiAgICBvdmVycmlkZU1pbk1heExpbWl0cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMub3ZlcnJpZGVNaW5NYXhMaW1pdHMuZG9Ob3RPdmVycmlkZTtcclxuICAgIHBvc2l0aXZlU2lnbkNoYXJhY3RlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMucG9zaXRpdmVTaWduQ2hhcmFjdGVyLnBsdXM7XHJcbiAgICByYXdWYWx1ZURpdmlzb3IgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnJhd1ZhbHVlRGl2aXNvci5ub25lO1xyXG4gICAgcmVhZE9ubHkgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnJlYWRPbmx5LnJlYWRXcml0ZTtcclxuICAgIHJvdW5kaW5nTWV0aG9kID0gQXV0b051bWVyaWMub3B0aW9ucy5yb3VuZGluZ01ldGhvZC5oYWxmVXBTeW1tZXRyaWM7XHJcbiAgICBzYXZlVmFsdWVUb1Nlc3Npb25TdG9yYWdlID0gQXV0b051bWVyaWMub3B0aW9ucy5zYXZlVmFsdWVUb1Nlc3Npb25TdG9yYWdlLmRvTm90U2F2ZTtcclxuICAgIHNlbGVjdE51bWJlck9ubHkgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNlbGVjdE51bWJlck9ubHkuc2VsZWN0TnVtYmVyc09ubHk7XHJcbiAgICBzZWxlY3RPbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5zZWxlY3RPbkZvY3VzLnNlbGVjdDtcclxuICAgIHNlcmlhbGl6ZVNwYWNlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2VyaWFsaXplU3BhY2VzLnBsdXM7XHJcbiAgICBzaG93T25seU51bWJlcnNPbkZvY3VzID0gQXV0b051bWVyaWMub3B0aW9ucy5zaG93T25seU51bWJlcnNPbkZvY3VzLnNob3dBbGw7XHJcbiAgICBzaG93UG9zaXRpdmVTaWduID0gQXV0b051bWVyaWMub3B0aW9ucy5zaG93UG9zaXRpdmVTaWduLmhpZGU7XHJcbiAgICBzaG93V2FybmluZ3MgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dXYXJuaW5ncy5zaG93O1xyXG4gICAgc3R5bGVSdWxlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3R5bGVSdWxlcy5ub25lO1xyXG4gICAgc3VmZml4VGV4dCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3VmZml4VGV4dC5ub25lO1xyXG4gICAgc3ltYm9sV2hlblVuZm9jdXNlZCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc3ltYm9sV2hlblVuZm9jdXNlZC5ub25lO1xyXG4gICAgdW5mb3JtYXRPbkhvdmVyID0gQXV0b051bWVyaWMub3B0aW9ucy51bmZvcm1hdE9uSG92ZXIudW5mb3JtYXQ7XHJcbiAgICB1bmZvcm1hdE9uU3VibWl0ID0gQXV0b051bWVyaWMub3B0aW9ucy51bmZvcm1hdE9uU3VibWl0LmtlZXBDdXJyZW50VmFsdWU7XHJcbiAgICB2YWx1ZXNUb1N0cmluZ3MgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnZhbHVlc1RvU3RyaW5ncy5ub25lO1xyXG4gICAgd2F0Y2hFeHRlcm5hbENoYW5nZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLndhdGNoRXh0ZXJuYWxDaGFuZ2VzLmRvTm90V2F0Y2g7XHJcbiAgICB3aGVlbE9uID0gQXV0b051bWVyaWMub3B0aW9ucy53aGVlbE9uLmZvY3VzO1xyXG4gICAgd2hlZWxTdGVwID0gQXV0b051bWVyaWMub3B0aW9ucy53aGVlbFN0ZXAucHJvZ3Jlc3NpdmU7XHJcbn1cclxuIl19