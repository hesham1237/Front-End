import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch:'full'},   
  { path: 'login', component: NotesComponent },
    { path: 'register', component: FeedbackComponent },
    { path: 'about', component: UserListComponent },
    { path: '**', component: NotfoundComponent },
    

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
