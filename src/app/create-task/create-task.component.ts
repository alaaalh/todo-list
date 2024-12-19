
import { TasksService } from './../services/tasks/tasks.service';
import { Component, computed, Signal, WritableSignal, effect } from '@angular/core';
import { Task } from '../models/task';
import { MaterialModule } from '../material/material.module';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../models/api-response';
import { CurrencyPipe } from '@angular/common';
import { KapapCasePipe } from '../pips/kapap-case.pipe';
import { signal } from '@angular/core';


@Component({
  selector: 'app-create-task',
  imports: [MaterialModule, CurrencyPipe, KapapCasePipe],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})


export class CreateTaskComponent {
  tasks: Task[] = []

  constructor(private taskService: TasksService) {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
   }

  ngOnInit(): void {

    this.taskService.get().subscribe((res: APIResponse): void => {
      this.tasks = res.Data
    })
  }

  addTask(Title: string, description: string): void {
    // let task = new Task(Title, description)
    // this.tasks.push(task)

    // console.log(this.tasks)
  }

  deleteTask(id: number) {

  }


  // ==================================== signals =================================
  count = signal(1)

  returnCount = computed(() => {
    if(this.count() > 1){
      return`count, ${this.count()}`
    }else{
      return 'wrong'
    }
  })

  increment(): void {
    this.count.set(this.count() + 1)
  }


  // computed signal

  counter: WritableSignal<number> = signal(0)
  doubleCounter: Signal<number> = computed(() => this.counter() * 2)


}
