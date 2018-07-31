<<<<<<< HEAD
import { UserService } from './__services/user.service';
=======
>>>>>>> adding route protecting for admin links (+8 squashed commits)
import { AuthService } from './__services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
<<<<<<< HEAD
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
        if (!returnUrl) return;
        localStorage.removeItem('returnUrl');
      }
=======
  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if (!user) return;

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
>>>>>>> adding route protecting for admin links (+8 squashed commits)
    });
  }
}
