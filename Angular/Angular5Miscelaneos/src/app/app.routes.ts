import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
//import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
//import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
//import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';


//usuario/10/nuevo

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIOS_ROUTES
         /*[
            
           {
                path:'nuevo', component: UsuarioNuevoComponent
            },
            {
                path:'editar', component: UsuarioEditarComponent
            },
            {
                path:'detalle', component: UsuarioDetalleComponent
            },
            { path: '**', pathMatch:'full', redirectTo:'nuevo' }
        ]*/
     },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);


