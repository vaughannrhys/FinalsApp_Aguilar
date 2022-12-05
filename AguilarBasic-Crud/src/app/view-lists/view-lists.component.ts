import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import {MOVIES} from '../movie-listings';

@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {
movie : Movie[] = [];
  constructor() { }

  ngOnInit(): void {
    this.movie = MOVIES;
  }

}
