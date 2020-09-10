import { Component, OnInit } from '@angular/core';
import { OpinionesService } from 'src/app/services/opiniones.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  opiniones:any [] =[]; 
  FormOpinion: FormGroup;

  constructor(private _os:OpinionesService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getOpiniones();
    this.createFormOpinion();
  }


  getOpiniones(){
    this._os.getOpiniones().subscribe((resp:any)=>{
      this.opiniones = resp;
    })
  }

  createFormOpinion(){
    this.FormOpinion = this.formBuilder.group({
      opinion:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(255)]]
    })
  }

  saveOpinion(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu opinión ha sido registrada, gracias.',
      showConfirmButton: true,
      timer: 3000
    })
    this.FormOpinion.reset();
  }

}
