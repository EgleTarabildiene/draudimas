import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OwnersService } from '../../../services/owners.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-owner',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.css'
})
export class NewOwnerComponent {

constructor (private ownersService:OwnersService, private router:Router){

}


public ownerSubmit(form:NgForm){
this.ownersService.addOwner(form.form.value).subscribe((data)=>{
this.router.navigate(['owners', 'list']);
});
}


}
