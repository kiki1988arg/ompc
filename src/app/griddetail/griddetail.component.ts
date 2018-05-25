import { ExampleService } from './../services/example.service';
import { ContratServiceDetail } from '@models/ContratServiceDetail';
import { Component, OnInit } from '@angular/core';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { mockdetail } from '@mocks/mockdetail';



@Component({
  selector: 'app-griddetail',
  templateUrl: './griddetail.component.html',
  styleUrls: ['./griddetail.component.css']
})
export class GriddetailComponent implements OnInit {
  public response: string;
  public gridDataDetail: any = mockdetail;
  constructor(private Example: ExampleService) { }

  ngOnInit() {
    console.log('detailgrid');
    this.Example.PostData(23123).subscribe(data => {

      console.log(data);
      console.log(this.response);
        });
  }



}
