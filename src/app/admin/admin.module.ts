import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthGuard } from './shared/services/auth.guard';
import { SearchPipe } from './shared/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
          { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] },

        ]
      }
    ])
  ],
  exports: [],
  providers: [AuthGuard, AlertService]
})

export class AdminModule { }
