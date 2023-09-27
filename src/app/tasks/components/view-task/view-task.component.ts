import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
})
export class ViewTaskComponent {
  constructor(private router: Router) {}
  @Input() task!: Task;

  back() {
    this.router.navigateByUrl('/list');
  }
}
