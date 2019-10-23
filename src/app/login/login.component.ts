import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(monFormulaire: NgForm) {
    this.authService.login(monFormulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );
  }

}
