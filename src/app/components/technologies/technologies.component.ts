import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data =>{
      console.log(data);
      this.myPortfolio=data;
    });
  }

}