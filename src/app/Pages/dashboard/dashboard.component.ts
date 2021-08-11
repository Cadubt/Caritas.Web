import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shelteredModel: any;
  erro: any;

  constructor(
    private shelteredService: ShelteredService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShelteredList();
  }

  ngAfterViewInit() {
    this.getShelteredList();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shelteredModel.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Method to get a List of Sheltered Items
   */
  getShelteredList() {
    this.shelteredService.getShelteredList().subscribe(
      (res: any) => {
        this.shelteredModel = res.data;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

}