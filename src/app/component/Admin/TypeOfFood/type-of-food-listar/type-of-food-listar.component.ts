import { TypeOfFoodService } from './../../../../services/TypeOfFood/type-of-food.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TypeOfFood } from '../../../../model/TypeOfFood/type-of-food';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-type-of-food-listar',
  templateUrl: './type-of-food-listar.component.html',
  styleUrl: './type-of-food-listar.component.css'
})
export class TypeOfFoodListarComponent implements OnInit{
  lista:TypeOfFood[] = [];
  displayedColumns = ['id', 'food_type_name', 'eliminar'];
  dataSource = new MatTableDataSource<TypeOfFood>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private TypeOfFoodService: TypeOfFoodService,
              private router: Router,
              private dialog:MatDialog
  ) { 
    console.log("Load Constructor");  
  }

  ngOnInit(): void {
    this.TypeOfFoodService.list().subscribe(data => this.dataSource.data = data);
   //me suscribo
   this.TypeOfFoodService.getList().subscribe(data => {
     this.dataSource.data = data;
   });
  }

  openDialog(id:string){
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id);
      }else{
        console.log("FALSE");
      }
    });
  }

  delete(id:string){
    this.TypeOfFoodService.delete(id).subscribe(()=>{
      this.TypeOfFoodService.list().subscribe(data=>{
        this.TypeOfFoodService.setList(data);
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
    