import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {EducationComponent} from "./Components/education/education.component";
import {ProjecktComponent} from "./Components/projeckt/projeckt.component";
import {SkillsComponent} from "./Components/skills/skills.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'project',
    component: ProjecktComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
