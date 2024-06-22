import { UserService } from './../../../../services/User/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../../model/User/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-donor-listar',
  templateUrl: './donor-listar.component.html',
  styleUrl: './donor-listar.component.css'
})
export class DonorListarComponent implements OnInit {
  lista:User[] = [];
  displayedColumns = ['id', 'firstname', 'lastname', 'email', 'eliminar'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private UserService: UserService,
      private router: Router,
      private dialogo:MatDialog) {
      console.log("Load Constructor");   
    }
  
    ngOnInit(): void {
      this.UserService.list().subscribe(data => this.dataSource.data = data);
      //me suscribo
      this.UserService.getList().subscribe(data => {
        this.dataSource.data = data;
      });
    }

    openDialog(id:string){
      const dialogRef = this.dialogo.open(DialogoComponent);
      dialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.delete(id);
        }else{
          console.log("FALSE");
        }
      });
    }

    delete(id:string){
      this.UserService.delete(id).subscribe(()=>{
        this.UserService.list().subscribe(data=>{
          this.UserService.setList(data);
        })
      });
    }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   }
 
   filtrar(e:any){
     this.dataSource.filter = e.target.value.trim();
   }


}
