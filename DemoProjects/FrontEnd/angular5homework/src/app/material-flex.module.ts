import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,
  MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatDialogModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    CdkTableModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    CdkTableModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
})
export class MaterialFlexModule {
}
