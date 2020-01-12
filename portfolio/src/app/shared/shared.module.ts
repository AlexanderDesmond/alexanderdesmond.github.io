import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../shared/angular-material.module";

import { AppRoutingModule } from "../app-routing.module";

import { ToTopComponent } from "./components/to-top/to-top.component";

@NgModule({
  declarations: [ToTopComponent],
  imports: [CommonModule, AngularMaterialModule, AppRoutingModule],
  exports: [ToTopComponent]
})
export class SharedModule {}
