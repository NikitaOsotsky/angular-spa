import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AdminComponent} from './pages/admin/admin.component';

import { HnResolver } from './hn.resolver';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'docs', component: DocsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent, resolve: { HnResolver } },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true })],
  exports: [RouterModule],
  providers: [
    HnResolver
  ]
})
export class AppRoutingModule {}
