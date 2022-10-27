import { Component, Input, OnInit } from '@angular/core';
import { BannerItem } from 'src/app/model/banner-item';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  
  /* Custom Properties */

  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items : BannerItem[] = [];

  /* Final Properties */

  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() { 
    this.finalHeight=this.isFullScreen ? '500vh' : `${this.height}px`
  }

  ngOnInit(): void {
    this.items.map(( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    })
  }


  setCurrentPotition(position : number){
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
  }

  setNext(){

    let finalPorcentage = 0;
    let nextPosition = this.currentPosition + 1;

    if(nextPosition <= this.items.length - 1){
      finalPorcentage = 100 *nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPorcentage;
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1 ;
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;  
    }else{
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
  

}