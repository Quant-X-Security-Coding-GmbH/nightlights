import {Component, HostListener, OnInit} from '@angular/core';
import { Image } from './image_interface';
import  {IMAGES} from "../../images";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['../../../styles.css']
})


export class PicturesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  pictureList = IMAGES;

  showBigPic = false;

  bigPicture: Image = IMAGES[0];

  goLeft = true;
  goRight = true;

  navigateToPictureURL(){
    this._router.navigate([],{
      relativeTo:this._route,
      queryParams:{
        folder: this.bigPicture.folder,
        name:this.bigPicture.name
      },
      queryParamsHandling:'merge',
      skipLocationChange:false
    });
  }

  ngOnInit(): void {

    let name: String = "";
    let bigPic: Image = IMAGES[0];

    this._route.queryParams.subscribe(params => {
      name = params['name']
    })
    console.log(name)
    if(name){
      IMAGES.forEach(function (pic) {
          if (pic.name == name) {
            bigPic = pic;
          }
        })
      this.showPic(bigPic);
    }

  }

  noSave = function () {
    window.alert("Copyright by NightLights");
    return false;
  }


  showPic(picture: Image) {
    this.goLeft = picture.position != 1;

    this.goRight = picture.position != IMAGES.length;

    this.showBigPic = true;
    this.bigPicture = picture;

    this.navigateToPictureURL();
   }

  hidePic() {
    this.showBigPic = false;
    this._router.navigate([],{
      relativeTo:this._route,
      queryParams:{
        folder: null,
        name:null
      },
      queryParamsHandling:'merge',
      skipLocationChange:false
    });
    //window.location.href = window.location.href.split("?")[0];
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event:KeyboardEvent){
    if (event.key === 'ArrowRight'){
      this.showNextPic(1,this.bigPicture);
    }
    if (event.key === 'ArrowLeft'){
      this.showNextPic(-1,this.bigPicture);
    }
    if(event.key === 'Escape'){
      this.hidePic();
    }
  }


  showNextPic(number: number, picture: Image) {
    console.log(picture.position);
    let index = IMAGES.indexOf(picture);
    if ((index == 1 && number == -1) || (index == 0 && number == -1)) {
      this.goLeft = false;
    } else if (index == IMAGES.length - 2 && number == 1 || index == IMAGES.length - 1 && number == 1) {
      this.goRight = false;
    } else {
      this.goLeft = true;
      this.goRight = true;
    }
    if (!(number == -1 && index == 0) && !(number == 1 && index == IMAGES.length - 1)) {
      this.showPic(IMAGES[index + number]);
    }
  }

}
