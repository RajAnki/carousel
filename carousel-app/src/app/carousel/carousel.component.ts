import { Component, OnInit } from '@angular/core';
import { ApplicationConstants } from '../common/app-constants';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public carouselImages = ApplicationConstants.carouselImages;
  public currentImage: string;
  public indexOfCurrentImage: number;
  constructor() { }

  ngOnInit() {
    this.currentImage = this.carouselImages[0];
    this.indexOfCurrentImage = 0;
  }

  slideImage(nextFlag: boolean): void {
    this.indexOfCurrentImage = this.carouselImages.indexOf(this.currentImage);
    if (nextFlag) {
      if (this.indexOfCurrentImage !== this.carouselImages.length - 1) {
        this.currentImage = this.carouselImages[this.indexOfCurrentImage + 1];
      } else {
        this.currentImage = this.carouselImages[0];
      }
    } else {
      if (this.indexOfCurrentImage !== 0) {
        this.currentImage = this.carouselImages[this.indexOfCurrentImage - 1];
      } else {
        this.currentImage = this.carouselImages[this.carouselImages.length - 1];
      }
    }
  }

  showCurrentSlide(index: number): void {
    this.currentImage = this.carouselImages[index];
    this.indexOfCurrentImage = index;
  }

}
