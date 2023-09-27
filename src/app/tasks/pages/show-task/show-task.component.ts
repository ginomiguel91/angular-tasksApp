import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
})
export class ShowTaskComponent implements OnInit {
  task!: Task;
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.taskService.getTaskById(id))
        // tap(console.log)
      )
      .subscribe((resp) => {
        this.task = resp;

        // console.log(this.task);
      });
  }
}
