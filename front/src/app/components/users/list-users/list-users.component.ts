import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  public users:User[]=[];
  constructor (private usersService:UsersService){
    this.usersService.getUsers().subscribe({
      next:(users)=>{
        this.users=users
      }
    });

  }

}