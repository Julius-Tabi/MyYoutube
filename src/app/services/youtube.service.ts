import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }
  
  //api call to ritrieve channels
  getChannels(channelName): Observable<any>{
    const API_KEY = "AIzaSyBs1LkX6ahgeWzuJb0CYL1eTbpkz2kLZLc";
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=" + API_KEY + "&maxResults=50";
    return this.http.get<any>(url);
    
  }
  
  
  }

