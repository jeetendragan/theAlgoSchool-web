import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButton, MatMenuModule, MatListModule, MatIconModule,
        MatDividerModule, MatGridListModule,
        MatCardModule, MatExpansionModule, MatTabsModule,
        MatToolbarModule, MatSidenavModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  DragDropModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
