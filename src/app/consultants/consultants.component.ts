import { Component, OnInit } from '@angular/core';
import { default as data } from '../../assets/database/db.json';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  services:any = data.services;
  constructor() { }

  ngOnInit(): void {
  }

}
