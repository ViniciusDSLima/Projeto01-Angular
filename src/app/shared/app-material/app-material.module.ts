import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatCardModule, MatTableModule, MatToolbarModule],
})
export class AppMaterialModule {}
