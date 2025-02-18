import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async getMenuOptions() {
    return this.prisma.menu.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async getMenuTree(menuId: string) {
    const menuItems = await this.prisma.menuItem.findMany({
      where: {
        menuId,
      },
      include: {
        children: true,
      },
    });

    // Build tree structure starting from root items (items with no parent)
    const rootItems = menuItems.filter(item => !item.parentId);
    const buildTree = (items: any[]) => {
      return items.map(item => ({
        ...item,
        children: buildTree(menuItems.filter(child => child.parentId === item.id)),
      }));
    };

    return buildTree(rootItems);
  }

  async updateMenuItem(id: string, name: string) {
    return this.prisma.menuItem.update({
      where: { id },
      data: { name },
    });
  }

  async createMenuItem(parentId: string, name: string) {
    const parent = await this.prisma.menuItem.findUnique({
      where: { id: parentId },
      include: { menu: true },
    });

    return this.prisma.menuItem.create({
      data: {
        name,
        parentId,
        menuId: parent.menuId,
      },
    });
  }
}