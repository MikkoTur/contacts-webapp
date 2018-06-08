import {Component, OnInit} from '@angular/core';
import {UserCredentials} from '../user-credentials';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ErrorDialogComponent} from '../../ui/error-dialog/error-dialog.component';
import {DialogService} from '../../ui/services/dialog.service';

@Component({
  selector: 'cw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService, private router: Router, private dialogService: DialogService) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticationService.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.errorMessage = '';
    this.authenticationService.signInUser(this.userCredentials).subscribe(result => {
      this.router.navigate(['/contacts']);
    }, error => {
      this.userCredentials.username = '';
      this.userCredentials.password = '';
      this.loginFailed = true;
      this.dialogService.errorDialog('Sing in failed');
      // this.errorMessage = 'Sign in failed';
      console.error('User sing in failed');
    });
  }
}
