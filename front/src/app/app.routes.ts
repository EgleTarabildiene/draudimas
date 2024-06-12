import { Routes } from '@angular/router';
import { ListOwnersComponent } from './components/owners/list-owners/list-owners.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewOwnerComponent } from './components/owners/new-owner/new-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';

export const routes: Routes = [
    {path:"owners/list", component:ListOwnersComponent},
    {path:"owners/new", component:NewOwnerComponent},
    {path:"owners/:id", component:UpdateOwnerComponent},
    {path:"", component:HomePageComponent}
];
