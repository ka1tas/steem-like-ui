import { Component, OnInit } from '@angular/core';
import { Game } from '../game';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  listOfGames:Game []=[
    {id:1,name:'Team Fortress 2',headLine:'Best Game Ever',description:'Nine distinct classes provide range of tactical abilities.'},
    {id:2,name:'PUBG',headLine:'Best Multiplayer game',description:"PUBG is a battle royale shooter"},
    {id:3,name:'Counter-Strike: GO',headLine:'team-based action gameplay',description:'CS:GO will expand upon the team-based action gameplay'},
    {id:4,name:"Dota 2",headLine:'The most-played game on Steam',description:'Players worldwide enter battle over a hundred Dota heroes'},
    {id:5,name:'STAR WARS™',headLine:'One Champion. No Limits.',description:'Climb on and experience the pure adrenaline-pumping excitement'},
    {id:6,name:'Call of Duty: MW',headLine:'Most critically-acclaimed games',description:'Remastered in true high-definition & improved textures'},
    {id:7,name:'Left 4 Dead 2',headLine:'Best action horror ',description:'Set in the zombie apocalypse'},
    {id:8,name:"Assassin's Creed Unity",headLine:'Best action/adventure game ',description:'Set in the city of Paris , the French Revolution.'},
    
    ];


  constructor() { }

  ngOnInit() {
  }

 

}
