import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data =>{
      console.log(data);
      this.myPortfolio=data;
    });
  }

}