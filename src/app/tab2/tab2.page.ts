import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  Track = {
    trackingId: '022A2E613'
  }
  parcel: any = 
    {
     
    }
  submitted=false;

       

  constructor(private http: HttpClient) {}
  onSubmit() {
    const track= JSON.stringify(this.Track);
    console.log(track);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.get(`http://localhost:8080/parcel/${this.Track.trackingId}`,httpOptions)
    .pipe(map((res: any) => res))
    .subscribe(
        data => {
            this.submitted=true;
            this.parcel = data;
            console.log(data);
        },
        err => {
            console.log(err);
        }
    );

    // You can also send the json to a server or save it to a database here
  }
}
