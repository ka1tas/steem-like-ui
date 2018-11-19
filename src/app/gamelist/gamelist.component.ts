import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  games: Game[] = [{id:1,name:"Team Fortres 2"},{id:2,name:"Counter Strike"},{id:3,name:"PUBG"},{id:4, name:"Dota2"}];
}
