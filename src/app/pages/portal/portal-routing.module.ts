import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortalPage} from './portal.page';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {NewTripComponent} from './new-trip/new-trip.component';

const routes: Routes = [
  { path: '', component: PortalPage, children: [
      { path: 'home', component: HomeComponent},
      { path: 'newTrip', component: NewTripComponent},
      { path: 'profile', component: ProfileComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
