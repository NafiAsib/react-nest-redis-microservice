import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(public taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.create(body.task);
  }
}
