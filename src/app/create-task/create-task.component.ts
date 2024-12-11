import { TasksService } from './../services/tasks/tasks.service';
import { Component } from '@angular/core';
import { Task } from '../models/task';
import { MaterialModule } from '../material/material.module';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../models/api-response';


@Component({
  selector: 'app-create-task',
  imports: [MaterialModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})


export class CreateTaskComponent {
  tasks: Task[] = []

  constructor(private taskService: TasksService){}

  ngOnInit(): void{
    this.taskService.get().subscribe((res: APIResponse): void => {
      console.log('res',res)
    })
  }

  addTask(title: string, description: string) : void {
    let task = new Task(title, description)
    this.tasks.push(task)

    console.log(this.tasks)
  }
}
