import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  firstPage: boolean = true;
  secondPage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  next(){
    this.secondPage = !this.secondPage;
    this.firstPage = !this.firstPage;
  }

}
