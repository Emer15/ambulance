import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, pipe } from 'rxjs';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
@ViewChild("searchBox") searchBox!:ElementRef;

  listFields:string[]=['id','name','lastname','mcmp'];

  dataOriginal=[
    {id:1,name:'Jhonatan',lastname:'Jurado',mcmp:252589,marked:false},
    {id:2,name:'Mary Luz',lastname:'Sotomayor',mcmp:254569,market:true}
  ];

  datasource: any=[];
  constructor() {
    this.datasource=[...this.dataOriginal]/// los tres puntos  es que estamos sacandouna copia
   }

/// un estado de agnular una vez que el html se aya cargado ese estadoes:
ngAfterViewInit(){
  fromEvent(this.searchBox.nativeElement,"keyup")
  .pipe(
    //map((el: any) => el.currentTarget.value),
    debounceTime(500)
  )
  .subscribe((data:any)=>this.search(data.target.value));
}

  ngOnInit(): void {
  }

  toggle(column:string){
   // const exists=this.listFields.findIndex(field=>field=column);
   const exists=this.listFields.indexOf(column);
 if(exists>=0){
    this.listFields.splice(exists,1)
    }
    else{
    this.listFields.push(column)
    }
  }

  search(valutusearch:string){
    //const value=valutusearch.toLocaleLowerCase();
    this.datasource=[...this.dataOriginal.filter((el)=>
      el.name.toLocaleLowerCase().includes(valutusearch))];
  }
 /* search(event:any){
    const value=event.target.value.toLocaleLowerCase();
    this.datasource=[...this.dataOriginal.filter((el)=>el.name.toLocaleLowerCase().includes(value))];
  }
  */
}
