import { Component } from '@angular/core';
import { HomecardpostcommunityComponent } from "../../homecardpostcommunity/homecardpostcommunity.component";
import { HomecardbrowsecomComponent } from "../../homecardbrowsecom/homecardbrowsecom.component";
import { Router, RouterModule } from '@angular/router';
import { skip } from 'rxjs';

@Component({
    selector: 'app-createcommunity',
    standalone: true,
    templateUrl: './createcommunity.component.html',
    styleUrl: './createcommunity.component.css',
    imports: [HomecardpostcommunityComponent, HomecardbrowsecomComponent,RouterModule]
})
export class CreatecommunityComponent {

}
