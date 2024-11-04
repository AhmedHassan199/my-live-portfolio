import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleNavbar() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
