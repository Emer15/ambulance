import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
interface Icon{
  name:string;
  path:string;
}
//para poder usar los iconos primero se tiene que registrar los iconos
@Injectable({
  providedIn: 'root' // Se pone Providen: root para decirle a angular que este servicio sea usado en diferentes lugares
})
export class IconService {

  private listIcons:Icon[]=[// para que angular este seguro que estas rutas son confiables 
                            // se tiene que sanitar y registrar y por ello se debe de inyectar los servicio en el constructor
   {name:"driver", path:"../assets/icons/conductor.svg"},
   {name:"history", path:"../assets/icons/hitoria.svg"},
   {name:"medic", path:"../assets/icons/medico.svg"},
   {name:"user", path:"../assets/icons/usuario.svg"},
   {name:"dashboard", path:"../assets/icons/tablero.svg"},

  ]

  constructor(private matIconRegistry:MatIconRegistry,// para registrarlos para poder usar dentro de los contorles
              private domSanitizer:DomSanitizer)// con DomSanitiser  es como desinfectarlos para decirle angular que  estos iconos sean seguros
               {
                console.log("Registrando Iconos")
                for (let icon of this.listIcons) {
                 this.matIconRegistry.addSvgIcon(
                  icon.name,
                  this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));                
                }
               }
}
