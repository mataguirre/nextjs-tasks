import { Task } from '@prisma/client';
import tasksController from '@/src/controllers/tasks/tasksController';
import { NextApiRequest, NextApiResponse } from 'next';
import { error } from 'console';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(403).json('Unauthorized method');
  }

  let createdTask = req.body;

  try {
    await tasksController.createAsync(createdTask).then((task: Task) => {
      if (!task) return;
      return res
        .status(201)
        .json('Created task: ' + JSON.stringify(task.title));
    });
  } catch (e) {
    return res.status(500).json(e);
  }
}
