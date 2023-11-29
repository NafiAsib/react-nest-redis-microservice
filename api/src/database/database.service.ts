import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  executeQuery(query: string, values: any[] = []) {
    this.logger.debug(`Executing query: ${query} (${values})`);

    return this.pool
      .query(query, values)
      .then((result: QueryResult) => {
        this.logger.debug(`Executed query, result size ${result.rows.length}`);
        return result.rows;
      })
      .catch((err: Error) => console.log(err.message));
  }
}
