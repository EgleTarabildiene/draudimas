import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OwnersService } from '../../../services/owners.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-new-owner',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent],
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.css'
})
export class NewOwnerComponent {

  public isError=false;
  public errorText="";


constructor (private ownersService:OwnersService, private router:Router){

}


public ownerSubmit(form:NgForm){
this.ownersService.addOwner(form.form.value).subscribe({
  next:(data)=>{
this.router.navigate(['owners', 'list']);
  },
  error:(error)=>{
 this.isError=true;
        this.errorText=error.error.text;
  }
});
}


}
