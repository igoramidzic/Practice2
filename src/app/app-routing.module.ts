import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/pages/home/home.module#HomeModule" },
    { path: "about", loadChildren: "~/app/pages/about/about.module#AboutModule" },
    { path: "login", loadChildren: "~/app/pages/login/login.module#LoginModule" }
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
