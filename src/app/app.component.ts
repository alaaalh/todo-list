import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

// Angular Material Modules
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    EmployeeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';

}
