import { Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  i = 0;
  applyClass: boolean;


 nextImage(){
   this.i++;
   
 }

 prevImage(){
   this.i--;
 }

 aClass(){
   this.applyClass = true;
 }

onClick(value){
  console.log(value);
}

}
