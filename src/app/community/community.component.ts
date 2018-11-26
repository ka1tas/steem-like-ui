import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  posts: any[];
  comment:any[];
  id : number;
  public errorMessage;
 
  

  constructor(private communityService: CommunityService,private fb: FormBuilder) { }

  ngOnInit() {
    console.log("Inside employee-component-ts");
    this.communityService.getPosts().subscribe(
      data => {
        this.posts = data;
       /*  this.comment = data; */
       console.log(this.posts);
       console.log(this.posts[0].user.id);
       console.log(this.posts[1].title);
       

        
      },
      error=>{
        this.errorMessage="System error. Contact Admin or try after some time";
      }
    );
  }


  addcomment(commentss:string ,postId:number , userId:number  ){


    console.log(commentss);
    console.log(userId);
    console.log("post id: "+ postId);
    
    let json =JSON.stringify({
      id:0,
      content:commentss,
      user:{
        id:userId
      },
      post:{
        id:postId
      },
      postid : postId
      
    });

    this.communityService.addComment(json)
    .subscribe(data => {
      console.log(data);
    }
  );



  }

  /* update(){
    console.log(this.commentList.value);
  } */

}
