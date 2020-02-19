import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {AgmCoreModule} from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { EnvironmentalfactorsComponent } from './environmentalfactors/environmentalfactors.component';

const appRoutes: Routes=[
  {path: 'search', component:SearchComponent},
  {path: 'env', component:EnvironmentalfactorsComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EnvironmentalfactorsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), AgmCoreModule.forRoot({apiKey:'AIzaSyDs4p51M7phgHvGUYEEGqpvh46L0MxTnPs'}),ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
