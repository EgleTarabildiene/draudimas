import { Component } from '@angular/core';
import { OwnersService } from '../../../../services/owners.service';
import { Owner } from '../../../../models/owner';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-owners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-owners.component.html',
  styleUrl: './table-owners.component.css'
})
export class TableOwnersComponent {
  public owners:Owner[]=[];

constructor (private ownersServise:OwnersService){
  ownersServise.getOwners().subscribe((data)=>{
   this.owners=data;
   
  });
}
}
