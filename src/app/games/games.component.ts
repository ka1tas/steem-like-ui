import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  id:any;
  gamedetails:any;
  constructor(private router: Router,  
    private route: ActivatedRoute,private http: HttpClient,
    private storeService: StoreService,public service: AuthService,
    ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
  
    this.storeService.getGamedetails(this.id).subscribe(
      data => {
        this.gamedetails = data;
    
      }
    );


  }

}
