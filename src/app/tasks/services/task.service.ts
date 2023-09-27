import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _baseUrL: string = environment.apiUrl;
  get httpParams() {
    return new HttpParams().set('fields', 'id');
  }
  constructor(private http: HttpClient) {}

  getTasks() {
    const url = `${this._baseUrL}/tasks`;
    return this.http.get<Task[]>(url);
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this._baseUrL}/tasks`;
    return this.http.post<Task>(url, task);
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this._baseUrL}/tasks`;
    return this.http.get<Task>(url + `/${id}`);
  }
  removeTask(id: number): Observable<any> {
    const url = `${this._baseUrL}/tasks`;
    return this.http.delete<any>(url + `/${id}`);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this._baseUrL}/tasks`;
    return this.http.put<Task>(url + `/${task.id}`, task);
  }
}
