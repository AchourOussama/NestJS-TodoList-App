import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
    todos: Todo[] = []; 
   
    getTodoList() : Todo[] {
        return this.todos

    }

    getTodoById(id): Todo {
        const todo=this.todos.find((actualTodo)=>actualTodo.id== +id)
        if (!todo){
            console.log(id)
            throw new NotFoundException(`Todo with ID ${id} is not found`)
        }
        return todo
    }

    addTodoById(id,todo:Todo):Todo {
        if(!id){
            return this.addTodo(todo)
         }
        todo.id= +id;
        todo.content="hello";
        
        this.todos.push(todo)
        return todo ; 
    }

    addTodo(todo : Todo):Todo {
        if (this.todos.length) {
            let prev_id=this.todos[this.todos.length - 1].id;
            todo.id = prev_id + 1;

            
        } 
        else {
            todo.id=1;
        }
        todo.content="hello";
        
        this.todos.push(todo)
        return todo ; 
    }

    updateTodoById(id,new_todo : Partial<Todo>): Todo{
        const todo = this.getTodoById(id) ;
        for (  const key of Object.keys(todo) ){
            todo[key] = new_todo[key]? new_todo[key] :todo[key] ; 
        }
        return todo ; 
        
    }

    removeTodoList(){
        if (! this.todos.length){
           return {
                message : "List is already empty"
           }
        }
        else{
            this.todos=[]
        }

    }

    removeTodoByid(id){
        const index = this.todos.findIndex((todo)=>todo.id === +id);
        if (index >= 0){
            this.todos.splice(index,1)  
        }
        else{
            throw new NotFoundException(`Todo with ID ${id} does not exist`)
        }
        return {
            message: `Todo with ID ${id} has been deleted`
        }

    }

}
