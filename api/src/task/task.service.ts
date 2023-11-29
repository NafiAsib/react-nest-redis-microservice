import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(public taskRepo: TaskRepository) {}

  findAll() {
    return this.taskRepo.findAll();
  }

  create(task: string) {
    return this.taskRepo.create(task);
  }
}
