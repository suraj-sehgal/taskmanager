import TaskItem from "./TaskItem"

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <div className="text-center py-8 text-gray-400">No tasks found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  )
}

export default TaskList

