import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Itodo} from '../itodo';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  newToDO = new FormControl();
  toDoList: Array<Itodo> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewTodo() {
    // @ts-ignore
    const {value} = this.newToDO;
    const todo: Itodo = {
      id: _id++,
      content: value,
      done: false
    };
    this.toDoList.push(todo);
    console.log(this.toDoList);
  }

  // tslint:disable-next-line:typedef
  toggleTodo(i) {
    this.toDoList[i].done = !this.toDoList[i].done;
  }
}
