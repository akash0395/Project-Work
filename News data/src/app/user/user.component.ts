import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterContentInit, AfterViewInit {

  username
  constructor() {
    this.username = sessionStorage.getItem('username')
   }

  ngOnInit(): void {
    
  }
  ngAfterContentInit(){
     
  }
  ngAfterViewInit(){

  }

}
