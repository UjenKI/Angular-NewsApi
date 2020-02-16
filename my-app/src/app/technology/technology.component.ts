import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  data: any;
  url = 'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=18f1c87e444741aca30db0a569bba999';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(inf => {
      this.data = inf.articles;
      console.log(inf.articles);
    })
  }
}
