import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = "lightblue";
  @Input() bgColor = "white";
  size ='12px';


  constructor() { }

   ngOnInit(): void {
  }

  changeSize( size: string)
  {
    this.size = size + 'px' ;

  }

}
