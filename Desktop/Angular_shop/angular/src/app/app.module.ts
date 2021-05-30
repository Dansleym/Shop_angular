import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import {ShopModule} from './modules/shop/shop.module';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ShopModule
  ],
  providers: [
    /*UsersService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
