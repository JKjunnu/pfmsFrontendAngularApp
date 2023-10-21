import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  email: string = "";
  password: string = "";

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({ "email": this.email, "password": this.password });
  }

}
