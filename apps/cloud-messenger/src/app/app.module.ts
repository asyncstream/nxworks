import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageProviderComponent } from './message-provider/message-provider.component';
import { MessageProvidersPageComponent } from './pages/message-providers-page/message-providers-page.component';
import { UiModule } from '@nxworks/ui';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MessageProviderComponent, MessageProvidersPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, UiModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
