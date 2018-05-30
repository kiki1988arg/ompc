import { ExampleService } from '@services/example.service';
import { ContratDetail } from '@models/ContratDetail';
import { Component, OnInit } from '@angular/core';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { mockdetail } from '@mocks/mockdetail';

@Component({
  selector: 'app-detailgrid',
  templateUrl: './detailgrid.component.html',
  styleUrls: ['./detailgrid.component.css']
})
export class DetailgridComponent implements OnInit {

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
