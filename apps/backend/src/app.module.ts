import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo.controller';
import { ToDoService } from './todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, ToDoService],
})
export class AppModule {}
