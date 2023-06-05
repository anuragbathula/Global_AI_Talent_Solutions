import { Component, OnInit } from '@angular/core';
import { default as data } from '../../assets/database/db.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies:any = data.technologies;
  constructor() { }

  ngOnInit(): void {
  }

}
