import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
