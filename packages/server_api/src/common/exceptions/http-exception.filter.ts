import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | { message: any; statusCode: number }
      | { error: string; statusCode: number; message: string | string[] };

    response.status(status).json({
      success: false,
      code: status,
      data: error.message,
    });
  }
}
