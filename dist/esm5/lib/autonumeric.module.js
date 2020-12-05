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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvbnVtZXJpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE1BQU0sS0FBTyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxlQUFlLENBQUMsWUFBZ0M7O1FBQ3RELFFBQVEsR0FBd0IsSUFBSSxtQkFBbUIsRUFBRTtJQUMvRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0QyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQ7SUFBQTtJQXNCQSxDQUFDOzs7OztJQWhCVSx5QkFBTzs7OztJQUFkLFVBQWUsWUFBcUM7UUFBckMsNkJBQUEsRUFBQSxpQkFBcUM7UUFDaEQsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsWUFBWTtpQkFDekI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDeEI7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOztnQkFyQkosUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQzs7SUFrQkQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXV0b251bWVyaWNPcHRpb25zfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy5tb2RlbFwiO1xyXG5pbXBvcnQge0F1dG9udW1lcmljRGVmYXVsdHN9IGZyb20gXCIuL2F1dG9udW1lcmljLWRlZmF1bHRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRvbnVtZXJpY0RpcmVjdGl2ZX0gZnJvbSBcIi4vYXV0b251bWVyaWMuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfREVGQVVMVFMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2F1dG9udW1lcmljIGRlZmF1bHRzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHNGYWN0b3J5KHVzZXJEZWZhdWx0czogQXV0b251bWVyaWNPcHRpb25zKTogQXV0b251bWVyaWNEZWZhdWx0cyB7XHJcbiAgICBjb25zdCBkZWZhdWx0czogQXV0b251bWVyaWNEZWZhdWx0cyA9IG5ldyBBdXRvbnVtZXJpY0RlZmF1bHRzKCk7XHJcbiAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCB1c2VyRGVmYXVsdHMpO1xyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBdXRvbnVtZXJpY0RpcmVjdGl2ZV0sXHJcbiAgICBleHBvcnRzOiBbQXV0b251bWVyaWNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvbnVtZXJpY01vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCh1c2VyRGVmYXVsdHM6IEF1dG9udW1lcmljT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEF1dG9udW1lcmljTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBVU0VSX0RFRkFVTFRTLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiB1c2VyRGVmYXVsdHNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogQXV0b251bWVyaWNEZWZhdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBkZWZhdWx0c0ZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW1VTRVJfREVGQVVMVFNdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==