/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { AutonumericDefaults } from "./autonumeric-defaults.service";
import { AutonumericDirective } from "./autonumeric.directive";
import { CommonModule } from '@angular/common';
/** @type {?} */
export const USER_DEFAULTS = new InjectionToken('autonumeric defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
export function defaultsFactory(userDefaults) {
    /** @type {?} */
    const defaults = new AutonumericDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
export class AutonumericModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJsaWIvYXV0b251bWVyaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUU3QyxNQUFNLE9BQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUsZUFBZSxDQUFDLFlBQWdDOztVQUN0RCxRQUFRLEdBQXdCLElBQUksbUJBQW1CLEVBQUU7SUFDL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQU9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBbUMsRUFBRTtRQUNoRCxPQUFPO1lBQ0gsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxZQUFZO2lCQUN6QjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUsZUFBZTtvQkFDM0IsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN4QjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7OztZQXJCSixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXV0b251bWVyaWNPcHRpb25zfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy5tb2RlbFwiO1xyXG5pbXBvcnQge0F1dG9udW1lcmljRGVmYXVsdHN9IGZyb20gXCIuL2F1dG9udW1lcmljLWRlZmF1bHRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRvbnVtZXJpY0RpcmVjdGl2ZX0gZnJvbSBcIi4vYXV0b251bWVyaWMuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfREVGQVVMVFMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2F1dG9udW1lcmljIGRlZmF1bHRzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHNGYWN0b3J5KHVzZXJEZWZhdWx0czogQXV0b251bWVyaWNPcHRpb25zKTogQXV0b251bWVyaWNEZWZhdWx0cyB7XHJcbiAgICBjb25zdCBkZWZhdWx0czogQXV0b251bWVyaWNEZWZhdWx0cyA9IG5ldyBBdXRvbnVtZXJpY0RlZmF1bHRzKCk7XHJcbiAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCB1c2VyRGVmYXVsdHMpO1xyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBdXRvbnVtZXJpY0RpcmVjdGl2ZV0sXHJcbiAgICBleHBvcnRzOiBbQXV0b251bWVyaWNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvbnVtZXJpY01vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCh1c2VyRGVmYXVsdHM6IEF1dG9udW1lcmljT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEF1dG9udW1lcmljTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBVU0VSX0RFRkFVTFRTLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiB1c2VyRGVmYXVsdHNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogQXV0b251bWVyaWNEZWZhdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBkZWZhdWx0c0ZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW1VTRVJfREVGQVVMVFNdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==