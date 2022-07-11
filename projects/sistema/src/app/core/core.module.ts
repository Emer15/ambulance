import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
 import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './views/components/menu/menu.component'; 
import {MatListModule} from '@angular/material/list'; 
import { RouterModule } from '@angular/router';
// en el core solo se pone solo los necesario para podervisualizarla lo mas rapido posible
@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MenuComponent],
  imports: [CommonModule,MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,MatListModule,RouterModule],
  exports:[HeaderComponent,SidebarComponent,MenuComponent]// para poder usar el componente en appmodeule se tiene que exportar el componente en export
})
export class CoreModule { }
