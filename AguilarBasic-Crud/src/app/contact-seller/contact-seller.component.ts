import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Movie} from '../movie';
import {MOVIES} from '../movie-listings';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {
  movie = MOVIES;
  //item=ITEMS;
 // add member variable
  selectedMovie?: Movie;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedMovie = MOVIES.find(selectedMovie => selectedMovie.id === id); 
  }

}
