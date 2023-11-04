import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../node_modules/bootstrap/dist/css/bootstrap.min.css" ]
})
export class AppComponent {
  articles : Article[] = [];

  constructor(){
    
  }

  sortArticle() : Article [] {
    return this.articles.sort((a: Article, b: Article) => b.totalVotes - a.totalVotes )
  }


  addArticle(title: HTMLInputElement, link : HTMLInputElement): boolean{
  this.articles.push(new Article(title.value, link.value, 0 , 0));
  title.value = "";
  link.value = "";
  return false
 }

 

 

}
