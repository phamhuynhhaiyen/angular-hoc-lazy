import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LazyContentComponent } from './lazy-content/lazy-content.component';
import { LazyWrapperComponent } from './lazy-wrapper/lazy-wrapper.component';
import { Lazy1ContentComponent } from './lazy1-content/lazy1-content.component';
import { Home1Component } from './home1.component';
import { LazyWrapperOldComponent } from './lazy-wrapper-old/lazy-wrapper-old.component';


@NgModule({
  declarations: [
    AppComponent,
    LazyContentComponent,
    Lazy1ContentComponent,
    LazyWrapperComponent,
    HomeComponent,
    Home1Component,
    LazyWrapperOldComponent,
    LazyWrapperOldComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LazyContentComponent,
    Lazy1ContentComponent
  ]
})
export class AppModule { }
