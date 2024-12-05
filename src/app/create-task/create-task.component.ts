import { Component } from '@angular/core';
import { Task } from '../models/task';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-create-task',
  imports: [MaterialModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  tasks: Task[] = []
  addTask(title: string, description: string) : void {
    let task = new Task(title, description)
    this.tasks.push(task)

    console.log(this.tasks)
  }
}
