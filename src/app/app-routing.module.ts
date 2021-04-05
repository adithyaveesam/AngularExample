import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { DeletebydeptComponent } from './deletebydept/deletebydept.component';
import { SearchbyExpComponent } from './searchby-exp/searchby-exp.component';
import { SearchbyNameComponent } from './searchby-name/searchby-name.component';


const routes: Routes = [
{path:'', component: CandidatelistComponent },
{path:'candidate', component: SearchbyNameComponent},
{path:'experience', component: SearchbyExpComponent},
{path:'deletedept', component: DeletebydeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
