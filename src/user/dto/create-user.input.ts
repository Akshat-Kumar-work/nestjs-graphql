import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  postalCode: string;
}

@InputType()
export class CreateUserInput {

  @Field()
  name:string;

  @Field()
  age:string;

  @Field(()=>CreateAddressInput)
  address:CreateAddressInput
}
