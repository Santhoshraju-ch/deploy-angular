import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
/*
{
  path:'',component:HomeComponent
},
{
  path:'seller-auth',component:SelllerAuthComponent
},
{
  path:'header',component:HeaderComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'contact',component:ContactComponent
}
*/
{path:'/home',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
,
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
