import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = { //Object container for contact details
    name: '',
    email: '',
    message: ''
  }

  onSubmit () {
    alert('Message sent successfully')
    this.contact = {name: '', email: '', message: ''}
  }
}
