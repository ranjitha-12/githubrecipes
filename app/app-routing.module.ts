import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReceipeComponent } from './add-receipe/add-receipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { IndexComponent } from './index/index.component';
import { MyReceipeComponent } from './my-receipe/my-receipe.component';
import { PasswordComponent } from './password/password.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ResetComponent } from './reset/reset.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path:'', redirectTo: 'signin', pathMatch:'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'recipelist', component: RecipeListComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'recipedescription', component: RecipeDescriptionComponent },
  { path: 'myreceipe', component: MyReceipeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'addreceipe', component: AddReceipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
