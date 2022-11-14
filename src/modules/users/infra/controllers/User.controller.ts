import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "../../domain/User";

@ApiTags('users')
@Controller('users')
export class UserController {
    
     @Get('/')
    getUsers(): Array<User> | void {
        // Imaginary call to the repo logic to accedd to the db.
    }   

    @Get(':id')
    getUsersByID(@Param('id') id: string): string {
        return 'List of users';
    }  
}