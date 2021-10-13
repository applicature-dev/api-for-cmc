import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDTO{

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    role: string;
}