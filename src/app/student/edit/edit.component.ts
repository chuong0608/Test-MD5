import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl(''),
  })
  constructor(private studentService: StudentService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }

  findById(id:any){
    this.studentService.findById(id).subscribe((data)=>{
      console.log(data);
      this.form = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        action: new FormControl(data.action),
      })
    })
  }

  update(){
    const student: any = {
      name: this.form.value.name,
      description: this.form.value.description,
      action: this.form.value.action
    }
    this.studentService.update(this.form.value.id,student).subscribe((data)=>{
      console.log(data);
      // @ts-ignore
      $('#exampleModal1').modal('hide');
      this.form.reset()
      this.router.navigate(["/"])
    })
  }

}
