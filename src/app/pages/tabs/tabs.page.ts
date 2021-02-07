import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  isHide = [false,true]
  isHide2: true

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  // getQuizzes(){
  //   return this.http.get(this.endpoints.MOBILE_QUIZZES_ENDPOINT + this.id)

  //  } 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

 closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }

  hideSection(i: number){
    this.isHide[i] = !this.isHide[i]
  }


}
