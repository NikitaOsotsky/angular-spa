import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinComponent } from './shared/spin/spin.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ErrorComponent } from './error/error.component';
import {HttpService} from './http.service';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'docs', component: DocsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    SpinComponent,
    ContentComponent,
    HomeComponent,
    DocsComponent,
    ExamplesComponent,
    AboutComponent,
    NewsComponent,
    PageNotFoundComponent,
    ErrorComponent,
    FilterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
