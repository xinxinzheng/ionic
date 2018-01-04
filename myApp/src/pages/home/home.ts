import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  public ArticleList = [];
  constructor(public navCtrl: NavController , private $http: HttpClient) {

  }
  ngOnInit(){
    this.$http.get('/api/articlelist').subscribe(data => {
      this.ArticleList = data['data'];
      console.log(this.ArticleList);
    });
  }
}
