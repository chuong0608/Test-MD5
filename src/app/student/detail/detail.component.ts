import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  students: any;
  constructor(
    private studentService:StudentService,private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }

  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data);
      this.students = data
    })
  }
}
