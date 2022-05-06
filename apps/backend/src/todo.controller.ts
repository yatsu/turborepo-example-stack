import { Controller, Get } from '@nestjs/common';
import { ToDo, ToDoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: ToDoService) {}

  @Get('api/todos')
  todos(): ToDo[] {
    return this.todoService.todos();
  }
}
