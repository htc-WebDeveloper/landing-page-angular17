import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!:FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(20)]]
    })
   }

  ngOnInit(): void {
  
  }

  //evitamos el submit automatico
  enviar(event: Event) {
    event.preventDefault
    console.log(this.contactForm.value)
  }

  hasErrors(field: string, typError: string) {
    return this.contactForm.get(field)?.hasError(typError) && this.contactForm.get(field)?.touched
  }

}