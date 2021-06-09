import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'hero-service',
  templateUrl: './hero-service.component.html',
  styleUrls: ['./hero-service.component.css']
})


export class HeroWithServiceComponent implements OnInit {

  selectedHero?: Hero;
  heroes : Hero[] = [];

  constructor(private heroService: HeroService,private messageService: MessageService) { }

  ngOnInit() {
  this.getHeroes();//test
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`hero-service-Component: Selected hero id=${hero.id}`);
  }
}
