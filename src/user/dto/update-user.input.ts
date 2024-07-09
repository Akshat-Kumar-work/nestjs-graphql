import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class UpdateAddressInput {
  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  postalCode?: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  age?: string;

  @Field(() => UpdateAddressInput, { nullable: true })
  address?: UpdateAddressInput;
}