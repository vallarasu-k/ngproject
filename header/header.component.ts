import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/service/serve.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
TotalAmount:any=0;
showme:boolean=true;
  constructor(
    private oservice:ServeService
  ) { }

  ngOnInit(): void {
    this.oservice.dataToCart$.subscribe((amount)=>{
      this.TotalAmount = amount;
    })
  }

  openpopup(){
    if(this.TotalAmount>=1){
  this.oservice.fnpopup();
  }
  else{
    alert('empty cart');
  }

}


}


