import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MessageProvidersPageComponent } from './pages/message-providers-page/message-providers-page.component';

const routes: Routes = [
    {
      path: 'message-providers',
      component: MessageProvidersPageComponent
    },
    {
      path: '',
      redirectTo: 'message-providers',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }