import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PacienteComponent } from "./pages/paciente/paciente.component";
import { PacienteListComponent } from "./pages/paciente-list/paciente-list.component";
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NumberDirective } from './shared/directives/numberDirective';
import { PacienteDetalhesComponent } from './pages/paciente-detalhes/paciente-detalhes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxEditorModule } from 'ngx-editor';
import { LoginComponent } from './pages/login/login.component';
import { BasicAuthHtppInterceptorService } from './pages/service/service/basic-auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PacienteComponent,
    PacienteListComponent,
    ConsultasComponent,
    NumberDirective,
    PacienteDetalhesComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxEditorModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
