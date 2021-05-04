import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Patients',  icon:'content_paste', class: '' },
    { path: '/table-list1', title: 'Medicines',  icon:'content_paste', class: '' },
    { path: '/table-list2', title: 'Wards',  icon:'content_paste', class: '' },
    { path: '/table-list3', title: 'Equipments',  icon:'content_paste', class: '' },
    { path: '/table-list4', title: 'Care Giver',  icon:'content_paste', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },    
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },    
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
