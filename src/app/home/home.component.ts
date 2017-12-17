import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    meta: Meta,
    title: Title
  ) {
    title.setTitle('home');
    meta.addTags([
      { name: 'Author', content: 'android.com' },
      { name: 'description', content: 'really good description' }
    ]);
  }
  ngOnInit() {
  }
}
