import { Injectable } from '@angular/core';
import { Hero } from '../../model/Hero';
import { HEROES } from '../mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HerosService : fetched heroes');
    return heroes;
  }
}


