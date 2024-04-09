'use client';

import { Task } from '@prisma/client';
import React, { useState, useEffect } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        return setTasks(data);
      })
      .catch((error) => {
        return console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="tasks-container">
      <h1 className="text-center">Tasks Manager</h1>
      <div className="tasks-content">
        {tasks.map((task: Task, index: number) => (
          <p key={index}>{task.title}</p>
        ))}
      </div>
    </div>
  );
}
