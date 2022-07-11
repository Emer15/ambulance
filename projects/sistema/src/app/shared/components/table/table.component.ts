import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() listFields=['id','name','lastname'];
  @Input() dataSource=[
  {id:1,name:"Sergio",lastname:"Hidalgo"},
  {id:2,name:"Emerson",lastname:"Flores"},
  {id:3,name:"Juan",lastname:"Alvites"},
  {id:4,name:"Luisa",lastname:"Borda"} 
 ];

  constructor() { }

  ngOnInit(): void {
  }
  selectRow(row:any){
    row['marked']=!row['marked'];
  }

}
