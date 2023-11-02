import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
