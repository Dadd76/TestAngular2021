import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HEROES } from '../mock/mock-heroes';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.css']
})
export class FormHeroComponent implements OnInit {

  hero: Hero = HEROES[0];
  constructor() { }

  ngOnInit(): void {
  }

}
