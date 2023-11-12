import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyA7bCj3GZrMI0_ZSyF-xzRUx4CJhS_702Y';
  private playlist = 'UUbVNBFaRkgL-6kg92q1fsYw';
  private nextPageToken = '';

  constructor(public http: Http) { }

  getVideos() {

    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new URLSearchParams();

    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlist);
    params.set('key', this.apiKey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { search: params })
      .map(res => {

        console.log(res.json());

        this.nextPageToken = res.json().nextPageToken;

        const videos: any[] = [];
        for (const video of res.json().items) {
          const snippet = video.snippet;

          videos.push(snippet);

        }

        return videos;


      });

  }

}
