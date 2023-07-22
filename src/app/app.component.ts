import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Buy groceries')
  ]

  add(task: string) {
    this.tasks.push(new Task(task));
  }

  remove(existingTask: Task) {
    let userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask.title}"`);
    
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}

class Task {

  constructor(public title: string) {

  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
