import { NgModule } from "@angular/core";
import { LayoutModule } from "@angular/cdk/layout";

// Navigation
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";

const modules: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AngularMaterialModule {}
