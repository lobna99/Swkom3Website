import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Report = {
    trackingId: '022A2E613'
  }
  submitted = false;
  onSubmit() {
    const report= JSON.stringify(this.Report);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    this.http.post(`http://localhost:8080/parcel/${this.Report.trackingId}/reportDelivery/`, httpOptions)
    .subscribe(
      data => {
        this.submitted=true;
          console.log(data);
      },
      err => {
          console.log(err);
      }
    );
    console.log(report);
    // You can also send the json to a server or save it to a database here
  }
  constructor(private http: HttpClient) {}

 


}
