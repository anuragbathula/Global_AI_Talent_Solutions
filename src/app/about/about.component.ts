import { Component, OnInit } from '@angular/core';
import { default as data } from '../../assets/database/db.json';
import * as $ from "jquery";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent:any = data.aboutContent;
  constructor() { }

  ngOnInit(): void {
    /*let items = document.querySelectorAll('.carousel[data-type="multi"] .item');
    items.forEach(function() {
      var next = document.querySelector(this).nextElementSibling;
      if (!next.length) {
        next = document.querySelector(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(document.querySelector(this));
    
      for (var i = 0; i < 2; i++) {
        next = next.nextElementSibling;
        if (!next.length) {
          next = document.querySelector(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo(document.querySelector(this));
      }
    });*/

    $('.carousel[data-type="multi"] .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  }

}
