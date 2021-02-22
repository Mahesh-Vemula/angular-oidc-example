import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = 'anonymous';

  constructor(private readonly oauthService: OAuthService) { }

  ngOnInit() {
  	var claims = this.oauthService.getIdentityClaims();
    if (claims){
      this.username = claims['preferred_username'];
      console.log(claims);
    }
  }

  logout() {
    this.oauthService.logOut();
  }

}
