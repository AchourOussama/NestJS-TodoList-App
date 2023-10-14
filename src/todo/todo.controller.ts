import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { todo } from 'node:test';
import { TodoService } from './todo.service';
import { retry } from 'rxjs';
@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}
    

    @Get("/get")
    getTodoList() : Todo[] {
        return this.todoService.getTodoList()

    }

    @Get("/get/:id")
    getTodoById(
        @Param('id') id
    ): Todo {
    
        return this.todoService.getTodoById(id)
    }

    @Post("/add/:id")
    addTodoById(
        @Body() todo : Todo,
        @Param('id') id  
    ):Todo {

        return this.todoService.addTodoById(id,todo) ; 
    }
    
    @Post("/add")
    addTodo(
        @Body() todo : Todo
    ):Todo {
        return this.todoService.addTodo(todo) ; 
    }

    @Delete("/remove")
    removeTodoList(){
        return this.todoService.removeTodoList()

    }

    @Delete("/remove/:id")
    removeTodoByid(
        @Param("id") id
    ){
        return  this.todoService.removeTodoByid(id)

    }
    @Put("update/:id")
    updateTodoById(
        @Param("id") id,
        @Body() new_todo : Partial<Todo>
        ){
        return this.todoService.updateTodoById(id,new_todo) ;   
    }
    
}
