import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes : Personne[];
  selectedPersonne!: Personne;
  constructor() {

    this.personnes = [
      new Personne(1,"Roger","Roy",12,"dev"),
      new Personne(2,"Bob","Roy",12,"designer"),
      new Personne(3,"Michel","Roy",12,"tester")
    ];

  }

  ngOnInit(): void {
  }

  selectPersonne(personne : any)
  {
    this.selectedPersonne = personne;
    console.log("click ! from app-item-cv" );
    console.log(this.selectPersonne.name );
  }


}
