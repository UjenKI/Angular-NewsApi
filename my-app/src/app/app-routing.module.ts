import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceComponent } from './science/science.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: 'science', component: ScienceComponent },
  { path: 'sport', component: SportComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'technology', component: TechnologyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
