
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RootStoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
