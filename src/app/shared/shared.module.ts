import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';

@NgModule({
  declarations: [CustomLabelDirective],
  imports: [CommonModule],
  exports: [
    // Exportamos la directiva para poder utilizarla en otros lugares
    CustomLabelDirective,
  ],
})
export class SharedModule {}
