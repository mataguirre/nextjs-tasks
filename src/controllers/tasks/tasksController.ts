import prisma from '@/app/libs/db';
import { Prisma } from '@prisma/client';

const _tasksRepository = prisma.task;

const tasksController = {
  getListAsync: async () => {
    return await _tasksRepository.findMany();
  },
  createAsync: async (newTask: Prisma.TaskCreateInput) => {
    return await _tasksRepository.create({
      data: newTask,
    });
  },
  getAsync: async (taskId: string) => {
    return await _tasksRepository.findFirst({
      where: {
        id: taskId,
      },
    });
  },
  deleteAsync: async (taskId: string) => {
    return await _tasksRepository.delete({
      where: {
        id: taskId,
      },
    });
  },
  updateAsync: async (taskId: string, updatedTask: Prisma.TaskUpdateInput) => {
    return await _tasksRepository.update({
      data: updatedTask,
      where: {
        id: taskId.toString(),
      },
    });
  },
};

export default tasksController;
