import { Component, OnInit, Input } from '@angular/core';
import { WORKS, Works} from '../portfolio/works';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group,
  query,
  sequence,
  stagger,
  animation,
  useAnimation,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('showHide', [
      // ...
      state('show', style({
        height: '500px',
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'translateX(0)'
      })),
      state('hide', style({
        height: '500px',
        opacity: 1,
        backgroundColor: 'green',
        transform: 'translateX(100%)'
      
      })),
      transition('show => hide', [
       
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ]),
    ])
  ]
})
export class PortfolioComponent implements OnInit {


  works = WORKS;
  nfsb: Works = this.works[0];
  llano: Works = this.works[1];
  farming: Works = this.works[2];
  selectedWork =  this.nfsb;
  nfsbdiv: boolean = true;
  llanodiv: boolean = false;
  farmingdiv: boolean = false;
  public myClass: string = 'nfsbdiv';


  constructor() { 
  }

  ngOnInit() {
  }


  show(work: string){
    if(work === 'nfsb'){
      this.selectedWork  = this.nfsb;
      this.myClass = 'nfsbdiv';
      this.nfsbdiv = true;
      this.llanodiv = false;
      this.farmingdiv = false;
      console.log("nfsb");
      
    }
    else if(work === 'llano'){
      this.selectedWork = this.llano;
      this.myClass = 'llanodiv';
      this.nfsbdiv = false;
      this.llanodiv = true;
      this.farmingdiv = false;
      console.log("llano");
    }
    else if(work === 'farming'){
      this.selectedWork = this.farming;
      this.myClass = 'farmingdiv';
      this.nfsbdiv = false;
      this.llanodiv = false;
      this.farmingdiv = true;
      console.log("farming");
    }

    
    console.log("Selected Work" + this.selectedWork);
  
  }

  

}
