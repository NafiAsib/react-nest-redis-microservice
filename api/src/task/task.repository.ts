import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TaskRepository {
  constructor(private databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.executeQuery('SELECT * FROM tasks');
  }

  create(task: string) {
    const queryText = 'INSERT INTO tasks(task) VALUES($1)';
    const values = [task];
    return this.databaseService.executeQuery(queryText, values);
  }
}
