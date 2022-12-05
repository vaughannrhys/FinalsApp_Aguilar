
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
  //user = USERS; amended
  //?: safe navigation operator 
@Input() user?: User;
  //DOB!: Date;

 /*selectUser?: User;
onSelect(user: User): void {
  this.selectUser = user;
} */

  constructor(
  //provide to access url parameter
  private route: ActivatedRoute,
  private UserServiceService: UserServiceService,
  private Location: Location //is an Angular service for interacting with the browser.
  ) { }

  ngOnInit(): void {
    /*const id=this.route.snapshot.paramMap.get('id');
    this.selectUser = USERS.find(selectUser => selectUser.id === id); */

    this.getUser();

  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.UserServiceService.getUser(id)
      .subscribe(user =>  this.user = user);
  }

  //navigate backwards one step in the browser's history
  goBack(): void {
    this.Location.back();
  }

  save(): void{
    if(this.user){
      this.UserServiceService.updateUser(this.user) //update user details
        .subscribe(() =>this.goBack()); //goes back to the Previous
    }
  }

}
