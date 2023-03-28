import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../../actions/dtos/create-item.dto';
import { UpdateItemDto } from '../../actions/dtos/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from '../../schemas/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}
  create(createItemDto: CreateItemDto) {
    const item = new this.itemModel({
      json: JSON.stringify(createItemDto.json),
      ip: createItemDto.ip,
      expirateAt: this.getDateExpirate(),
    });
    return item.save();
  }

  // findAll() {
  //   return `This action returns all items`;
  // }

  findOne(id: string) {
    return this.itemModel.findOne({ _id: id }, { json: 1 });
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          json: JSON.stringify(updateItemDto.json),
          expirateAt: this.getDateExpirate(),
        },
      },
      { new: true },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  private getDateExpirate() {
    const date = new Date();
    return date.setDate(date.getDate() + 1);
  }
}
