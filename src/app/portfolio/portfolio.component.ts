import { Component, OnInit } from '@angular/core';
import { WORKS, Works} from '../portfolio/works';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  works = WORKS;
  nfsb: Works = this.works[0];
  llano: Works = this.works[1];
  farming: Works = this.works[2];

  constructor() { 
  
  }

  ngOnInit() {
  }

}
