import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  cRed = true;
  cBlue = false;
  cPurple = false;

  constructor() { }

  ngOnInit(): void {
  }

  changecColor(color : string)
  {
  console.log(color);

  if(color == 'red')
  {
    this.cRed = true;
    this.cPurple = false;
    this.cBlue = false;
  }
    else if(color == 'blue')
  {
    this.cBlue = true;
    this.cRed  = false;
    this.cPurple = false;
  }
  else if(color=='purple')
  {
    this.cPurple = true;
    this.cRed = false;
    this.cBlue = false;
  }

  }

}
