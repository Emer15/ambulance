import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",component:TestComponent},
  {path:"user",
  loadChildren:()=>import('./user/user.module').then((module)=>module.UserModule)},//Es una comunicacion asincrona y se trabaja con Promesas o obserbables en este caso se va ha trabajr con promesas
  {path:"driver",
  loadChildren:()=>import('./driver/driver.module').then((module)=>module.DriverModule)},
  {path:"medic",
  loadChildren:()=>import('./medic/medic.module').then((module)=>module.MedicModule)},
  {path:"history",
  loadChildren:()=>import('./history/history.module').then((module)=>module.HistoryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
