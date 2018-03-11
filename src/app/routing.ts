import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component'
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { AuthGuard } from './auth.guard';
import { ClientGuard } from './client.guard';
import { TrainerGuard } from './trainer.guard';
import { ManagerGuard } from './manager.guard';
import {AdminLoginComponent} from './admin-login/admin-login.component'

export const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'user-login',
        component: UserLoginComponent
    },
    {
        path: 'trainer-application',
        component: TrainerApplicationComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'appointments',
        component: AppointmentsComponent
    },
    {
        path: 'forum-page',
        component: ForumPageComponent
    },
    {
        path: 'client-page',
        canActivate: [AuthGuard, ClientGuard],
        component: ClientPageComponent
    },
    {
        path: 'trainer-page',
        canActivate: [AuthGuard, TrainerGuard],
        component: TrainerPageComponent
    },
    {
        path: 'admin-login',
        component: AdminLoginComponent

    },
    {
        path: 'manager-page',
        canActivate: [AuthGuard, ManagerGuard],
        component: ManagerPageComponent
    },
    {
        path: '**', 
        redirectTo: './home',
        pathMatch: 'full'
    }
]