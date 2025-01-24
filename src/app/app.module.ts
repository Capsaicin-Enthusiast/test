import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'; 

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    PostsComponent 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
