import { NextResponse } from 'next/server';
import taskController from '@/src/controllers/tasks/tasksController';
import { Task } from '@prisma/client';
import { randomUUID } from 'crypto';

export async function GET() {
  let taskList: Task[] = [];

  try {
    taskList = await taskController.getListAsync();
    return NextResponse.json(taskList);
  } catch {
    return NextResponse.error();
  }
}

export async function POST() {
  let createdTask: Task = {
    id: randomUUID(),
    title: 'New seed task',
    description: 'We have to create a useless seed task',
    userId: '286b3554-2fb7-48c5-b2b5-731f934fc32d',
  };

  try {
    await taskController.createAsync(createdTask);
    return NextResponse.json(createdTask);
  } catch {
    return NextResponse.json(NextResponse.error());
  }
}
