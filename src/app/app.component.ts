import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone) {
    this.initializeApp();
  }
  initializeApp() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      console.log('App oppened with an external URL');

      this.zone.run(() => {
        // bpop://action.com/tab2
        const domain = 'actions.com';

        const pathArray = event.url.split(domain); // separate the endpoint

        const appPath = pathArray.pop(); // Get only the endpoint
        if (appPath) {
          this.router.navigateByUrl(appPath);
        }
      });
    });
  }
}
