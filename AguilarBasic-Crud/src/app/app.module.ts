import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewListComponent } from './view-list/view-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { FooterComponent } from './footer/footer.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDetailComponent,
    ViewListComponent,
    NavbarComponent,
    ContactSellerComponent,
    FooterComponent,
    ViewListsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
