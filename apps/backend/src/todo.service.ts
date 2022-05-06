import { Injectable } from '@nestjs/common';

export type ToDo = {
  todo: string;
};

@Injectable()
export class ToDoService {
  todos(): ToDo[] {
    return [{ todo: 'foo' }];
  }
}
