import { Task } from '@prisma/client';
import tasksController from '@/src/controllers/tasks/tasksController';
import { NextApiRequest, NextApiResponse } from 'next';
import { error } from 'console';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    return res.status(403).json('Unauthorized method');
  }

  let updatedTask = req.body;
  let taskId = updatedTask.id;

  try {
    await tasksController
      .updateAsync(taskId, updatedTask)
      .then((task: Task) => {
        if (!task) return;
        return res
          .status(201)
          .json('Updated task: ' + JSON.stringify(task.title));
      });
  } catch (e) {
    return res.status(500).json(e);
  }
}
