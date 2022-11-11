import { Component, OnInit,Input, } from '@angular/core';
import { ServeService } from 'src/app/service/serve.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  @Input() cardvalues:any=[];

name='';
showme:boolean=true;

popup:boolean=false;


  status :number = 0;

  constructor(
    private oService : ServeService
  ) { }

  ngOnInit(): void {

    
    let status:number=0;
    this.oService.popup$.subscribe((value:number=0)=>{
    this.status=value;  
   
    })
    
  }
    openpopup(){
      this.showme=!this.showme
    }




  
}





