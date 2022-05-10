import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { AuthService } from 'src/app/Core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shelteredModel: any;
  erro: any;
  showMenu = true;
  filterargs: any;

  constructor(
    private authService: AuthService,
    private shelteredService: ShelteredService,
    private router: Router,    
  ) { }
  
  

  ngOnInit(): void {
    this.getShelteredList();    
    this.authService.showMenu();
  }

  ngAfterViewInit() {
    this.getShelteredList();
    this.authService.showMenu();
  }

  onNavigateTo(pageName: any, SheltId?: any) {
    if (SheltId !== null){
      const SheltNavigationInfo: NavigationExtras = {state:{id:SheltId}}
      this.router.navigate([`/${pageName}`, SheltNavigationInfo.state]);
    }
    else
      this.router.navigate([`/${pageName}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    var filterargs = filterValue.trim().toLowerCase();
    // console.log(filterargs);
  }  

  /**
   * Method to get a List of Sheltered Items
   */
  getShelteredList() {
    this.shelteredService.getShelteredList(1,"APROVADO").subscribe(
      (res: any) => {
        this.shelteredModel = res.data;
        console.log(res.data);
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  

}