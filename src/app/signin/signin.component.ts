import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private submitted = false;
  constructor(auth: AuthService) { }

  ngOnInit() {
  }

  protected onSubmit() {
    this.submitted = true;
    alert();
    return false;
  }

}
