import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
 
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent, 
    VoterComponent,
    VoteTakerComponent,
    C1Component,
    C2Component,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
