import React, { FC } from 'react';
import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
  completeTask: (taskNameDelete: string) => void; // Type for the completeTask function
}

const TodoTask: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.Deadline} days</span> {/* Use the primitive number here */}
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button> {/* Correctly call the completeTask function */}
    </div>
  );
};

export default TodoTask;




