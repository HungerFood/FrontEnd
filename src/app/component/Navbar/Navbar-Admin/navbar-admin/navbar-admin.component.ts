import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setupMenuClickHandler();
  }

  private setupMenuClickHandler(): void {
    const menuItems = this.elementRef.nativeElement.querySelectorAll(".menu > ul > li");
    menuItems.forEach((menuItem: HTMLElement) => {
      menuItem.addEventListener('click', (event) => {
        const clickedMenuItem = event.currentTarget as HTMLElement;
        this.handleMenuItemClick(clickedMenuItem);
      });
    });
  }

  private handleMenuItemClick(clickedMenuItem: HTMLElement): void {
    const parentElement = clickedMenuItem.parentElement;
    if (parentElement) {
      // Remove active class from already active items
      parentElement.querySelectorAll('.active').forEach(activeItem => {
        activeItem.classList.remove('active');
      });

      // Toggle active class for the clicked item
      clickedMenuItem.classList.toggle('active');

      // Toggle visibility of submenu
      const submenu = clickedMenuItem.querySelector('ul');
      if (submenu) {
        submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
      }

      // Close other submenus if any open
      parentElement.querySelectorAll('ul').forEach(submenu => {
        if (submenu !== clickedMenuItem.querySelector('ul')) {
          submenu.style.display = 'none';
        }
      });

      // Remove active class from submenu items
      parentElement.querySelectorAll('.active').forEach(activeItem => {
        activeItem.classList.remove('active');
      });
    }
  }
}
