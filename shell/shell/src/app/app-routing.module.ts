import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  /* {
    path:'mfe1-module',
    loadChildren: () => import('mfe1/Module').then(m => m.OneModule)
  }, */
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.OneModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
