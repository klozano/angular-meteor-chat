import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatChipsModule,
  MatTooltipModule,
 } from '@angular/material';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      // Home Page
      {
        path: 'defaultRoom',
        component: ChatRoomComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/defaultRoom',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent,
        data: {
          title: '404 Page Not Found'
        }
      }
    ]),

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatDialogModule,
    MatInputModule,
    MatListModule, 
    MatChipsModule,
    MatTooltipModule  
  ],
  declarations: [
    AppComponent,
    ChatRoomComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
