import { Component } from '@angular/core';
import { OwnersService } from '../../../services/owners.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-owner',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-owner.component.html',
  styleUrl: './update-owner.component.css'
})
export class UpdateOwnerComponent {

  public id?:number;
  public name:string="";
  public surname:string="";
  public phone:string="";
  public email:string="";
  public address:string="";
  public isError=false;
  public errorText="";

  constructor (private route:ActivatedRoute, private router:Router, private ownersService:OwnersService){

    
    
    this.ownersService.getOwner(this.route.snapshot.params['id']).subscribe({next:(owner)=>{
      this.name=owner.name;
      this.surname=owner.surname;
      this.phone=owner.phone;
      this.email=owner.email;
      this.address=owner.address;
      this.id=owner.id;
    },
    error:(error)=>{
      console.log(error.error.text);
      this.isError=true;
      this.errorText=error.error.text;
      
    }
    });


  }
  public ownerSubmit(form:NgForm){
    this.ownersService.updateOwner({id:this.id, ...form.form.value}).subscribe({
      next:(data)=>{
        this.router.navigate(['owners', 'list']);
      },
        error:(error)=>{
        this.isError=true;
        this.errorText=error.error.text;
      }
      })
     
    }

  }
 



