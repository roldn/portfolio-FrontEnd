import { Component, OnInit } from '@angular/core';
import { BannerItem } from 'src/app/model/banner-item';
import { BANNER_DATA_ITEMS } from '../body/header/banner/img-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public bannerData : BannerItem[] = BANNER_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
