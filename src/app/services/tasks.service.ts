import { Injectable } from '@angular/core';
import { Task } from '../interface/task'
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[] = [];

  constructor() {
    let savedTask = localStorage.getItem('tasks')
    if(savedTask) this.tasks=JSON.parse(savedTask);
    else this.tasks=[]
   }
  deleteTask(i:any){
    this.tasks.splice(i,1);
    this.savaAll()

  }
  save(title:any,description:any){
    this.tasks.push({
      title,
      description
    })
this.savaAll()
  }

  edit(i:any,date:any){
    this.tasks[i]=date;
    this.savaAll()
  }
  savaAll(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}

