import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-videos',
  templateUrl: './add-edit-videos.component.html',
  styleUrls: ['./add-edit-videos.component.css']
})
export class AddEditVideosComponent implements OnInit {
  // public serverUrl: any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public addUpdateEndpoint: any = "addorupdatedata";
  public getDataEndpoint:any="datalist";
  public listingRoute: any = "video-library-management/list";
  public sourceName:any ="video_management";
  public categorySourceName = "video_category";
  public SingleVideoData: any = [];
  constructor(public activeRoute: ActivatedRoute,public apiService : ApiService, private readonly meta: MetaService) { 


    this.meta.setTitle('Arniefonseca - User Management');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -   User Management');
    this.meta.setTag('twitter:title', 'Arniefonseca -   User Management');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
  }

  ngOnInit() {
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.videodata.res;
        this.SingleVideoData = result;
      })
    }
  }

}
