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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyZnkvYXV0b251bWVyaWMvIiwic291cmNlcyI6WyJsaWIvYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFFdEMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVJLHdCQUFtQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ3JFLGdDQUEyQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDO1FBQ3pGLHlCQUFvQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7UUFDdkYsb0JBQWUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDakUsbUJBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDekQsNEJBQXVCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDN0UscUJBQWdCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDNUQsZ0NBQTJCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUM7UUFDbkYsa0JBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDdEQsMEJBQXFCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7UUFDN0UsNkJBQXdCLEdBQUcsV0FBVyxDQUFDLE9BQU8s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QUN6RCxzREFBNkU7O0lBQzdFLCtDQUE0RDs7SUFDNUQsMERBQW1GOztJQUNuRiw0Q0FBc0Q7O0lBQ3RELG9EQUE2RTs7SUFDN0UsdURBQW1GOztJQUNuRix3REFBcUY7O0lBQ3JGLG1EQUE4RTs7SUFDOUUsa0RBQW9FOztJQUNwRSxrREFBb0U7O0lBQ3BFLG1EQUFxRTs7SUFDckUsaURBQWtFOztJQUNsRSwyQ0FBd0Q7O0lBQ3hELGdEQUF1RTs7SUFDdkUsa0RBQXFFOztJQUNyRSwrQ0FBK0Q7O0lBQy9ELDBDQUF1RDs7SUFDdkQsMENBQXFEOztJQUNyRCw0Q0FBOEQ7O0lBQzlELDBDQUFtRDs7SUFDbkQsMkNBQTZEOztJQUM3RCwyQ0FBNkQ7O0lBQzdELGlEQUF3RTs7SUFDeEUseURBQWlGOztJQUNqRiw0REFBdUY7O0lBQ3ZGLG9EQUF5RTs7SUFDekUsK0NBQWtFOztJQUNsRSw2Q0FBMEQ7O0lBQzFELDJDQUFxRDs7SUFDckQsbURBQThFOztJQUM5RSxvREFBdUU7O0lBQ3ZFLDhDQUEyRDs7SUFDM0QsdUNBQWtEOztJQUNsRCw2Q0FBb0U7O0lBQ3BFLHdEQUFvRjs7SUFDcEYsK0NBQTBFOztJQUMxRSw0Q0FBeUQ7O0lBQ3pELDhDQUEyRDs7SUFDM0QscURBQTRFOztJQUM1RSwrQ0FBNkQ7O0lBQzdELDJDQUFxRDs7SUFDckQseUNBQWlEOztJQUNqRCx5Q0FBaUQ7O0lBQ2pELGtEQUFtRTs7SUFDbkUsOENBQStEOztJQUMvRCwrQ0FBeUU7O0lBQ3pFLDhDQUEyRDs7SUFDM0QsbURBQTJFOztJQUMzRSxzQ0FBNEM7O0lBQzVDLHdDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRvbnVtZXJpY09wdGlvbnN9IGZyb20gXCIuL2F1dG9udW1lcmljLm1vZGVsXCI7XHJcbmltcG9ydCBBdXRvTnVtZXJpYyBmcm9tICdhdXRvbnVtZXJpYyc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dG9udW1lcmljRGVmYXVsdHMgaW1wbGVtZW50cyBBdXRvbnVtZXJpY09wdGlvbnMge1xyXG4gICAgYWxsb3dEZWNpbWFsUGFkZGluZyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuYWxsb3dEZWNpbWFsUGFkZGluZy5hbHdheXM7XHJcbiAgICBhbHdheXNBbGxvd0RlY2ltYWxDaGFyYWN0ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmFsd2F5c0FsbG93RGVjaW1hbENoYXJhY3Rlci5kb05vdEFsbG93O1xyXG4gICAgY2FyZXRQb3NpdGlvbk9uRm9jdXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmNhcmV0UG9zaXRpb25PbkZvY3VzLmRvTm9Gb3JjZUNhcmV0UG9zaXRpb247XHJcbiAgICBjcmVhdGVMb2NhbExpc3QgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmNyZWF0ZUxvY2FsTGlzdC5jcmVhdGVMaXN0O1xyXG4gICAgY3VycmVuY3lTeW1ib2wgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sLm5vbmU7XHJcbiAgICBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQucHJlZml4O1xyXG4gICAgZGVjaW1hbENoYXJhY3RlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5kb3Q7XHJcbiAgICBkZWNpbWFsQ2hhcmFjdGVyQWx0ZXJuYXRpdmUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZS5ub25lO1xyXG4gICAgZGVjaW1hbFBsYWNlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlcy50d287XHJcbiAgICBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXNSYXdWYWx1ZS51c2VEZWZhdWx0O1xyXG4gICAgZGVjaW1hbFBsYWNlc1Nob3duT25CbHVyID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzU2hvd25PbkJsdXIudXNlRGVmYXVsdDtcclxuICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uRm9jdXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXNTaG93bk9uRm9jdXMudXNlRGVmYXVsdDtcclxuICAgIGRlZmF1bHRWYWx1ZU92ZXJyaWRlID0gQXV0b051bWVyaWMub3B0aW9ucy5kZWZhdWx0VmFsdWVPdmVycmlkZS5kb05vdE92ZXJyaWRlO1xyXG4gICAgZGlnaXRhbEdyb3VwU3BhY2luZyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRhbEdyb3VwU3BhY2luZy50aHJlZTtcclxuICAgIGRpZ2l0R3JvdXBTZXBhcmF0b3IgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0R3JvdXBTZXBhcmF0b3IuY29tbWE7XHJcbiAgICBkaXZpc29yV2hlblVuZm9jdXNlZCA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZGl2aXNvcldoZW5VbmZvY3VzZWQubm9uZTtcclxuICAgIGVtcHR5SW5wdXRCZWhhdmlvciA9IEF1dG9OdW1lcmljLm9wdGlvbnMuZW1wdHlJbnB1dEJlaGF2aW9yLmZvY3VzO1xyXG4gICAgZXZlbnRCdWJibGVzID0gQXV0b051bWVyaWMub3B0aW9ucy5ldmVudEJ1YmJsZXMuYnViYmxlcztcclxuICAgIGV2ZW50SXNDYW5jZWxhYmxlID0gQXV0b051bWVyaWMub3B0aW9ucy5ldmVudElzQ2FuY2VsYWJsZS5pc0NhbmNlbGFibGU7XHJcbiAgICBmYWlsT25Vbmtub3duT3B0aW9uID0gQXV0b051bWVyaWMub3B0aW9ucy5mYWlsT25Vbmtub3duT3B0aW9uLmlnbm9yZTtcclxuICAgIGZvcm1hdE9uUGFnZUxvYWQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmZvcm1hdE9uUGFnZUxvYWQuZm9ybWF0O1xyXG4gICAgZm9ybXVsYU1vZGUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmZvcm11bGFNb2RlLmRpc2FibGVkO1xyXG4gICAgaGlzdG9yeVNpemUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmhpc3RvcnlTaXplLm1lZGl1bTtcclxuICAgIGlzQ2FuY2VsbGFibGUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmlzQ2FuY2VsbGFibGUuY2FuY2VsbGFibGU7XHJcbiAgICBsZWFkaW5nWmVybyA9IEF1dG9OdW1lcmljLm9wdGlvbnMubGVhZGluZ1plcm8uZGVueTtcclxuICAgIG1heGltdW1WYWx1ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMubWF4aW11bVZhbHVlLnRlblRyaWxsaW9ucztcclxuICAgIG1pbmltdW1WYWx1ZSA9IEF1dG9OdW1lcmljLm9wdGlvbnMubWluaW11bVZhbHVlLnRlblRyaWxsaW9ucztcclxuICAgIG1vZGlmeVZhbHVlT25XaGVlbCA9IEF1dG9OdW1lcmljLm9wdGlvbnMubW9kaWZ5VmFsdWVPbldoZWVsLm1vZGlmeVZhbHVlO1xyXG4gICAgbmVnYXRpdmVCcmFja2V0c1R5cGVPbkJsdXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlQnJhY2tldHNUeXBlT25CbHVyLm5vbmU7XHJcbiAgICBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudCA9IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQubm9uZTtcclxuICAgIG5lZ2F0aXZlU2lnbkNoYXJhY3RlciA9IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVTaWduQ2hhcmFjdGVyLmh5cGhlbjtcclxuICAgIG5vRXZlbnRMaXN0ZW5lcnMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5vRXZlbnRMaXN0ZW5lcnMuYWRkRXZlbnRzO1xyXG4gICAgb25JbnZhbGlkUGFzdGUgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm9uSW52YWxpZFBhc3RlLmVycm9yO1xyXG4gICAgb3V0cHV0Rm9ybWF0ID0gQXV0b051bWVyaWMub3B0aW9ucy5vdXRwdXRGb3JtYXQubm9uZTtcclxuICAgIG92ZXJyaWRlTWluTWF4TGltaXRzID0gQXV0b051bWVyaWMub3B0aW9ucy5vdmVycmlkZU1pbk1heExpbWl0cy5kb05vdE92ZXJyaWRlO1xyXG4gICAgcG9zaXRpdmVTaWduQ2hhcmFjdGVyID0gQXV0b051bWVyaWMub3B0aW9ucy5wb3NpdGl2ZVNpZ25DaGFyYWN0ZXIucGx1cztcclxuICAgIHJhd1ZhbHVlRGl2aXNvciA9IEF1dG9OdW1lcmljLm9wdGlvbnMucmF3VmFsdWVEaXZpc29yLm5vbmU7XHJcbiAgICByZWFkT25seSA9IEF1dG9OdW1lcmljLm9wdGlvbnMucmVhZE9ubHkucmVhZFdyaXRlO1xyXG4gICAgcm91bmRpbmdNZXRob2QgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnJvdW5kaW5nTWV0aG9kLmhhbGZVcFN5bW1ldHJpYztcclxuICAgIHNhdmVWYWx1ZVRvU2Vzc2lvblN0b3JhZ2UgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNhdmVWYWx1ZVRvU2Vzc2lvblN0b3JhZ2UuZG9Ob3RTYXZlO1xyXG4gICAgc2VsZWN0TnVtYmVyT25seSA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2VsZWN0TnVtYmVyT25seS5zZWxlY3ROdW1iZXJzT25seTtcclxuICAgIHNlbGVjdE9uRm9jdXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNlbGVjdE9uRm9jdXMuc2VsZWN0O1xyXG4gICAgc2VyaWFsaXplU3BhY2VzID0gQXV0b051bWVyaWMub3B0aW9ucy5zZXJpYWxpemVTcGFjZXMucGx1cztcclxuICAgIHNob3dPbmx5TnVtYmVyc09uRm9jdXMgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dPbmx5TnVtYmVyc09uRm9jdXMuc2hvd0FsbDtcclxuICAgIHNob3dQb3NpdGl2ZVNpZ24gPSBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dQb3NpdGl2ZVNpZ24uaGlkZTtcclxuICAgIHNob3dXYXJuaW5ncyA9IEF1dG9OdW1lcmljLm9wdGlvbnMuc2hvd1dhcm5pbmdzLnNob3c7XHJcbiAgICBzdHlsZVJ1bGVzID0gQXV0b051bWVyaWMub3B0aW9ucy5zdHlsZVJ1bGVzLm5vbmU7XHJcbiAgICBzdWZmaXhUZXh0ID0gQXV0b051bWVyaWMub3B0aW9ucy5zdWZmaXhUZXh0Lm5vbmU7XHJcbiAgICBzeW1ib2xXaGVuVW5mb2N1c2VkID0gQXV0b051bWVyaWMub3B0aW9ucy5zeW1ib2xXaGVuVW5mb2N1c2VkLm5vbmU7XHJcbiAgICB1bmZvcm1hdE9uSG92ZXIgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnVuZm9ybWF0T25Ib3Zlci51bmZvcm1hdDtcclxuICAgIHVuZm9ybWF0T25TdWJtaXQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnVuZm9ybWF0T25TdWJtaXQua2VlcEN1cnJlbnRWYWx1ZTtcclxuICAgIHZhbHVlc1RvU3RyaW5ncyA9IEF1dG9OdW1lcmljLm9wdGlvbnMudmFsdWVzVG9TdHJpbmdzLm5vbmU7XHJcbiAgICB3YXRjaEV4dGVybmFsQ2hhbmdlcyA9IEF1dG9OdW1lcmljLm9wdGlvbnMud2F0Y2hFeHRlcm5hbENoYW5nZXMuZG9Ob3RXYXRjaDtcclxuICAgIHdoZWVsT24gPSBBdXRvTnVtZXJpYy5vcHRpb25zLndoZWVsT24uZm9jdXM7XHJcbiAgICB3aGVlbFN0ZXAgPSBBdXRvTnVtZXJpYy5vcHRpb25zLndoZWVsU3RlcC5wcm9ncmVzc2l2ZTtcclxufVxyXG4iXX0=