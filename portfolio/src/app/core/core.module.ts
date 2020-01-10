import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../shared/angular-material.module";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { MeComponent } from './components/me/me.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, ProjectsComponent, MeComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent, HomeComponent]
})
export class CoreModule {}
