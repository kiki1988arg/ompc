import { RequestExample, Ejemplo } from '@models/request';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })

};

@Injectable({
  providedIn: 'root'
})
export class ExampleService implements OnInit {
  private getMockUrl = 'http://localhost:54290/Contract/GetMock';
  private getExampleUrl = 'http://localhost:54290/Contract/GetExampleGrid';
  private PostDataUrl = 'http://localhost:54290/Contract/SaveData';
  private exampleRequest: RequestExample = new RequestExample();

  ngOnInit(): void {
  }


  constructor(private http: HttpClient) {

  }







  /** GET heroes from the server */
  public getMock(): Observable<String> {
    return this.http.get<String>(this.getMockUrl);
  }
  public getExample(): Observable<any[]> {
    return this.http.get<any[]>(this.getExampleUrl);
  }
  PostData(id: any): Observable<RequestExample> {
    this.exampleRequest.incoming = id;
    this.exampleRequest.prueba = new Ejemplo();
    this.exampleRequest.prueba.incoming = 14314;
    return this.http.post<RequestExample>('http://localhost:54290/Contract/SaveData', this.exampleRequest
      , httpOptions);
  }

}
