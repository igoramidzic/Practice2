import { Component, OnInit } from "@angular/core";
import { AuthService } from "~/app/services/auth.service";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    email: string = "igor";
    password: string = "123";


    constructor(private router: Router, private page: Page, private authService: AuthService) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        console.log(this.email);
        this.authService.login(this.email, this.password)
            .then(res => {
                this.router.navigate(['home']);
            })
            .catch(error => {
                console.log(error);
            })
    }
}
