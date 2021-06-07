import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
  @Input() personnes !: Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(selectedPersonne: any){
    console.log("click ! from app-list-cv");
    console.log(selectedPersonne);
    this.selectedPersonne.emit(selectedPersonne);
  }
}
