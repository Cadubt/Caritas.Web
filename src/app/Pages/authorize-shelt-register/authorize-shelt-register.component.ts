import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize-shelt-register',
  templateUrl: './authorize-shelt-register.component.html',
  styleUrls: ['./authorize-shelt-register.component.scss']
})
export class AuthorizeSheltRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
  }


}
