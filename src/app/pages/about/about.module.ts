import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
    imports: [
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }
