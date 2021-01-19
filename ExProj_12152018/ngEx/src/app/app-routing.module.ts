import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

  import { HeroParentComponent } from './hero-parent.component';
  import { VoteTakerComponent } from './votetaker.component';
import { C1Component } from './c1/c1.component'; 
const routes: Routes = [
  { path: '', redirectTo: '/r1', pathMatch: 'full' },
  { path: 'r1', component: C1Component },
  { path: 'r2', component: VoteTakerComponent },
  { path: 'r3', component: HeroParentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
