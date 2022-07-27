import { Component } from "@angular/core";
import { ToDo } from "../app/todo.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  todoList: ToDo[] = [];
  content: any;
  done: boolean;

  update(list: string) {
    const entry: ToDo = {
      content: list,
      done: false
    };
    this.todoList.push(entry);
  }

  toDone(i) {
    if (this.todoList[i].done === false) {
      this.todoList[i].done = true;
    } else {
      this.todoList[i].done = false;
    }
  }
}
