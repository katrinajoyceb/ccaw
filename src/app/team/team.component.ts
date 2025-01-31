import { Component, OnInit } from '@angular/core';
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
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
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
        transform: 'translateX(100%)',
        
      
      })),
      transition('show => hide', [
       
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ]),
    ]),

    trigger('openClose', [
     // ...
     state('open', style({
      
       width:'400px',
       opacity: 1,
      
       
       margin: '0px 0px 0px 496px'
      
     })),
     state('close', style({
      
       width:'225px',
       opacity: 1,
       transform: 'translateX(0)',

     })),
     transition('open => close', [
      
       animate('0.5s')
     ]),
     transition('close => open', [
       animate('1s')
     ]),
   ]),
  
  
 ]
})
export class TeamComponent implements OnInit {
  condition: boolean = true;
  visible: boolean = true;
  name: string;
  public myClass: string;
  isOpen = false;

  about: Object = null;

  team: {first: string, last: string, about: string, title: string}[] = [
    { 
      first: "nat",
      last: "joyner",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      title: "About Me"
    },
    { 
      first: "ethan",
      last: "eckstein",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      title: "About Me"
    },
    { 
      first: "riley",
      last: "barret",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      title: "About Me"
    },
    { 
      first: "teresa",
      last: "copeland",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      title: "About Me"
    },
    { 
      first: "kat",
      last: "bueno",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      title: "About Me"
    },
  ];


  constructor() { }

  ngOnInit() {
  }

  show(name: string){
    this.visible = !this.visible;
    this.name = name;
    this.about = this.team.find(t => t.first === name);
    this.myClass = this.name;
    console.log(this.name);
    this.isOpen = !this.isOpen;
  }

  hide(){
    this.visible = !this.visible;
    this.isOpen = !this.isOpen;
    this.about = '';
  }
  

}
