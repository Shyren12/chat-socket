import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Post, Put, Query } from '@nestjs/common/decorators';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/all')
    getAll() {
        return this.userService.getAll();
    }

    @Get()
    getById(@Query('id') id: string) {
        console.log(id);
        return this.userService.getById(id);
    }

    @Post('create')
    getCreate(@Body() user: User) {
        return this.userService.getCreate(user);
    }


    @Delete()
    delete(@Query('id') id: string) {
        return this.userService.deleteById(id);
    }

    @Put('update')
    getUpdate(@Body() user: User, @Query('_id') _id: string) {
        return this.userService.updateById(_id, user);
    }
}
