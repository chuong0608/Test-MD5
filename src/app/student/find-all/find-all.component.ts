import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student/student";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {

  student: Student[] | any

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.showAll()
  }

  showAll(){
    this.studentService.getAll().subscribe((data)=>{
      this.student=data
    },error => {
      console.log("looi")
    })
  }

  deleteStudent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.studentService.delete(id).subscribe(() => {
        alert("Ok");
        this.showAll()
      }, e => {
        console.log(e);
      });
    }
  }
}
