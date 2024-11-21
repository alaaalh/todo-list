import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
}
