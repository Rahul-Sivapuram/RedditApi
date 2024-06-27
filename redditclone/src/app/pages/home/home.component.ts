import { Component } from '@angular/core';
import { PostComponent } from '../../post/post.component';
import { HomecardpostcommunityComponent } from '../../homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from '../../homecardbrowsecom/homecardbrowsecom.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent,HomecardpostcommunityComponent,HomecardbrowsecomComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
