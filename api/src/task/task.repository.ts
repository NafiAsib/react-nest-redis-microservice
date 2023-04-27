import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  tasks = [
    { id: 1, description: 'Task 11' },
    { id: 2, description: 'Task 22' },
    { id: 3, description: 'Task 32' },
  ];

  findAll() {
    return this.tasks;
  }

  create(task: string) {
    const id = Math.floor(Math.random() * 999);
    this.tasks.push({ id, description: task });
  }
}
