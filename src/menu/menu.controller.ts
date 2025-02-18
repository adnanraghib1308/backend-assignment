import { Controller, Get, Post, Put, Query, Body } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('options')
  getMenuOptions() {
    return this.menuService.getMenuOptions();
  }

  @Get('menu')
  getMenuTree(@Query('menuId') menuId: string) {
    return this.menuService.getMenuTree(menuId);
  }

  @Put('menu')
  updateMenuItem(@Body() payload: { id: string; name: string }) {
    return this.menuService.updateMenuItem(payload.id, payload.name);
  }

  @Post('menu')
  createMenuItem(@Body() payload: { parentId: string; name: string }) {
    return this.menuService.createMenuItem(payload.parentId, payload.name);
  }
}