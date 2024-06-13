import { Routes } from '@angular/router';
import { ListOwnersComponent } from './components/owners/list-owners/list-owners.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewOwnerComponent } from './components/owners/new-owner/new-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {path:"owners/list", component:ListOwnersComponent},
    {path:"owners/new", component:NewOwnerComponent},
    {path:"owners/:id", component:UpdateOwnerComponent},
    
    {path:"auth/signin", component:SigninComponent},
    {path:"auth/login", component:LoginComponent},
    
    {path:"", component:HomePageComponent}
];
