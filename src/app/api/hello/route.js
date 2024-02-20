import { NextResponse } from 'next/server';

export async function GET(request, complete) {
  // Your code logic here
  
  // Example response
  return NextResponse.json({ message: 'Hello World!' });
}
