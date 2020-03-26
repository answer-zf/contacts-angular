import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './auth-guard'
// 引入模块

import { LayoutComponent } from './layout/layout.component'

import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactEditComponent } from './contact-edit/contact-edit.component'
import { ContactNewComponent } from './contact-new/contact-new.component'

import { TagListComponent } from './tag-list/tag-list.component'
import { TagEditComponent } from './tag-edit/tag-edit.component'
import { TagNewComponent } from './tag-new/tag-new.component'

import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component'

// 配置路由
const routes: Routes = [
  // pathMatch, 必须完全匹配 路径 时，才做重定向，重定向的必备条件
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  { path: 'layout', component: LayoutComponent },
  {
    path: 'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ContactListComponent },
      { path: 'edit', component: ContactEditComponent },
      { path: 'new', component: ContactNewComponent }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TagListComponent },
      { path: 'edit', component: TagEditComponent },
      { path: 'new', component: TagNewComponent }
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
