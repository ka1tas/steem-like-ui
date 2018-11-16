import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { CommunityComponent } from './community/community.component';
import { GameProfileComponent } from './game-profile/game-profile.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"community", component:CommunityComponent},
  {path:"store", component:StoreComponent},
  {path:"profile", component:GameProfileComponent},
  {path:"games", component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
