import { useState } from "react"
import TaskForm from "./TaskForm"
import { Pencil, Trash2 } from "lucide-react"

function TaskItem({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <TaskForm
        task={task}
        onSubmit={(updatedTask) => {
          onEditTask(updatedTask)
          setIsEditing(false)
        }}
        onCancel={() => setIsEditing(false)}
      />
    )
  }

  return (
    <div className="bg-[#2a2a2a] rounded-lg p-6 space-y-4 min-h-[200px] flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{task.description}</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{new Date(task.dueDate).toLocaleDateString()}</span>
          <span className={`px-3 py-1 rounded-full text-sm ${task.completed ? "bg-green-600" : "bg-red-500"}`}>
            {task.completed ? "Completed" : "Incomplete"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Priority: {task.priority}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 hover:bg-[#3a3a3a] rounded-full text-gray-400 hover:text-white"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-2 hover:bg-[#3a3a3a] rounded-full text-gray-400 hover:text-white"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem

