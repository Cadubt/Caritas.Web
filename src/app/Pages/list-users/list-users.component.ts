import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserConfigurationService } from 'src/app/Core/user-configuration.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private router: Router,
    private userConfigurationService: UserConfigurationService) { }
  displayedColumns: string[] = ['role','name', 'email', 'createdAt','deletedAt'];
  dataSource = [];
  
  getAllUsers(){
    this.userConfigurationService.getUsers().subscribe(
      (res: any) => {
        this.dataSource = res.data;
      })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
