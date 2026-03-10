import { Request, Response } from 'express';
import { AppDataSource } from '../../infrastructure/config/database';
import { BaseController } from './BaseController';

export class HealthController extends BaseController {
  async check(req: Request, res: Response): Promise<Response> {
    try {
      await AppDataSource.query('SELECT 1');
      return this.success(res, {
        status: 'ok',
        database: 'connected',
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      return this.error(res, 'Database connection failed', 500);
    }
  }
}
