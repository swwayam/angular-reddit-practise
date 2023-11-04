import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article !: Article;

  constructor (){
   
  }


  upvote() : Boolean {
    this.article.votesUp += 1;
    return false;
  }

  downvote(): Boolean{
    this.article.votesDown += 1;
    return false;
  }
}
