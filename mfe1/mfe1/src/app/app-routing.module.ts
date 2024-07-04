import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: 'feature-one',
        loadChildren: () => import('./one/one.module').then(m=> m.OneModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
