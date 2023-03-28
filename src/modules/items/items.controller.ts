import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { ItemsService } from './items.service';
import { CreateItemDto } from '../../actions/dtos/create-item.dto';
import { UpdateItemDto } from '../../actions/dtos/update-item.dto';

@Controller({
  version: '1',
  path: 'items',
})
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  // @Get()
  // findAll() {
  //   return this.itemsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
