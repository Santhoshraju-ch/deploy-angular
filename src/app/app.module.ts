
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './sharepage/sidebar/sidebar.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
  
    RestaurentDashComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    SidebarComponent,
    ServicesComponent,
    ProductsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    NgbModule,
    ReactiveFormsModule,
    

    RouterModule.forRoot(appRoutes),
          NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
