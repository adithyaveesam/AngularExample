import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbyNameComponent } from './searchby-name/searchby-name.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchbyExpComponent } from './searchby-exp/searchby-exp.component';
import { DeletebydeptComponent } from './deletebydept/deletebydept.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbyNameComponent,
    CandidatelistComponent,
    SearchbyExpComponent,
    DeletebydeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
