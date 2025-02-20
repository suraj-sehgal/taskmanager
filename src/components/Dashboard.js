import TaskList from "./TaskList"

function Dashboard({ tasks, onEditTask, onDeleteTask, activeTab }) {
  const now = new Date()
  const upcomingTasks = tasks.filter((task) => new Date(task.dueDate) > now && !task.completed)
  const overdueTasks = tasks.filter((task) => new Date(task.dueDate) < now && !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  const renderActiveSection = () => {
    switch (activeTab) {
      case "upcoming":
        return (
          <div className="w-full">
            <TaskList tasks={upcomingTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        )
      case "overdue":
        return (
          <div className="w-full">
            <TaskList tasks={overdueTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        )
      case "completed":
        return (
          <div className="w-full">
            <TaskList tasks={completedTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        )
      default:
        return null
    }
  }

  return <div className="w-full">{renderActiveSection()}</div>
}

export default Dashboard

