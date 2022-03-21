import { InjectionToken } from "@angular/core";
import { Menu } from "../interfaces/menu.model";

export const MENU_TOKEN = new InjectionToken<Menu[]>(
    'menu-token',
    {
    providedIn: 'root',
    factory(): Menu[] {
        return menuNav;
    }
}
)


const menuNav: Menu[] = [
    {
        title: 'newsfeed',
        icon: 'notification',
        open: false,
        selected: false,
        path: '/default/newsfeed',
        children: [],
        isNewLink: false,
        isButton:true,
    },
    {
        title: 'Profile',
        icon: 'user',
        open: false,
        selected: false,
        path: '/default/profile',
        children: [],
        isNewLink: false,
        isButton:false,
    },
    {
        title: 'Admin',
        icon: 'tool',
        open: false,
        selected: false,
        path: '/default/admin',
        children: [],
        isNewLink: false,
        isButton:false,
    },
    {
        title: 'Setting',
        icon: 'setting',
        open: false,
        selected: false,
        path: '/default/setting',
        children: [],
        isNewLink: false,
        isButton:false,
    },
]