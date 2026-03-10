import { Request, Response } from 'express';

export abstract class BaseController {
  protected success(res: Response, data: unknown, statusCode = 200): Response {
    return res.status(statusCode).json({
      success: true,
      data,
    });
  }

  protected error(
    res: Response,
    message: string,
    statusCode = 400
  ): Response {
    return res.status(statusCode).json({
      success: false,
      error: message,
    });
  }

  protected created(res: Response, data: unknown): Response {
    return this.success(res, data, 201);
  }

  protected notFound(res: Response, message = 'Resource not found'): Response {
    return this.error(res, message, 404);
  }
}
