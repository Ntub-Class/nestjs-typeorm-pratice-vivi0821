import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUser() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return 'OK';
    }

    @Post()
    postUser(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'OK';
    }
}

