import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  tasks = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  findAll() {
    return this.tasks;
  }

  create(task: string) {
    const id = Math.floor(Math.random() * 999);
    this.tasks.push({ id, description: task });
  }
}
