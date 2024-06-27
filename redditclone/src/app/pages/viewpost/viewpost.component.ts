import { Component } from '@angular/core';
import { HomecardpostcommunityComponent } from "../../homecardpostcommunity/homecardpostcommunity.component";
import { HomecardbrowsecomComponent } from "../../homecardbrowsecom/homecardbrowsecom.component";

@Component({
    selector: 'app-viewpost',
    standalone: true,
    templateUrl: './viewpost.component.html',
    styleUrl: './viewpost.component.css',
    imports: [HomecardpostcommunityComponent, HomecardbrowsecomComponent]
})
export class ViewpostComponent {

}
