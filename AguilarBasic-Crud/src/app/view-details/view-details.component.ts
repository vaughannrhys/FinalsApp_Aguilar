import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import {MOVIES} from '../movie-listings';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
movie = MOVIES;

selectedMovie?: Movie;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedMovie = MOVIES.find(selectedMovie => selectedMovie.id === id); 
  }

}
