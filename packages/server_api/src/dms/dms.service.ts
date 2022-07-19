import { Injectable } from '@nestjs/common';

@Injectable()
export class DmsService {
  getChat() {
    return '0';
  }

  postChat() {
    return '1';
  }
}
