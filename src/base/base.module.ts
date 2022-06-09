import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseService } from './base.service';
import { BaseEntity, BaseEntitySchema } from './entities/base.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: BaseEntity.name, schema: BaseEntitySchema }])],
  providers: [],
  exports: [BaseService]
})
export class BaseModule {}
