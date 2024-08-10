import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private contactUsService: ContactUsService){}

  contactUs : FormGroup = new FormGroup(
    {
      name : new FormControl('' , [Validators.required]),
      email : new FormControl('' , [Validators.email , Validators.required]),
      message : new FormControl('' , [Validators.required])
    }
  )
  get email() {
    return this.contactUs.get('email');
  }
  get name(){
    return this.contactUs.get('name');
  }

  submitGroup(){
    if(this.contactUs.valid){
     this.contactUsService.submitDataForm(this.contactUs.value).subscribe(
      response => {
        console.log("the data submit succssuflly" , response)
      } ,
      error =>{
        console.error("the data not sent" , error)
      }
     )
    }
    else{
      console.log("form is not valid")
    }

  }



}


