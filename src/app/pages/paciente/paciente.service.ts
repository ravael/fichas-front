import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';


@Injectable({ providedIn: 'root' })
export class PacienteService  {

    constructor(protected httpCliente: HttpClient) {

    }

    incluir(paciente): Observable<any> {
        return this.httpCliente.post(environment.apiUrl + '/paciente/incluir', paciente);
    }

    listar(): Observable<any[]> {
        return this.httpCliente.get<any[]>(environment.apiUrl + '/paciente/listar');
    }

    // listarContratosGlosados(): Observable<ContratoDTO[]> {
    //     return this.http.get<ContratoDTO[]>(environment.apiUrl + '/cadastro/contrato/contratos-glosados');
    // }

    // listarContratosBeneficio(idBeneficio: any): Observable<ContratoDTO[]> {
    //      return this.http.get<ContratoDTO[]>(environment.apiUrl + '/cadastro/contrato/contratos-beneficio/'+idBeneficio);
    // }

    // listarContratosRestituicao(): Observable<ContratoDTO[]> {
    //     return this.http.get<ContratoDTO[]>(environment.apiUrl + '/cadastro/contrato/contratos-restituicao');
    // }

}

