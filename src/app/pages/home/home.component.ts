import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { AuthService } from "~/app/services/auth.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    user: any;

    constructor(private router: Router, private page: Page, public authService: AuthService) {
        this.page.actionBarHidden = true;

        this.authService.user.subscribe(user => {
            this.user = user;
            console.log(this.user);
        })
    }

    ngOnInit(): void {

    }
    
    onLogout (): void {
        this.authService.logout()
            .then(res => {
                this.router.navigate(['login']);
            })
    }
}
