import { Component } from '@angular/core';
import { HomecardpostcommunityComponent } from "../../homecardpostcommunity/homecardpostcommunity.component";
import { HomecardbrowsecomComponent } from "../../homecardbrowsecom/homecardbrowsecom.component";

@Component({
    selector: 'app-createpost',
    standalone: true,
    templateUrl: './createpost.component.html',
    styleUrl: './createpost.component.css',
    imports: [HomecardpostcommunityComponent, HomecardbrowsecomComponent]
})
export class CreatepostComponent {

}
