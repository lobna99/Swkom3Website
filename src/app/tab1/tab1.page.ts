import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formData = {
    weight: 50,
    recipient: {
      name: 'hey',
      street: 'Lerchenfelderstrasse 10',
      postalCode: '1070',
      city: 'Vienna',
      country: 'Austria'
    },
    sender: {
      name: 'bro',
      street: 'Hauptplatz 27',
      postalCode: '2700',
      city: 'Wiener Neustadt',
      country: 'Austria'
    }
  };
  httpResult: any ;
  submitted =false;
  constructor(private http: HttpClient) {}


  onSubmit(){
    const json = JSON.stringify(this.formData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post('http://localhost:8080/parcel', json, httpOptions)
    .subscribe(
      data => {
        this.submitted=true;
        this.httpResult = data;
          console.log(data);
      },
      err => {
          console.log(err);
      }
    );
    }
}
