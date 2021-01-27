import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente = {};

  constructor(private pacienteService: PacienteService, private toastrService: ToastrService, private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  incluir(paciente){
    this.pacienteService.incluir(paciente).subscribe(res => {
        this.toastrService.success('Operação realizado com sucesso');
        this.router.navigate(['/pacientes']);
    }, (error) => {
        this.toastrService.error('Erro ao executar a operação');
    })
  }

  voltar(){
      this.location.back();
  }

}
