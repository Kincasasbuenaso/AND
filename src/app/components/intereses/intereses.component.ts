import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.scss']
})
export class InteresesComponent implements OnInit {

  intereses:any = [{
    image:'../assets/Image 1.png',
    titulo:'Sabes que son los datos abiertos?',
    desc:'La información que producen las entidades públicas a tu alcance',
    linkText:'Me interesa!',
    link:'#'
  },
  {
    image:'../assets/colombiaco_Mesa de trabajo 1.png',
    titulo:'Conoce más sobre nuestro país',
    desc:'Colombia es hermosa, y queremos que conozcas más sobre ella',
    linkText:'Ir a Colombia.co',
    link:'#'
  },
  {
    image:'test',
    titulo:'Este portal está pensando para ti',
    desc:'GOV.CO nace para facilitarle a los ciudadanos la interacción con el Estado',
    linkText:'Quiero saber como funciona',
    link:'#'
  },
  {
    image:'test',
    titulo:'Destacado que esté en acondicionado ',
    desc:'Texto descriptivo que capte la atención del lector',
    linkText:'Call to action',
    link:'#'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
