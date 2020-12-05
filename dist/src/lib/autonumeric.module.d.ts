import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { AutonumericOptions } from "./autonumeric.model";
import { AutonumericDefaults } from "./autonumeric-defaults.service";
export declare const USER_DEFAULTS: InjectionToken<{}>;
export declare function defaultsFactory(userDefaults: AutonumericOptions): AutonumericDefaults;
export declare class AutonumericModule {
    static forRoot(userDefaults?: AutonumericOptions): ModuleWithProviders;
}
