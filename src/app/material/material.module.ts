import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButton, MatMenuModule, MatListModule, MatIconModule,
        MatDividerModule, MatGridListModule,
        MatCardModule, MatExpansionModule, MatTabsModule} from "@angular/material";

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
