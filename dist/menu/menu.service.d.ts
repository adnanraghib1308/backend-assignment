import { PrismaService } from '../prisma.service';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    getMenuOptions(): Promise<{
        id: string;
        name: string;
    }[]>;
    getMenuTree(menuId: string): Promise<any>;
    updateMenuItem(id: string, name: string): Promise<{
        id: string;
        name: string;
        menuId: string;
        parentId: string | null;
    }>;
    createMenuItem(parentId: string, name: string): Promise<{
        id: string;
        name: string;
        menuId: string;
        parentId: string | null;
    }>;
}
