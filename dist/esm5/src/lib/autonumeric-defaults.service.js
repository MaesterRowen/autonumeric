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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyZnkvYXV0b251bWVyaWMvc3JjLyIsInNvdXJjZXMiOlsibGliL2F1dG9udW1lcmljLWRlZmF1bHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDO0lBQUE7UUFFSSx3QkFBbUIsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNyRSxnQ0FBMkIsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQztRQUN6Rix5QkFBb0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO1FBQ3ZGLG9CQUFlLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ2pFLG1CQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ3pELDRCQUF1QixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBQzdFLHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQzVELGdDQUEyQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDO1FBQ25GLGtCQUFhLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3RELDBCQUFxQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1FBQzdFLDZCQUF3QixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENB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SUFDdkYsOENBQWlFOztJQUNqRSw2Q0FBeUQ7O0lBQ3pELHNEQUE2RTs7SUFDN0UsK0NBQTREOztJQUM1RCwwREFBbUY7O0lBQ25GLDRDQUFzRDs7SUFDdEQsb0RBQTZFOztJQUM3RSx1REFBbUY7O0lBQ25GLHdEQUFxRjs7SUFDckYsbURBQThFOztJQUM5RSxrREFBb0U7O0lBQ3BFLGtEQUFvRTs7SUFDcEUsbURBQXFFOztJQUNyRSxpREFBa0U7O0lBQ2xFLDJDQUF3RDs7SUFDeEQsZ0RBQXVFOztJQUN2RSxrREFBcUU7O0lBQ3JFLCtDQUErRDs7SUFDL0QsMENBQXVEOztJQUN2RCwwQ0FBcUQ7O0lBQ3JELDRDQUE4RDs7SUFDOUQsMENBQW1EOztJQUNuRCwyQ0FBNkQ7O0lBQzdELDJDQUE2RDs7SUFDN0QsaURBQXdFOztJQUN4RSx5REFBaUY7O0lBQ2pGLDREQUF1Rjs7SUFDdkYsb0RBQXlFOztJQUN6RSwrQ0FBa0U7O0lBQ2xFLDZDQUEwRDs7SUFDMUQsMkNBQXFEOztJQUNyRCxtREFBOEU7O0lBQzlFLG9EQUF1RTs7SUFDdkUsOENBQTJEOztJQUMzRCx1Q0FBa0Q7O0lBQ2xELDZDQUFvRTs7SUFDcEUsd0RBQW9GOztJQUNwRiwrQ0FBMEU7O0lBQzFFLDRDQUF5RDs7SUFDekQsOENBQTJEOztJQUMzRCxxREFBNEU7O0lBQzVFLCtDQUE2RDs7SUFDN0QsMkNBQXFEOztJQUNyRCx5Q0FBaUQ7O0lBQ2pELHlDQUFpRDs7SUFDakQsa0RBQW1FOztJQUNuRSw4Q0FBK0Q7O0lBQy9ELCtDQUF5RTs7SUFDekUsOENBQTJEOztJQUMzRCxtREFBMkU7O0lBQzNFLHNDQUE0Qzs7SUFDNUMsd0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0F1dG9udW1lcmljT3B0aW9uc30gZnJvbSBcIi4vYXV0b251bWVyaWMubW9kZWxcIjtcclxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJ2F1dG9udW1lcmljJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0b251bWVyaWNEZWZhdWx0cyBpbXBsZW1lbnRzIEF1dG9udW1lcmljT3B0aW9ucyB7XHJcbiAgICBhbGxvd0RlY2ltYWxQYWRkaW5nID0gQXV0b051bWVyaWMub3B0aW9ucy5hbGxvd0RlY2ltYWxQYWRkaW5nLmFsd2F5cztcclxuICAgIGFsd2F5c0FsbG93RGVjaW1hbENoYXJhY3RlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuYWx3YXlzQWxsb3dEZWNpbWFsQ2hhcmFjdGVyLmRvTm90QWxsb3c7XHJcbiAgICBjYXJldFBvc2l0aW9uT25Gb2N1cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuY2FyZXRQb3NpdGlvbk9uRm9jdXMuZG9Ob0ZvcmNlQ2FyZXRQb3NpdGlvbjtcclxuICAgIGNyZWF0ZUxvY2FsTGlzdCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuY3JlYXRlTG9jYWxMaXN0LmNyZWF0ZUxpc3Q7XHJcbiAgICBjdXJyZW5jeVN5bWJvbCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2wubm9uZTtcclxuICAgIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50ID0gQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbFBsYWNlbWVudC5wcmVmaXg7XHJcbiAgICBkZWNpbWFsQ2hhcmFjdGVyID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyLmRvdDtcclxuICAgIGRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlLm5vbmU7XHJcbiAgICBkZWNpbWFsUGxhY2VzID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzLnR3bztcclxuICAgIGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlLnVzZURlZmF1bHQ7XHJcbiAgICBkZWNpbWFsUGxhY2VzU2hvd25PbkJsdXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ci51c2VEZWZhdWx0O1xyXG4gICAgZGVjaW1hbFBsYWNlc1Nob3duT25Gb2N1cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlc1Nob3duT25Gb2N1cy51c2VEZWZhdWx0O1xyXG4gICAgZGVmYXVsdFZhbHVlT3ZlcnJpZGUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlZmF1bHRWYWx1ZU92ZXJyaWRlLmRvTm90T3ZlcnJpZGU7XHJcbiAgICBkaWdpdGFsR3JvdXBTcGFjaW5nID0gQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdGFsR3JvdXBTcGFjaW5nLnRocmVlO1xyXG4gICAgZGlnaXRHcm91cFNlcGFyYXRvciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5jb21tYTtcclxuICAgIGRpdmlzb3JXaGVuVW5mb2N1c2VkID0gQXV0b051bWVyaWMub3B0aW9ucy5kaXZpc29yV2hlblVuZm9jdXNlZC5ub25lO1xyXG4gICAgZW1wdHlJbnB1dEJlaGF2aW9yID0gQXV0b051bWVyaWMub3B0aW9ucy5lbXB0eUlucHV0QmVoYXZpb3IuZm9jdXM7XHJcbiAgICBldmVudEJ1YmJsZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmV2ZW50QnViYmxlcy5idWJibGVzO1xyXG4gICAgZXZlbnRJc0NhbmNlbGFibGUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmV2ZW50SXNDYW5jZWxhYmxlLmlzQ2FuY2VsYWJsZTtcclxuICAgIGZhaWxPblVua25vd25PcHRpb24gPSBBdXRvTnVtZXJpYy5vcHRpb25zLmZhaWxPblVua25vd25PcHRpb24uaWdub3JlO1xyXG4gICAgZm9ybWF0T25QYWdlTG9hZCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZm9ybWF0T25QYWdlTG9hZC5mb3JtYXQ7XHJcbiAgICBmb3JtdWxhTW9kZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZm9ybXVsYU1vZGUuZGlzYWJsZWQ7XHJcbiAgICBoaXN0b3J5U2l6ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuaGlzdG9yeVNpemUubWVkaXVtO1xyXG4gICAgaXNDYW5jZWxsYWJsZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuaXNDYW5jZWxsYWJsZS5jYW5jZWxsYWJsZTtcclxuICAgIGxlYWRpbmdaZXJvID0gQXV0b051bWVyaWMub3B0aW9ucy5sZWFkaW5nWmVyby5kZW55O1xyXG4gICAgbWF4aW11bVZhbHVlID0gQXV0b051bWVyaWMub3B0aW9ucy5tYXhpbXVtVmFsdWUudGVuVHJpbGxpb25zO1xyXG4gICAgbWluaW11bVZhbHVlID0gQXV0b051bWVyaWMub3B0aW9ucy5taW5pbXVtVmFsdWUudGVuVHJpbGxpb25zO1xyXG4gICAgbW9kaWZ5VmFsdWVPbldoZWVsID0gQXV0b051bWVyaWMub3B0aW9ucy5tb2RpZnlWYWx1ZU9uV2hlZWwubW9kaWZ5VmFsdWU7XHJcbiAgICBuZWdhdGl2ZUJyYWNrZXRzVHlwZU9uQmx1ciA9IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVCcmFja2V0c1R5cGVPbkJsdXIubm9uZTtcclxuICAgIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50ID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5ub25lO1xyXG4gICAgbmVnYXRpdmVTaWduQ2hhcmFjdGVyID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVNpZ25DaGFyYWN0ZXIuaHlwaGVuO1xyXG4gICAgbm9FdmVudExpc3RlbmVycyA9IEF1dG9OdW1lcmljLm9wdGlvbnMubm9FdmVudExpc3RlbmVycy5hZGRFdmVudHM7XHJcbiAgICBvbkludmFsaWRQYXN0ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMub25JbnZhbGlkUGFzdGUuZXJyb3I7XHJcbiAgICBvdXRwdXRGb3JtYXQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm91dHB1dEZvcm1hdC5ub25lO1xyXG4gICAgb3ZlcnJpZGVNaW5NYXhMaW1pdHMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm92ZXJyaWRlTWluTWF4TGltaXRzLmRvTm90T3ZlcnJpZGU7XHJcbiAgICBwb3NpdGl2ZVNpZ25DaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnBvc2l0aXZlU2lnbkNoYXJhY3Rlci5wbHVzO1xyXG4gICAgcmF3VmFsdWVEaXZpc29yID0gQXV0b051bWVyaWMub3B0aW9ucy5yYXdWYWx1ZURpdmlzb3Iubm9uZTtcclxuICAgIHJlYWRPbmx5ID0gQXV0b051bWVyaWMub3B0aW9ucy5yZWFkT25seS5yZWFkV3JpdGU7XHJcbiAgICByb3VuZGluZ01ldGhvZCA9IEF1dG9OdW1lcmljLm9wdGlvbnMucm91bmRpbmdNZXRob2QuaGFsZlVwU3ltbWV0cmljO1xyXG4gICAgc2F2ZVZhbHVlVG9TZXNzaW9uU3RvcmFnZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2F2ZVZhbHVlVG9TZXNzaW9uU3RvcmFnZS5kb05vdFNhdmU7XHJcbiAgICBzZWxlY3ROdW1iZXJPbmx5ID0gQXV0b051bWVyaWMub3B0aW9ucy5zZWxlY3ROdW1iZXJPbmx5LnNlbGVjdE51bWJlcnNPbmx5O1xyXG4gICAgc2VsZWN0T25Gb2N1cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2VsZWN0T25Gb2N1cy5zZWxlY3Q7XHJcbiAgICBzZXJpYWxpemVTcGFjZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNlcmlhbGl6ZVNwYWNlcy5wbHVzO1xyXG4gICAgc2hvd09ubHlOdW1iZXJzT25Gb2N1cyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2hvd09ubHlOdW1iZXJzT25Gb2N1cy5zaG93QWxsO1xyXG4gICAgc2hvd1Bvc2l0aXZlU2lnbiA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2hvd1Bvc2l0aXZlU2lnbi5oaWRlO1xyXG4gICAgc2hvd1dhcm5pbmdzID0gQXV0b051bWVyaWMub3B0aW9ucy5zaG93V2FybmluZ3Muc2hvdztcclxuICAgIHN0eWxlUnVsZXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnN0eWxlUnVsZXMubm9uZTtcclxuICAgIHN1ZmZpeFRleHQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnN1ZmZpeFRleHQubm9uZTtcclxuICAgIHN5bWJvbFdoZW5VbmZvY3VzZWQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnN5bWJvbFdoZW5VbmZvY3VzZWQubm9uZTtcclxuICAgIHVuZm9ybWF0T25Ib3ZlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMudW5mb3JtYXRPbkhvdmVyLnVuZm9ybWF0O1xyXG4gICAgdW5mb3JtYXRPblN1Ym1pdCA9IEF1dG9OdW1lcmljLm9wdGlvbnMudW5mb3JtYXRPblN1Ym1pdC5rZWVwQ3VycmVudFZhbHVlO1xyXG4gICAgdmFsdWVzVG9TdHJpbmdzID0gQXV0b051bWVyaWMub3B0aW9ucy52YWx1ZXNUb1N0cmluZ3Mubm9uZTtcclxuICAgIHdhdGNoRXh0ZXJuYWxDaGFuZ2VzID0gQXV0b051bWVyaWMub3B0aW9ucy53YXRjaEV4dGVybmFsQ2hhbmdlcy5kb05vdFdhdGNoO1xyXG4gICAgd2hlZWxPbiA9IEF1dG9OdW1lcmljLm9wdGlvbnMud2hlZWxPbi5mb2N1cztcclxuICAgIHdoZWVsU3RlcCA9IEF1dG9OdW1lcmljLm9wdGlvbnMud2hlZWxTdGVwLnByb2dyZXNzaXZlO1xyXG59XHJcbiJdfQ==