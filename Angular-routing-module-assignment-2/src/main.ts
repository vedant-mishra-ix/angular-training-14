import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminModule } from './app/admin/admin.module';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  // AppModule hta denge to run nai hoga application
  .catch(err => console.error(err));                 // iske jga koi or module rknge to content show nai hoga kuch be
