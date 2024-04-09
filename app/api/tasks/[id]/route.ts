import { NextResponse } from 'next/server';

interface Params {
  params: { id: string };
}

export function GET(request: Request, { params }: Params) {
  return NextResponse.json('Getting task ' + params.id);
}

export function PUT(request: Request, { params }: Params) {
  return NextResponse.json('Updating task ' + params.id);
}

export function DELETE(request: Request, { params }: Params) {
  return NextResponse.json('Deleting task ' + params.id);
}
