import { Component, OnInit } from "@angular/core";
import { AuthService } from "~/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor (private authService: AuthService, private router: Router) {
    }

    ngOnInit () {
        if (!this.authService.user.value) {
            this.router.navigate(['login']);
        } else {
            this.router.navigate(['home']);
        }
    }
}