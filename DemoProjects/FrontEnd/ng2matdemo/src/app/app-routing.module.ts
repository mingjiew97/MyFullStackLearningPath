import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { FormComponent } from './demos/form/form.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import {RoutingComponent} from './demos/routing/routing.component';
import {S1Component} from './demos/routing/s1/s1.component';
import {S2Component} from './demos/routing/s2/s2.component';

const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  },
  {
    path: 'cd',
    component: ChangeDetectionComponent
  },
  {
    path: 'd',
    component: DirectiveComponent
  },
  {
    path: 'f',
    component: FormComponent
  },
  {
    path: 'o',
    component: ObservableComponent
  },
  {
    path: 'p',
    component: PipeComponent
  },
  {
    path: 've',
    component: ViewEncapsulationComponent
  },
  {
    path: 'cc',
    component: ComponentCommunicationComponent
  },
  {
    path: 'r',
    component: RoutingComponent,
    children: [
      {
        path: 's1/:id',
        component: S1Component
      },
      {
        path: 's2',
        component: S2Component
      }
    ]
  },
  {
    path: 'feature',
    loadChildren: 'app/feature/feature.module#FeatureModule'
  },
  {
    path: '',
    redirectTo: 'lc',
    pathMatch: 'full'
  },
  {
    path: '**', // wildcard
    component: LifeCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
