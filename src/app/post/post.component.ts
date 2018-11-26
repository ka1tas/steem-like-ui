import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityService } from '../community.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  userid:any;
  constructor(private route: ActivatedRoute,private communityService: CommunityService,
    private fb: FormBuilder, private router: Router ) {}

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id');


  }
  addPost(title:string ,content:string , userId:number  ){


    console.log(title);
    console.log(content);
    console.log("user id: "+ userId);

    if(content==""){
      alert("Empty Post!");

    }
    else{
    let json =JSON.stringify({
      title:title,
      content:content,
      user:{
        id:userId
      }

    });

    this.communityService.addPost(json)
    .subscribe(data => {
     
      if(data.user!=null){
        console.log(data);
     
      this.router.navigate(["/community", this.userid]); 

      }
    }

  
  );
    }


  }




}
