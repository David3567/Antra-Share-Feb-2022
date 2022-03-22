import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './child/product/product.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'product',
  //   component: ProductComponent,
  // },
  {
    path: 'lazyloadproduct',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
