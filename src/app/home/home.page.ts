import { Component, ElementRef, ViewChild } from '@angular/core';
// import { data } from 'jquery';
// import { data } from 'jquery';
import {YoutubeService} from '../services/youtube.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  channels: any;
  @ViewChild('channelName') channelName: ElementRef;
  constructor(private youtube: YoutubeService) { }
  
  ngOnInit() {
    this.youtube.getChannels("programming").subscribe((data) => {
      console.log(data);
      this.channels = data.items;
    })
  }
  
  getData(channelName) {
    channelName = this.channelName.nativeElement.value;
     this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data);
      this.channels = data.items;
    })
  }

}
