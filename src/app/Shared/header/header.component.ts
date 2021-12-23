import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = sessionStorage.getItem("userName");
  @Output() public sidenavToggle = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
    if(
    (sessionStorage.getItem("token") == null) ||
    (sessionStorage.getItem("userId") == null) ||
    (sessionStorage.getItem("userName") == null) ||
    (sessionStorage.getItem("userRole") == null) ||
    (sessionStorage.getItem("userEmail") == null) ||
    (sessionStorage.getItem("userDeleted") != "null")){
      this.router.navigate(['/'])
      alert(sessionStorage.getItem("token") + " | " +
      sessionStorage.getItem("userId") + " | " +
      sessionStorage.getItem("userName") + " | " +
      sessionStorage.getItem("userRole") + " | " +
      sessionStorage.getItem("userEmail") + " | " +
      sessionStorage.getItem("userDeleted"))
    }
  }

  backToLogin() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userDeleted');
    return this.router.navigate(['/'])
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
