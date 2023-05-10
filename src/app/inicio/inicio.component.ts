import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
