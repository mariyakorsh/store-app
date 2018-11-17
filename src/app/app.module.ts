import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ValueService } from './services/values.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
