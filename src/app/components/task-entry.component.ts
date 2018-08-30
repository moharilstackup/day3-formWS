import { Component, OnInit, ViewChild , EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  @ViewChild ('taskForm')
  taskForm: NgForm;

  @Output ()
  clicked = new EventEmitter<string>();
  
  taskList = [ ];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log("addTask() : ")
    for (let i in this.taskForm.value) {
      console.log('i=',i,' ,v=', this.taskForm.value[i]);
    } 
   // this.clicked.next("This is event emitter clicked!!");
   this.taskList.push(this.taskForm.value);
    this.taskForm.resetForm();
  }
}
