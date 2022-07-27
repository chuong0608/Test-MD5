import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";
import {Student} from "../../model/student/student";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  })

  constructor(private studentService: StudentService,
              private router: Router,) {
  }

  ngOnInit(): void {

  }

  save() {
    alert(1)
    const student: any = {
      name: this.form.value.name,
      description: this.form.value.description,
      action: this.form.value.action
    }
    console.log(student)

    this.studentService.save(student).subscribe((data) => {
      console.log(data)
      alert("thêm thành công")
    })
  }
}
