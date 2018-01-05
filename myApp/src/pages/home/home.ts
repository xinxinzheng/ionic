import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TextPage } from '../text/text';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  public ArticleList = [];
  constructor(public navCtrl: NavController , private $http: HttpClient) {

  }

  public likeIt(article){
    article.like = !article.like;
    article.like ? article.favourate++ : article.favourate--;
  }

  public goTextPage(){
    this.navCtrl.push(TextPage);
  }

  ngOnInit(){
    this.$http.get('/api/articlelist').subscribe(data => {
      this.ArticleList = data['data'];
      localStorage.setItem('ArticleList',JSON.stringify(this.ArticleList));
      this.ArticleList.map(article => {
        article.types = JSON.parse(article.type).join(' / ');
      })
    });
  }

}
