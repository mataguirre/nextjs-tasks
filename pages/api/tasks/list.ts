import { Task } from '@prisma/client';
import tasksController from '@/src/controllers/tasks/tasksController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(403).json('Unauthorized method');
  }

  let taskList: Task[] = [];

  try {
    await tasksController.getListAsync().then((tasks: Task[]) => {
      if (!tasks) return;
      return res.status(201).json(tasks);
    });
  } catch (e) {
    return res.status(500).json(e);
  }
}
