import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  games:any;
  userandgames:any;
  listOfGames:any;
  userdetails:any;
  id:any;

  constructor(private router: Router,  
    private route: ActivatedRoute, private fb: FormBuilder,private http: HttpClient,
    private storeService: StoreService,public service: AuthService,
    ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id in store: "+this.id);
   
   
    
    this.storeService.getViewPlus(this.id).subscribe(
      data => {
        this.userandgames = data;
        
        this.listOfGames = this.userandgames.game;
        this.userdetails = this.userandgames.user;
    
      }
    );
 

    this.storeService.getView().subscribe(
      data => {
        this.games = data;
        console.log(this.games);
        this.listOfGames = this.games;
        console.log(this.listOfGames);
        
    
      }
    );


  }

 

}
