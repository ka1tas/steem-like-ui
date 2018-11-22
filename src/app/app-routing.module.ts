import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { CommunityComponent } from './community/community.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { GamelistComponent } from './gamelist/gamelist.component';

const routes: Routes = [
  {path:"", component:StoreComponent},
  {path:"login", component:LoginComponent},
  {path:"community",canActivate: [AuthGuard], component:CommunityComponent},
  {path: "community/:id", canActivate: [AuthGuard], component: CommunityComponent },
  {path:"store", component:StoreComponent},
  {path: "store/:id", canActivate: [AuthGuard], component: StoreComponent },
  {path:"profile",canActivate: [AuthGuard], component:ProfileComponent},
  {path: "profile/:id", canActivate: [AuthGuard], component: ProfileComponent },
  {path:"games", component:GamesComponent},
  {path: "games/:id",component: GamesComponent },
  {path:"signup", component:SignupComponent},
  {path:"editprofile", canActivate: [AuthGuard], component:EdituserComponent },
  {path:"finduser", component:SearchuserComponent},
  {path:"friendlist",canActivate: [AuthGuard], component:FriendlistComponent},
  {path:"gamelist", canActivate: [AuthGuard], component:GamelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
