import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
})
export class AddNewTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  @ViewChild('taskForm') taskForm!: NgForm;
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    createAt: new Date(),
    ecDate: new Date(),
    finished: false,
  };
  submitted: boolean = false;

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.taskService.getTaskById(id)))
      .subscribe((task) => (this.newTask = task));
  }
  createTask() {
    /* update task */
    if (this.newTask.id) {
      this.taskService.updateTask(this.newTask).subscribe((task) => {
        this.router.navigateByUrl('/tasks/list');
        Swal.fire(
          ` Task ` + `${task.id}` + `updated successfully`,
          'Your task has been updated.',
          'success'
        );
      });
    } else {
      /* create task */
      this.taskService.addTask(this.newTask).subscribe({
        next: () => {
          this.router.navigateByUrl('/tasks/list');
          Swal.fire(
            ` Task created successfully`,
            'Your task has been created.',
            'success'
          );
        },
        error: (error) => {
          console.error(error); // Función error: se ejecuta cuando ocurre un error
          Swal.fire(
            'Error',
            'An error occurred while creating the task.',
            'error'
          );
        },
      });

      this.submitted = true;
    }
  }

  fieldInvalid(field: string): boolean {
    return (
      this.taskForm?.controls[field]?.invalid &&
      this.taskForm?.controls[field]?.touched
    );
  }

  minlengthError(field: string): boolean {
    return this.taskForm?.form.get(field)?.errors?.['minlength'];
  }
}
