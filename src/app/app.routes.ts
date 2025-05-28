import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    {path: '', component: UsuariosComponent},
    {path: 'inicio', component: UsuariosComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'productos', component: ProductosComponent}
];
