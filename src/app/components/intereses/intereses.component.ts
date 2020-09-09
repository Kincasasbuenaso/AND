import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.scss']
})
export class InteresesComponent implements OnInit {

  intereses:any = [{
    image:'test',
    titulo:'Sabes que son los datos abiertos?',
    desc:'La información que producen las entidades públicas a tu alcance',
    linkText:'Me interesa!',
    link:'#'
  },
  {
    image:'test',
    titulo:'Sabes que son los datos abiertos?',
    desc:'La información que producen las entidades públicas a tu alcance',
    linkText:'Me interesa!',
    link:'#'
  },
  {
    image:'test',
    titulo:'Sabes que son los datos abiertos?',
    desc:'La información que producen las entidades públicas a tu alcance',
    linkText:'Me interesa!',
    link:'#'
  },
  {
    image:'test',
    titulo:'Sabes que son los datos abiertos?',
    desc:'La información que producen las entidades públicas a tu alcance',
    linkText:'Me interesa!',
    link:'#'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
