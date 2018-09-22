import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NavbarRoutingModule } from "./navbar-routing.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports: [
        NavbarRoutingModule
    ],
    declarations: [
        NavbarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NavbarModule { }
