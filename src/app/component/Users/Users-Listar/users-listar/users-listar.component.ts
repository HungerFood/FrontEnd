import { Component, OnInit } from '@angular/core';
import { Users } from '../../../../model/User/users';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../../../Services/Users/users.service';

@Component({
  selector: 'app-users-listar',
  templateUrl: './users-listar.component.html',
  styleUrl: './users-listar.component.css'
})
export class UsersListarComponent implements OnInit{
  lista: Users[] = [];
  dataSource: MatTableDataSource<UsersService> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','password']//'enabled','roles']


  constructor(private bS: UsersService) {
  }
  ngOnInit(): void {
    this.bS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.bS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
}
