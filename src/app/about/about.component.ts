import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    meta: Meta,
    title: Title
  ) {
    title.setTitle('about');
    meta.addTags([
      { name: 'Android', content: 'welcome to codekul' },
      { name: 'description', content: 'this is classy description' }
    ]);

  }

  ngOnInit() {
  }

}
