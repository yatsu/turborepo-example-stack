import { Injectable } from '@nestjs/common';

export type ToDo = {
  id: number;
  todo: string;
};

@Injectable()
export class ToDoService {
  todos(): ToDo[] {
    return [{ id: 1, todo: 'foo' }];
  }
}
