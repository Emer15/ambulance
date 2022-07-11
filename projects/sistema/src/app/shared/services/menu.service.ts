import { Injectable } from '@angular/core';

export interface Menu{
  title:string;
  url:string;
  icon:string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
   private menu:Menu[];
  constructor() {
    this.menu=[
      {title:'User',url:'/user',icon:'user'},
      {title:'Medic',url:'/medic',icon:'medic'},
      {title:'Driver',url:'/driver',icon:'driver'},
      {title:'History',url:'/history',icon:'history'},
    ];
   }

  getIems():Menu[]{
    return [... this.menu];// con los tres puntos saco una copia del menu
   // return Object.assign([],this.menu);// otra manera de sacar lacopia es atravez del Object.assign
  }

  getDataPath(currentPath:string):Menu{
  const menu=this.menu.find((el:Menu)=>el.url==currentPath);
  return menu as Menu;

  }
}
