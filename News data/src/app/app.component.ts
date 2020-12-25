import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'spring-security-ui';
  userrole
   constructor(private as: AuthenticationService,
    private router: Router) {
    
    this.userrole = this.as.getRole()
  }




  logout() {
    this.as.logOut()
    this.router.navigateByUrl('login')
  }
}
