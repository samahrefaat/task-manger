import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskSer:TasksService, private title:Title) { 
    this.title.setTitle('task manger')
    this.taskSer.tasks
  }


  ngOnInit(): void {

  }
  deleteTask(i:any){
    this.taskSer.tasks.splice(i,1);

  }
}
