import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authenticate';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})

export class HeaderComponent {
  constructor(
    private _service: AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    console.log("Logout called from header !!");
    this._service.logout();
  }
}
