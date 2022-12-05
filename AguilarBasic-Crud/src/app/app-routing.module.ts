import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { FooterComponent } from './footer/footer.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
const routes: Routes = [
  {path:'',redirectTo: '/viewlists', pathMatch: 'full'},
 // {path:'',redirectTo: 'ViewListsComponent', pathMatch: 'full'},
  {path:'viewlists', component: ViewListsComponent},
  {path: 'viewdetails/:id', component: ViewDetailsComponent},
  {path: 'contactseller/:id', component: ContactSellerComponent},
  {path: 'footer/:id', component: FooterComponent},
  {path: 'view-account', component: ViewListComponent}, 
  {path: 'view-details/:id', component: ViewDetailComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
