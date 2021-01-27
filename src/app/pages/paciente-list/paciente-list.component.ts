import { PacienteService } from './../paciente/paciente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {


  pacientes = [];
  filtro = {};

  constructor(private PacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
      this.PacienteService.listar().subscribe(res => {
        this.pacientes = res;
      })

  }

  pesquisar(filtro) {

    if (filtro.nome !== undefined) {
      this.pacientes = this.pacientes.filter(paciente => paciente.nome === filtro.nome);
    }

    if (filtro.cpf !== undefined) {
      this.pacientes = this.pacientes.filter(paciente => paciente.cpf === filtro.cpf);
    }

    if (filtro.telefone !== undefined) {
      this.pacientes = this.pacientes.filter(paciente => paciente.telefone === filtro.telefone);
    }

  }
}
