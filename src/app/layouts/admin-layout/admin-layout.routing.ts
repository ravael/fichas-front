import { PacienteDetalhesComponent } from './../../pages/paciente-detalhes/paciente-detalhes.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { PacienteListComponent } from 'app/pages/paciente-list/paciente-list.component';
import { PacienteComponent } from 'app/pages/paciente/paciente.component';
import { ConsultasComponent } from 'app/pages/consultas/consultas.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { AuthGaurdService } from 'app/pages/service/service/auth-gaurd.service';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',                  component: DashboardComponent, canActivate:[AuthGaurdService] },
    { path: 'user',                       component: UserComponent, canActivate:[AuthGaurdService] },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    { path: 'paciente',                   component: PacienteComponent, canActivate:[AuthGaurdService] },
    { path: 'pacientes',                  component: PacienteListComponent, canActivate:[AuthGaurdService] },
    { path: 'paciente/detalhe/:id',       component: PacienteDetalhesComponent, canActivate:[AuthGaurdService] },
    { path: 'consulta',                   component: ConsultasComponent, canActivate:[AuthGaurdService] },

];
