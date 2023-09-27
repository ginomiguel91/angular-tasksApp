import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { AddNewTaskComponent } from './pages/add-new-task/add-new-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { ShowTaskComponent } from './pages/show-task/show-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListTasksComponent,
    AddNewTaskComponent,
    ViewTaskComponent,
    ShowTaskComponent,
  ],
  imports: [CommonModule, TasksRoutingModule, FormsModule],
})
export class TasksModule {}
