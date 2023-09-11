import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {


  photoCover: string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD72115B9CDAE873B2234BD0908CEF7B45A2D9AD9C66C699239B46E582F70A8B/scale?width=1200&aspectRatio=1.78&format=jpeg";
  cardTitle: string = " novo homem de ferro anunciado";
  cardDescription: string = "Marvel studios anuncia novo filme do homem aranha";
  @Input()
  Id:string = "0"
  
  
  constructor() {
    
  }
  
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
