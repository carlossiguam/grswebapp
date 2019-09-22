import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { HttpClientModule } from "@angular/commmon/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarmodule, MatIconModule, MatSideNavModule, MatListModule, MatButtonModule, MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSideNavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
