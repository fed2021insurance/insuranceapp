import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./home/signup/signup.component"
import { FormsComponent } from "./forms/forms.component"
import { ContactComponent } from "./contact/contact.component"
//import { ErrorPageComponent } from "./error-page/error-page.component"
import { AuthGuard } from "./auth-gaurd.service"
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", canActivate: [AuthGuard], component: FormsComponent },
  { path: "signup", component: SignupComponent },
  { path: "contact", canActivate: [AuthGuard], component: ContactComponent },
  //{ path: "not-found", component: ErrorPageComponent, data: { message: "Page Not Found!"} },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}