import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../../../../model/User/user';
import { UserService } from '../../../../services/User/user.service';

@Component({
  selector: 'app-perfil-listar',
  templateUrl: './perfil-listar.component.html',
  styleUrl: './perfil-listar.component.css'
})
export class PerfilListarComponent {
  
  lista: User[] = [];
  displayedColumns = ['id', 'firstname', 'lastname', 'email'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
    private router: Router,
    private dialog: MatDialog) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    //this.userService.getUserId().subscribe(userId => {
    //  if (userId) {
    //    this.userService.listId(userId).subscribe(data => {
    //      console.log(data); // Para depuración
    //      this.dataSource = new MatTableDataSource([data]); // Ajusta el DataSource
    //      this.dataSource.paginator = this.paginator;
    //      this.dataSource.sort = this.sort;
    //    });
    //  } else {
    //    console.error('No user ID found');
    //  }
    //});

    this.userService.list().subscribe(data => {
      console.log(data); // Para depuración
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.userService.getList().subscribe(data => {
      console.log(data); // Para depuración
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
