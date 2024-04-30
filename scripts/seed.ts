import tasksController from '@/src/controllers/tasks/tasksController';
import { Task } from '@prisma/client';
import { randomUUID } from 'crypto';

async function CreateTaskAsync() {
  let newTask: Task = {
    id: randomUUID(),
    title: 'Seed task',
    description: 'Seeder task to example',
    userId: 'asdasd-213123-asedasd-123123-asdasdasd',
  };

  await tasksController.createAsync(newTask);
}
