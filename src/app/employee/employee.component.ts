import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-employee',
  imports: [MatSlideToggleModule,CreateTaskComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

}
