import { Component } from '@angular/core';
import {SampleService} from './services/sample.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SampleService]
})
export class AppComponent {
}
