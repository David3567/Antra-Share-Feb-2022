import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {
        path: 'newsfeed',
        loadChildren: () => import('../../pages/newsfeed/newsfeed.module').then(m => m.NewsfeedModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../pages/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../../pages/setting/setting.module').then(m => m.SettingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
