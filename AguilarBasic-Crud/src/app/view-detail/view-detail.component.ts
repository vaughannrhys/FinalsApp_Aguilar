
import { Component, Input, OnInit } from '@angular/core';
import {USERS} from "../mock-accounts";
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

@Input() user?: User;
  

  constructor(

  private route: ActivatedRoute,
  private UserServiceService: UserServiceService,
  private Location: Location 
  ) { }

  ngOnInit(): void {
 
    this.getUser();

  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.UserServiceService.getUser(id)
      .subscribe(user =>  this.user = user);
  }

  goBack(): void {
    this.Location.back();
  }

  save(): void{
    if(this.user){
      this.UserServiceService.updateUser(this.user) 
        .subscribe(() =>this.goBack()); 
    }
  }

}
