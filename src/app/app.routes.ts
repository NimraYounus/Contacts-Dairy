import { Routes } from '@angular/router';
import { ContactsDairyComponent } from './contact/contacts-list/contacts-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contacts-dairy', pathMatch: 'full' },
  {
    path: 'contacts-dairy',
    component: ContactsDairyComponent,
  },
];
