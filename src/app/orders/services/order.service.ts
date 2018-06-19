import { PurchaseDocument } from '@models/purchasedocument';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PurchaseDocumentFilters } from '@models/purchasedocumentfilters';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  private getPurchaseDocumentsUrl = 'http://localhost:54290/PurchaseDocument/GetPurchaseDocuments';

  constructor(private http: HttpClient) {
  }

  ngOnInit() { }

  GetPurchaseDocuments(Filters: PurchaseDocumentFilters): Observable<PurchaseDocument[]> {
    return this.http.post<PurchaseDocument[]>(this.getPurchaseDocumentsUrl, Filters);
  }
}
