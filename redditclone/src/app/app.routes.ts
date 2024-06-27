import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ViewpostComponent } from './pages/viewpost/viewpost.component';
import { CreatecommunityComponent } from './pages/createcommunity/createcommunity.component';
import { CreatepostComponent } from './pages/createpost/createpost.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"view",component:ViewpostComponent},
    {path:"community/add",component:CreatecommunityComponent},
    {path:"post/add",component:CreatepostComponent}
];
