import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewTaskComponent } from './pages/add-new-task/add-new-task.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { ShowTaskComponent } from './pages/show-task/show-task.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTasksComponent,
      },
      {
        path: 'add',
        component: AddNewTaskComponent,
      },

      {
        path: 'edit/:id',
        component: AddNewTaskComponent,
      },
      {
        path: ':id',
        component: ShowTaskComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
