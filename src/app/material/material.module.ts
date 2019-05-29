import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatSelectModule,
  MatCardModule, MatListModule, MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, MatIconModule, MatSelectModule,
    MatCardModule, MatListModule, MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatSelectModule,
    MatCardModule, MatListModule, MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
