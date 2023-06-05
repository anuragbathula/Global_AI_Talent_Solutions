import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted:boolean = false;
  detailsSubmitted:boolean = false;
  
  constructor(private fb: FormBuilder) { }
  detailForm = this.fb.group({
    uname: new FormControl('',Validators.required),
    uemail: new FormControl('',[Validators.required, Validators.email]),
    uphone: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.submitted =true;
    // TODO: Use EventEmitter with form value
    if(this.detailForm.invalid){
      return;
    }
    console.warn(this.detailForm.value);
    this.detailsSubmitted=true;
    this.submitted =false;
    this.detailForm.reset();
  }

}
