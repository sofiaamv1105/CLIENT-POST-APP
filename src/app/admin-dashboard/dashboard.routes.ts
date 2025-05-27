import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
<<<<<<< HEAD
import { UsersPageComponent } from "./pages/users-page/users-page.component";
=======
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc

const dashboardRoutes: Routes=[
    {
        path:'',
        component:DashboardLayoutComponent,
        children:[
            {
                path:'users',
<<<<<<< HEAD
                component:UsersPageComponent,
            },
            {
                path: 'users/:id',
                component: UserPageComponent,
=======
                component:UserPageComponent,
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
            },
            {
                path:'**',
                redirectTo: 'users',
            },
        ],
    },
    {
        path:'**',
        redirectTo:'',
    },
];

export default dashboardRoutes;