/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DriverWhereInput } from "./DriverWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DriverOrderByInput } from "./DriverOrderByInput";

@ArgsType()
class DriverFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DriverWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DriverWhereInput, { nullable: true })
  @Type(() => DriverWhereInput)
  where?: DriverWhereInput;

  @ApiProperty({
    required: false,
    type: [DriverOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DriverOrderByInput], { nullable: true })
  @Type(() => DriverOrderByInput)
  orderBy?: Array<DriverOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DriverFindManyArgs as DriverFindManyArgs };
