import { Routes } from '@angular/router';
import { ListOwnersComponent } from './components/owners/list-owners/list-owners.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewOwnerComponent } from './components/owners/new-owner/new-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { viewGuard } from './guards/view.guard';
import { editGuard } from './guards/edit.guard';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { adminGuard } from './guards/admin.guard';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';

export const routes: Routes = [
    {
        path:"owners/list", component:ListOwnersComponent,
        canActivate:[viewGuard]
    },
    {
        path:"owners/new", component:NewOwnerComponent,
        canActivate:[editGuard]
    },
    {
        path:"owners/:id", component:UpdateOwnerComponent,
        canActivate:[editGuard]
    },
    {
        path:"orders/list", component:ListOrdersComponent,
        canActivate:[viewGuard]
    },
    {
        path:"orders/:new", component:NewOrderComponent,
        canActivate:[editGuard]
    },
    
    {path:"auth/signin", component:SigninComponent},
    {path:"auth/login", component:LoginComponent},

    {
        path:"users/list",
        component:ListUsersComponent,
        canActivate:[adminGuard]
    },
    {
        path:"users/:id",
        component:UpdateUserComponent,
        canActivate:[adminGuard]
    },

  {
        path:"profile",
        component:ProfileComponent
    },

    
    {path:"", component:HomePageComponent}
];
