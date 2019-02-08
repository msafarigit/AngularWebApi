import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.get('Home').subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error)
    })
  }

}