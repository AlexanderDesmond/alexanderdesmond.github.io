import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../shared/angular-material.module";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { MeComponent } from "./components/me/me.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TechnologiesComponent } from './components/me/technologies/technologies.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    MeComponent,
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [HeaderComponent, HomeComponent, ProjectsComponent, MeComponent]
})
export class CoreModule {}
