import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent:() => 
        import('../app/pages/home/home.component').then(
          (mod) => mod.HomeComponent ),
            
    },
    {
        path: 'room/:roomId',
        loadComponent:() => 
        import('../app/pages/room/room.component').then(
          (mod) => mod.RoomComponent ),
            
    },
    {path:'**', redirectTo:'home'},
    
];
