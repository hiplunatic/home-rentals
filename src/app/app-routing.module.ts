import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { DetailComponent } from './detail/detail.component';
import { HomesWrapperComponent } from './homes-wrapper/homes-wrapper.component';

const routes: Routes = [
  {
    path: 'homes',
    component: HomesWrapperComponent,
    children: [
      {
        path: '',
        component: HomesComponent
      },
      {
        path: "detail",
        component: DetailComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }