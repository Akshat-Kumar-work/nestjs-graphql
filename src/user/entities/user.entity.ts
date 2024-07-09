import { ObjectType, Field, Int } from '@nestjs/graphql';



@ObjectType()
export class Address {
  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  postalCode: string;
}

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name:string;

  @Field()
  age:string;

  @Field(()=>Address)
  address:Address;

}