import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html',
  styleUrls: ['./paciente-detalhes.component.css']
})
export class PacienteDetalhesComponent implements OnInit {


  consultas = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

  onScrollDown() {
    console.log('scrolled down!!');
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

}
