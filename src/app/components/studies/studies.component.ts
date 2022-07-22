import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data =>{
      console.log(data);
      this.myPortfolio=data;
    });
  }

}