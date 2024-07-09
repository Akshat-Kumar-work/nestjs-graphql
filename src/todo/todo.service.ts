import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TodoService {
  constructor( private prisma:DbService){};

 async create(createTodoInput: CreateTodoInput) {
    return await this.prisma.todo.create({
      data:{
        title:createTodoInput.title
      }
    })
  }

 async findAll() {
    return await this.prisma.todo.findMany({});
  }

async  findOne(id: number) {
    return await this.prisma.todo.findUnique({
      where:{
        id:id
      }
    })
  }

 async update(id: number, updateTodoInput: UpdateTodoInput) {
    return await this.prisma.todo.update({
      where:{
        id:id
      },
      data:{
        title:updateTodoInput.title
      }
    })
  }

async  remove(id: number) {
    return await this.prisma.todo.delete({
      where:{
        id:id
      }
    })
  }
}
