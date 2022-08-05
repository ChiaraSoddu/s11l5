import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username!:string;
  password!:string;
  val:string = '';
  valu:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  LoginUser()
  {this.username = this.val
    this.password = this.valu
    if (this.username == this.val && this.password == this.valu){
      console.log("Welcome!");
    }
  }

}
