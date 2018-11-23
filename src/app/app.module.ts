import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { GamesComponent } from './games/games.component';
import { CommunityComponent } from './community/community.component';
import { ProfileComponent } from './profile/profile.component';
import { GameProfileComponent } from './game-profile/game-profile.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FilterdataPipe } from './filterdata.pipe';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StoreComponent,
    GamesComponent,
    CommunityComponent,
    ProfileComponent,
    GameProfileComponent,
    SignupComponent,
    EdituserComponent,
    SearchuserComponent,
    GamelistComponent,
    FriendlistComponent,
    FilterdataPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
