import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMFE1Component } from '../home-mfe1/home-mfe1.component';

import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HomeMFE1Component,
  },
];

@NgModule({
  declarations: [HomeMFE1Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OneModule {}
