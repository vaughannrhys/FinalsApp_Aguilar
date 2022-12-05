import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  users: User[] = [];
  dob!: Date;

  selectUser?: User;

  constructor(
    //provide to access url parameter
    private route: ActivatedRoute,
    //user service
    private UserServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getUsers();

  }

  add(Email: string): void{
    Email =Email.trim();
    if (!Email){return;}
    this.UserServiceService.addUser({Email} as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  // Delete Here button 
  delete(user: User):  void {
    this.confirmDelete();
    this.users = this.users.filter(u => u !== user);
    this.UserServiceService.deleteUser(user.id)
      .subscribe();
  }

  confirmDelete(){
    alert('Are you sure you want to delete this account?');
  }


  getUsers():  void {
    this.UserServiceService.getUsers().subscribe(users => this.users = users);


  }

}
