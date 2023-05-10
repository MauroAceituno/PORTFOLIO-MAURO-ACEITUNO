import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
