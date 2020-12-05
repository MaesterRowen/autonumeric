/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { AutonumericDefaults } from "./autonumeric-defaults.service";
import { AutonumericDirective } from "./autonumeric.directive";
import { CommonModule } from '@angular/common';
/** @type {?} */
export var USER_DEFAULTS = new InjectionToken('autonumeric defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
export function defaultsFactory(userDefaults) {
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
        if (userDefaults === void 0) { userDefaults = {}; }
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AutonumericDirective],
                    exports: [AutonumericDirective]
                },] }
    ];
    return AutonumericModule;
}());
export { AutonumericModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJsaWIvYXV0b251bWVyaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUU3QyxNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUsZUFBZSxDQUFDLFlBQWdDOztRQUN0RCxRQUFRLEdBQXdCLElBQUksbUJBQW1CLEVBQUU7SUFDL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVEO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7SUFoQlUseUJBQU87Ozs7SUFBZCxVQUFlLFlBQXFDO1FBQXJDLDZCQUFBLEVBQUEsaUJBQXFDO1FBQ2hELE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Z0JBckJKLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEM7O0lBa0JELHdCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0F1dG9udW1lcmljT3B0aW9uc30gZnJvbSBcIi4vYXV0b251bWVyaWMubW9kZWxcIjtcclxuaW1wb3J0IHtBdXRvbnVtZXJpY0RlZmF1bHRzfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy1kZWZhdWx0cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0b251bWVyaWNEaXJlY3RpdmV9IGZyb20gXCIuL2F1dG9udW1lcmljLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX0RFRkFVTFRTID0gbmV3IEluamVjdGlvblRva2VuKCdhdXRvbnVtZXJpYyBkZWZhdWx0cycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzRmFjdG9yeSh1c2VyRGVmYXVsdHM6IEF1dG9udW1lcmljT3B0aW9ucyk6IEF1dG9udW1lcmljRGVmYXVsdHMge1xyXG4gICAgY29uc3QgZGVmYXVsdHM6IEF1dG9udW1lcmljRGVmYXVsdHMgPSBuZXcgQXV0b251bWVyaWNEZWZhdWx0cygpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgdXNlckRlZmF1bHRzKTtcclxuICAgIHJldHVybiBkZWZhdWx0cztcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbQXV0b251bWVyaWNEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW0F1dG9udW1lcmljRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b251bWVyaWNNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QodXNlckRlZmF1bHRzOiBBdXRvbnVtZXJpY09wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBdXRvbnVtZXJpY01vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogVVNFUl9ERUZBVUxUUyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogdXNlckRlZmF1bHRzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEF1dG9udW1lcmljRGVmYXVsdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZGVmYXVsdHNGYWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtVU0VSX0RFRkFVTFRTXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=