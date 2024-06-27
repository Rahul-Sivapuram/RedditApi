import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomecardpostcommunityComponent } from './homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from './homecardbrowsecom/homecardbrowsecom.component';
import { ViewpostComponent } from './pages/viewpost/viewpost.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,HomecardpostcommunityComponent,HomecardbrowsecomComponent,ViewpostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redditclone';
}
