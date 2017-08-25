import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AuthenticationService } from '../service/authenticate';

@Component({
    selector: 'home-cmp',
    providers: [AuthenticationService],
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']    
})

export class HomeComponent {

    constructor(
        private _service: AuthenticationService) { }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}