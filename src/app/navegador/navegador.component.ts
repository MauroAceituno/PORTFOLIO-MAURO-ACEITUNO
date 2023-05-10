import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],
})
export class NavegadorComponent {
  navHamburger = false;
  displayText = false;

  constructor(private router: Router) {}

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  onClickHamburger() {
    if (this.navHamburger) {
      this.navHamburger = false;
      this.displayText = false;
    } else {
      this.navHamburger = true;
      setTimeout(() => {
        this.displayText = true;
      }, 100);
    }
  }

  onClickHome() {
    this.navHamburger = false;
    this.displayText = false;
  }

  getCurrentUrl(): string {
    const currentUrl = this.router.url;
    return currentUrl;
  }
}
