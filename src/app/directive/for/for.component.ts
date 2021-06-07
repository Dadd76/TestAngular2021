import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})


export class ForComponent implements OnInit {

  heroes : Hero[] = [];

  constructor() { }

  ngOnInit() {

    this.heroes = [
      new Hero(1 ,'Superman' ,50 ),
      new Hero(2 ,'Batman' ,50),
      new Hero(3 ,'BatGirl' ,50),
      new Hero(4 ,'Robin' ,50),
      new Hero(5 ,'Flash' ,50)
      ];
  }

  selectPersonne(){

    window.alert("Help !!");
  }

}
