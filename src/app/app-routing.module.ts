import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// 引入模块-

import { LayoutComponent } from './layout/layout.component'

import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component'

// 配置路由
const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// 701
