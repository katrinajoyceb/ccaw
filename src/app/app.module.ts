import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { WireframesComponent } from './wireframes/wireframes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { BackforwardComponent } from './backforward/backforward.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { FullmenuComponent } from './fullmenu/fullmenu.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    WireframesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PackagesComponent,
    ContactComponent,
    BackforwardComponent,
    MenuComponent,
    TeamComponent,
    FullmenuComponent,
    AnimateComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
