import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment as env } from '@env';

if (env.production) {
  enableProdMode();
}

setTimeout(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}, env.production ? 1500 : 0);
