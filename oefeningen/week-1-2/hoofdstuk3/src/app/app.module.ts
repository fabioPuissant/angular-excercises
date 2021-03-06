import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { LogoModule } from './logo/logo.module';
import { NieuwsbriefComponent } from './nieuwsbrief/nieuwsbrief.component';


@NgModule({
  declarations: [
    AppComponent,
    NieuwsbriefComponent,
  ],
  imports: [
    BrowserModule,
    LogoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
