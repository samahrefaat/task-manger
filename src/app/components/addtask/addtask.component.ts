import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  

  constructor(private taskSer:TasksService,private router:Router) {
    this.taskSer.tasks
   }

  ngOnInit(): void {
  }
  save(title:any,des:any){
    this.taskSer.save(title.value,des.value);
    this.router.navigate([''])
  }

}

