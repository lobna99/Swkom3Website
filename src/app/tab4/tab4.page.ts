import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  ReportH = {
    trackingId: '022A2E613',
    code: 'WSTB02'
  }
  submitted = false;
  onSubmit() {
    const report= JSON.stringify(this.ReportH);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    this.http.post(`http://localhost:8080/parcel/${this.ReportH.trackingId}/reportHop/${this.ReportH.code}`, httpOptions)
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
  constructor(private http: HttpClient) {

  }

 


}
