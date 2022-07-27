import { Component } from "@angular/core";
import { ToDo } from "../app/todo.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo List";
  todoList: ToDo[] = [
    {
      content: "Hello World",
      done: false
    },
    {
      content: "Hello World2",
      done: false
    }
  ];
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
      console.log(this.todoList[i].done);
    } else {
      this.todoList[i].done = false;
      console.log(this.todoList[i].done);
    }
  }
  submit() {
    console.log("Submits To Api with this data:  ");
    for (let i = 0; i < this.todoList.length; i++) {
      console.log(this.todoList[i]);
    }
  }
}
