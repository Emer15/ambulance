import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu, MenuService } from '../../services/menu.service';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
 itemMenu:Menu;
  constructor(private readonly activatedRoute:ActivatedRoute, private readonly menuService:MenuService) { 
    const currentPath="/"+this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;// te saca la url por partes  solo laestamos sacando la primera parte 1
 
 this.itemMenu=menuService.getDataPath(currentPath);
 }//el ActivatedRouter

  ngOnInit(): void {
  }

}
