import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AddProductComponent } from './app/add-product/add-product.component';
import { RetrieveProductComponent } from './app/retrieve-product/retrieve-product.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'retrieve-product', component: RetrieveProductComponent },
  { path: '', redirectTo: '/add-product', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});