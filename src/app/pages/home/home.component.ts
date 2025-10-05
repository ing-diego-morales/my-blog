import {
  Component,
  Inject,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  rachaDuolingo: number = 0;

  ngOnInit() {
    const hoy = new Date();
    const fechaUTC = new Date(
      Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
    );

    const fechaInicio = new Date(Date.UTC(2022, 4, 19));

    const diferenciaMs = fechaUTC.getTime() - fechaInicio.getTime();
    const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    this.rachaDuolingo = diferenciaDias;
  }

  currentImageIndex = 0;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      });

      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));

      this.showImage(this.currentImageIndex);
    }
  }

  showImage(index: number) {
    const images = document.querySelectorAll(
      '.carousel-image'
    ) as NodeListOf<HTMLImageElement>;
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  nextImage() {
    const images = document.querySelectorAll('.carousel-image');
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
    this.showImage(this.currentImageIndex);
  }

  prevImage() {
    const images = document.querySelectorAll('.carousel-image');
    this.currentImageIndex =
      (this.currentImageIndex - 1 + images.length) % images.length;
    this.showImage(this.currentImageIndex);
  }
}
