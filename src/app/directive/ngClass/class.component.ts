import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  Red = true;
  Blue = false;
  Purple = false;

  constructor() { }

  ngOnInit(): void {
  }

  changecColor(color : string)
  {
  if(color == "red")
    this.Red = true != this.Purple !=  this.Blue ;
  else if(color == "blue")
    this.Blue = true != this.Red != this.Purple;
  else if(color=="purple")
    this.Purple = true != this.Red != this.Blue;

  }

}
