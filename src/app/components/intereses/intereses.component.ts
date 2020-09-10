import { Component, OnInit } from '@angular/core';
import { InteresesService } from 'src/app/services/intereses.service';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.scss']
})
export class InteresesComponent implements OnInit {

  intereses:any [] =[];

  constructor(private _is:InteresesService) { }

  ngOnInit(): void {
    this.getIntereses();
  }

  getIntereses(){
    this._is.getIntereses().subscribe((resp:any)=>{
      this.intereses = resp;
    })
  }

}
