import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { StarRepositoryDirective } from './star-repository.directive';
import { UserSearchComponent } from './user-search/user-search.component';
import { FormsModule } from '@angular/forms';
import { RepositorySearchComponent } from './repository-search/repository-search.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainpageComponent,
    FooterComponent,
    StarRepositoryDirective,
    UserSearchComponent,
    RepositorySearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
