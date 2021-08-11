import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListUsersService } from 'src/app/Core/list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns = ['name', 'email', 'role']
  dataSource!: any;

  constructor(
    private router: Router,
    private listUsersService: ListUsersService
  ) { }

  ngOnInit(): void {
    this.getListUsersData();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  

  getListUsersData() {
    this.listUsersService.getListUsers().subscribe(
      (res: any) => {
      this.dataSource = res.data;
      
    })
  }

  onSubmit() {
    this.listUsersService.getListUsers().subscribe(
      (res: any) => { }
    );
  }

}
