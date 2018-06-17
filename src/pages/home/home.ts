import { Component, ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  backgrounds = [
    'assets/background/background-1.jpg',
    'assets/background/background-2.jpg',
    'assets/background/background-3.jpg',
    'assets/background/background-4.jpg'
  ];
  constructor(public navCtrl: NavController, private platform: Platform) {

  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  } 
  slideChanged() {
    //let currentIndex = this.slides.getActiveIndex();
    //console.log('Current index is', currentIndex);
  }
  ionViewDidLoad() {
   
  }
}