import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hackernew',
  templateUrl: './hackernew.component.html',
  styleUrls: ['./hackernew.component.css']
})
export class HackernewComponent implements OnInit {
  article = {
    title: 'Click vô đây',
    url: 'https://www.youtube.com/channel/UCRtwwo4qevxusKQqP6QLlfg'
  };
  // tslint:disable-next-line:typedef
  // updateArticle() {
  //   this.article.title = document.getElementById('article-title').value;
  //   this.article.url = document.getElementById('article-url').value;
  // }
  constructor() {
  }

  ngOnInit(): void {
  }

}
