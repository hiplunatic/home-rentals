import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HomeTypeFilterComponent } from './home-type-filter/home-type-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeSearchComponent } from './home-search/home-search.component';
import { DetailComponent } from './detail/detail.component';
import { HomesWrapperComponent } from './homes-wrapper/homes-wrapper.component';
@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HomeTypeFilterComponent,
    HomeSearchComponent,
    DetailComponent,
    HomesWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
