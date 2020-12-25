import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../authentication.service';
import {News} from '../news';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  num=0
  news:any
  constructor(
    private as: AuthenticationService,private router: Router){
      this.as.getNews().subscribe(data=>{
        //@ts-ignore
        this.news=data.articles
        console.log(this.news[0].title)
      });
     }

     count(){
       this.num++;
     }
  ngOnInit(): void {
  }
  invalidLogin = false
  username = 'user'
  password = 'user'
  @Input() message = null
  onSubmit(){
    this.getByUsername();
    (this.as.authenticate(this.username, this.password).subscribe(
      data => {
        if(data.roles[0] === 'ROLE_USER'){
          this.router.navigate(['user'])
        }
        if(data.roles[0] === 'ROLE_ADMIN'){           
          this.router.navigate(['admin'])
        }
        this.invalidLogin = false
      },
      error => {
        this.message = 'Login failure'
        this.invalidLogin = true
      }
    )
    );
  }

  getByUsername(){
     this.as.getByUsername('user').subscribe(m =>{
       console.log(m);
       
     })
  }

}
