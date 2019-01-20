import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from '../user-form/user-form.component';
import { CarouselComponent } from './carousel.component';
import {ApplicationConstants} from '../common/app-constants';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent, UserFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify indexOfCurrentImage in ngOnInit', () => {
    component.ngOnInit();
    expect(component.indexOfCurrentImage).toBe(0);
  });

  it('verify currentImage in ngOnInit', () => {
    component.carouselImages = ApplicationConstants.carouselImages;
    component.ngOnInit();
    expect(component.currentImage).toBe(component.carouselImages[0]);
  });

  it('verify slideImage on next', () => {
    component.currentImage = '../../assets/images/home1.jpg';
    component.slideImage(true);
    expect(component.currentImage).toBe('../../assets/images/home2.jpg');
  });

  it('verify slideImage on next of last slide', () => {
    component.currentImage = '../../assets/images/home4.jpg';
    component.slideImage(true);
    expect(component.currentImage).toBe('../../assets/images/home1.jpg');
  });

  it('verify slideImage on back', () => {
    component.currentImage = '../../assets/images/home2.jpg';
    component.slideImage(false);
    expect(component.currentImage).toBe('../../assets/images/home1.jpg');
  });

  it('verify slideImage on back of first slide', () => {
    component.currentImage = '../../assets/images/home1.jpg';
    component.slideImage(false);
    expect(component.currentImage).toBe('../../assets/images/home4.jpg');
  });

  it('verify functionality of showCurrentSlide', () => {
    component.showCurrentSlide(0);
    expect(component.currentImage).toBe('../../assets/images/home1.jpg');
    expect(component.indexOfCurrentImage).toBe(0);
  });
});
