import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    ViewDetailComponent,
    ViewListsComponent,
    ViewDetailsComponent,
    NavbarComponent,
    FooterComponent,
    ContactSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
