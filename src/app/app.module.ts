import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
import { HttpService } from './http.service';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinService } from './shared/spin/spin.service';
import { httpInterceptorProviders } from './http-interceptors';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';

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
    PaginationComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, SpinService, httpInterceptorProviders, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
