export interface Menu {
    path?: string;
    title: string;
    icon?: string;
    open?: boolean;
    selected?: boolean;
    children?: Menu[];
    isNewLink?: boolean;
    isButton?:boolean;
}