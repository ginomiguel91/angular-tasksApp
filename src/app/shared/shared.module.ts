import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TasksRoutingModule } from '../tasks/tasks-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, TasksRoutingModule],
  exports: [MenuComponent],
})
export class SharedModule {}
