import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { NativeScriptFormsModule } from 'nativescript-angular/forms'

@NgModule({
    imports: [
        LoginRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
