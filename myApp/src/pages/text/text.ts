import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})

export class TextPage implements OnInit {
  public text:string;
  public textList;
  constructor(public navCtrl: NavController , private $http: HttpClient) {

  }

  private getTextList(){
    this.$http.get('/api/textList').subscribe(data => {
        this.textList = data['data'];
        localStorage.setItem('textList',JSON.stringify(this.textList));
    })
  }

  public submitText(){
    let t = new Date();
    this.textList.unshift({
        id:this.textList.length,
        text:this.text,
        user:'admin',
        date:t.getFullYear() + '-' + ( t.getMonth() + 1 ) + '-' + t.getDay()  + ' ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds()
    });
    localStorage.setItem('textList',JSON.stringify(this.textList));
    // this.navCtrl.pop();
  }
  
  ngOnInit(){
    if(localStorage.textList){
        this.textList = JSON.parse(localStorage.textList);
    }else{
        this.getTextList();
    }
  }
}
