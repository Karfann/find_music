import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  errorMessage: string;
  listNews: Array<News> = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(listNews => this.listNews = listNews,
      error => this.errorMessage = <any>error);

  }

  getData() {
    this.getNews();
  }

  onNewDetail(id: number) {
    this.router.navigate(['/news', id]);
  }
}
