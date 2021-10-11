import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { FormComponent } from './demos/form/form.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { CurrencyExchangePipe } from './demos/shared/pipes/currency-exchange.pipe';
import { MoneyFilterPipe } from './demos/shared/pipes/money-filter.pipe';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { MyhiddenDirective } from './demos/shared/directives/myhidden.directive';
import { MyifDirective } from './demos/shared/directives/myif.directive';
import { VeEmulatedComponent } from './demos/view-encapsulation/ve-emulated/ve-emulated.component';
import { VeNativeComponent } from './demos/view-encapsulation/ve-native/ve-native.component';
import { VeNoneComponent } from './demos/view-encapsulation/ve-none/ve-none.component';
import { CcParentComponent } from './demos/component-communication/cc-parent/cc-parent.component';
import { CcChildComponent } from './demos/component-communication/cc-child/cc-child.component';
import { CcAnotherChildComponent } from './demos/component-communication/cc-another-child/cc-another-child.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { CdPersonDetailComponent } from './demos/change-detection/cd-person/cd-person-detail/cd-person-detail.component';
import { TemplateDrivenComponent } from './demos/form/template-driven/template-driven.component';
import { ReactiveComponent } from './demos/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/form/reactive-fb/reactive-fb.component';
import { FormObservableComponent } from './demos/observable/form-observable/form-observable.component';
import { HttpObservableComponent } from './demos/observable/http-observable/http-observable.component';
import { RoutingComponent } from './demos/routing/routing.component';
import { S1Component } from './demos/routing/s1/s1.component';
import { S2Component } from './demos/routing/s2/s2.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ComponentCommunicationComponent,
    DirectiveComponent,
    FormComponent,
    LifeCycleComponent,
    ObservableComponent,
    PipeComponent,
    ViewEncapsulationComponent,
    CurrencyExchangePipe,
    MoneyFilterPipe,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    MyhiddenDirective,
    MyifDirective,
    VeEmulatedComponent,
    VeNativeComponent,
    VeNoneComponent,
    CcParentComponent,
    CcChildComponent,
    CcAnotherChildComponent,
    LcPersonComponent,
    CdPersonComponent,
    CdPersonDetailComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    FormObservableComponent,
    HttpObservableComponent,
    RoutingComponent,
    S1Component,
    S2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
