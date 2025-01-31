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
    trigger('lastClicked', [
      // ...
      state('clicked', style({
        opacity: 1,
        transform: 'scale(1.3)',
       
      
      })),
      state('notClicked', style({
      
        opacity: 0.5,
       
       
      
      })),
      transition('clicked => notClicked', [
       
        animate('0.5s')
      ]),
      transition('notClicked => clicked', [
        animate('0.5s')
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
