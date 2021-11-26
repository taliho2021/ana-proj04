import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'extrapages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) },
  { path: 'layouts', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
