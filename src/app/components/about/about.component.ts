import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data =>{
      console.log(data);
      this.myPortfolio=data;
    });
  }

}