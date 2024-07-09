import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {

  constructor( private prisma:DbService ){}

 async create(createUserInput: CreateUserInput) {
  const {name, age ,address}  = createUserInput;
    return await this.prisma.user.create({
      data:{
        name:name,
        age:age,
        address:{
          create:{
            street:address.street,
            city:address.city,
            state:address.state,
            postalCode:address.postalCode
          }
        }
      },include:{
        address:true
      }})
    }

 async findAll() {
    return await this.prisma.user.findMany({});
  }

 async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where:{
        id:id
      },include:{
        address:true
      }
    })
  }

async  update(id: number, updateUserInput: UpdateUserInput) {
  const {name,address,age} = updateUserInput;
    return this.prisma.user.update({
      where:{
        id:id
      },
      data:{
        name:name,
        age:age,
        address:{
          update:{
            state:address?.state,
            city:address?.city,
            street:address?.street,
            postalCode:address?.postalCode,
            
          }
        }
      },
      include:{
        address:true
      }
    })
  }

 async remove(id: number) {
    return this.prisma.user.delete({
      where:{
        id:id
      }
    })
  }
}
