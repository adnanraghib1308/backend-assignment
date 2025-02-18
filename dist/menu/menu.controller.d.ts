import { MenuService } from './menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    getMenuOptions(): Promise<{
        id: string;
        name: string;
    }[]>;
    getMenuTree(menuId: string): Promise<any>;
    updateMenuItem(payload: {
        id: string;
        name: string;
    }): Promise<{
        id: string;
        name: string;
        menuId: string;
        parentId: string | null;
    }>;
    createMenuItem(payload: {
        parentId: string;
        name: string;
    }): Promise<{
        id: string;
        name: string;
        menuId: string;
        parentId: string | null;
    }>;
}
