import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeadingDirective } from './heading.directive';
import { TextDirective } from './text.directive';
import { LikeComponent } from './like/like.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ExcerptPipe } from './excerpt.pipe';
import { PostsService } from './posts/posts.service';
import { ClientService } from './api/client.service';
import { ScrollDirective } from './scroll.directive';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { HeadingComponent } from './heading/heading.component';
import { routes } from './routes';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeadingDirective,
    TextDirective,
    LikeComponent,
    PostsListComponent,
    SearchbarComponent,
    ExcerptPipe,
    ScrollDirective,
    PhoneNumberPipe,
    HeadingComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [PostsService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
