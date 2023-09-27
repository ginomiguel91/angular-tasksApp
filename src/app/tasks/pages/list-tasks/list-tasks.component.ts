import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent implements OnInit {
  _tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((resp) => {
      this._tasks = resp;
    });
  }

  removeTask(id: number) {
    this.taskService.removeTask(id).subscribe({
      next: () => {
        this._tasks = this._tasks.filter((resp) => id != resp.id);
        this.router.navigateByUrl('/tasks/list');
        Swal.fire(
          ` Task ` + `# ${id}` + `Deleted!`,
          'Your task has been deleted.',
          'success'
        );
      },
      error: (error) => {
        // Manejar el error aquí
        console.error(error);
        Swal.fire('Error !', 'Contact to admin.', 'error');
        this.router.navigateByUrl('/tasks/list');
      },
    });
  }

  toAdd() {
    this.router.navigateByUrl('/tasks/add');
  }
}
