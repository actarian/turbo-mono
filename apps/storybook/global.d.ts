import { NextRequest as OriginalNextRequest } from 'next/server';

declare global {
  interface NextRequest extends OriginalNextRequest {
    query: any;
  }
}
