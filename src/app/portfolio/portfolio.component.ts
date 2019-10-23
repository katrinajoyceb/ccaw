import { Component, OnInit, Input } from '@angular/core';
import { WORKS, Works} from '../portfolio/works';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input() work: string;
  condition: number = 0;
  value = 0;
  works = WORKS;
  nfsb: Works = this.works[0];
  llano: Works = this.works[1];
  farming: Works = this.works[2];
  selectedWork: Works;

  constructor() { 
    if(this.work === 'nfsb'){
      this.selectedWork  = this.nfsb;
    }
    else if(this.work === 'llano'){
      this.selectedWork = this.llano;
    }
    else if(this.work === 'farming'){
      this.selectedWork = this.farming;
    }
  
  }

  ngOnInit() {

  }

}
