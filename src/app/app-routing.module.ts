import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostingPageComponent } from './costing-page/costing-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SearchCostingComponent } from './search-costing/search-costing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component:SearchCostingComponent},
  { path: 'search', component:SearchCostingComponent},
  { path: 'costing', component:CostingPageComponent},
  { path: 'profile', component:ProfilePageComponent},
  { path: 'user', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
