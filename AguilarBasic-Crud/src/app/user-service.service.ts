import { Injectable } from '@angular/core';
import {User} from './user';
import {USERS} from './mock-accounts';
import {MessageService} from './message.service';
import {from, Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  

  private usersUrl = 'api/users'; 
  httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  getUsers(): Observable <User[]> {
    const users = of (USERS); 
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_=> this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers',[])) 
      );
  }
  
  getUser(id: number): Observable <User> {
    
    const url = `${this.usersUrl}/${id}`;
     
     return this.http.get<User>(url)
        .pipe(
          tap(_ => this.log(`fetched user id = ${id}`)),
          catchError(this.handleError<User>(`getUser id=${id}`))
        );
  }

  updateUser(user: User): Observable <any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id = ${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    )
  }

  addUser(email: User): Observable <User> {
    return this.http.post<User>(this.usersUrl, email, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addedUser'))
    );
  }

  deleteUser(id: number): Observable <User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any):Observable<T> => {
      console.error(error); 
      this.log(`$(operation} failed): ${error.message}`);
      

      return of(result as T);
    }
  }

  private log(message: string): void {
    this.messageService.add(`UserServic: ${message}`)
  }


  constructor(
    private http: HttpClient,
    private messageService:MessageService
  ) { }
}
