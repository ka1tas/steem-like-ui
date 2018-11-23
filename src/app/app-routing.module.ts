import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { CommunityComponent } from './community/community.component';
import { GameProfileComponent } from './game-profile/game-profile.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:"", component:StoreComponent},
  {path:"login", component:LoginComponent},
  {path:"community", component:CommunityComponent},
  {path:"store", component:StoreComponent},
  {path:"profile", component:ProfileComponent},
  {path:"games", component:GamesComponent},
  {path:"signup", component:SignupComponent},
  {path:"editprofile", component:EdituserComponent },
  {path:"finduser", component:SearchuserComponent},
  {path:"post", component: PostComponent},
  {path: "post/:id",  component: PostComponent },
  {path:"friendlist", component:FriendlistComponent},
  {path:"gamelist", component:GamelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
