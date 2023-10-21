import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {

  constructor(private axiosService: AxiosService) { }

  onLogin(input: any): void {


    this.axiosService.request(
      "POST",
      "/login",
      {
        email: input.email,
        password: input.password
      }
    )




  }

}
