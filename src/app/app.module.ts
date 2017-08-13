import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderrByPipe } from './orderby';
import {RouterModule,Routes} from '@angular/Router'
import { AboutComponent } from "./about-component/about-component.component";
import { UserComponent } from './user/user.component';
import {HttpModule} from '@angular/http';
import {GetService} from './Services/get-service.service';

const appRoutes : Routes =[
  {path : '',component:UserComponent},
  {path : 'about',component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    OrderrByPipe,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
