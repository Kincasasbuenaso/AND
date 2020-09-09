import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  opiniones:any = [{
    estado:1,
    infoEstado:'Falta un día',
    titulo:'Únete al Pacto por Colombia!',
    entidad:'Presidencia de la República',
    participantes:'534 colombianos participando'
  },
  {
    estado:2,
    infoEstado:'Activo!',
    titulo:'¿Cómo mejorarías nuestro sistema de transporte?',
    entidad:'Secretaría de Movilidad de Bogotá',
    participantes:'87 colombianos participando'
  },
  {
    estado:3,
    infoEstado:'Conoce los resultados',
    titulo:'Los datos y visualizaciones del gobierno interesantes para su uso, aprovechamiento y toma de decisiones.',
    entidad:'Ministerio de las Tecnologías de la Información y las Comunicaciones',
    participantes:''
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
