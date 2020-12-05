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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvbnVtZXJpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE1BQU0sT0FBTyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxlQUFlLENBQUMsWUFBZ0M7O1VBQ3RELFFBQVEsR0FBd0IsSUFBSSxtQkFBbUIsRUFBRTtJQUMvRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0QyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBT0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFtQyxFQUFFO1FBQ2hELE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQzs7O1lBckJKLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBdXRvbnVtZXJpY09wdGlvbnN9IGZyb20gXCIuL2F1dG9udW1lcmljLm1vZGVsXCI7XHJcbmltcG9ydCB7QXV0b251bWVyaWNEZWZhdWx0c30gZnJvbSBcIi4vYXV0b251bWVyaWMtZGVmYXVsdHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dG9udW1lcmljRGlyZWN0aXZlfSBmcm9tIFwiLi9hdXRvbnVtZXJpYy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignYXV0b251bWVyaWMgZGVmYXVsdHMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0c0ZhY3RvcnkodXNlckRlZmF1bHRzOiBBdXRvbnVtZXJpY09wdGlvbnMpOiBBdXRvbnVtZXJpY0RlZmF1bHRzIHtcclxuICAgIGNvbnN0IGRlZmF1bHRzOiBBdXRvbnVtZXJpY0RlZmF1bHRzID0gbmV3IEF1dG9udW1lcmljRGVmYXVsdHMoKTtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHVzZXJEZWZhdWx0cyk7XHJcbiAgICByZXR1cm4gZGVmYXVsdHM7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0F1dG9udW1lcmljRGlyZWN0aXZlXSxcclxuICAgIGV4cG9ydHM6IFtBdXRvbnVtZXJpY0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9udW1lcmljTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KHVzZXJEZWZhdWx0czogQXV0b251bWVyaWNPcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQXV0b251bWVyaWNNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFVTRVJfREVGQVVMVFMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IHVzZXJEZWZhdWx0c1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBBdXRvbnVtZXJpY0RlZmF1bHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGRlZmF1bHRzRmFjdG9yeSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbVVNFUl9ERUZBVUxUU11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19