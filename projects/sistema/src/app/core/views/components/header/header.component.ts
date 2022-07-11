import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onToggelMenu:EventEmitter<void>= new EventEmitter();
username="Emerson Flores";

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
     this.onToggelMenu.emit();
  }

}
