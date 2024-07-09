import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { DbService } from 'src/db/db.service';

@Module({
  providers: [TodoResolver, TodoService,DbService],
})
export class TodoModule {}
