import { useState } from "react"

function TaskForm({ task, onSubmit, onCancel }) {
  const [title, setTitle] = useState(task ? task.title : "")
  const [description, setDescription] = useState(task ? task.description : "")
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "")
  const [priority, setPriority] = useState(task ? task.priority : "Medium")
  const [completed, setCompleted] = useState(task ? task.completed : false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      id: task ? task.id : null,
      title,
      description,
      dueDate,
      priority,
      completed,
    })
    if (!task) {
      setTitle("")
      setDescription("")
      setDueDate("")
      setPriority("Medium")
      setCompleted(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#2a2a2a] rounded-lg p-6 space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm text-gray-400 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full bg-[#3a3a3a] border-0 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm text-gray-400 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-[#3a3a3a] border-0 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500"
          rows="3"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="dueDate" className="block text-sm text-gray-400 mb-1">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full bg-[#3a3a3a] border-0 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm text-gray-400 mb-1">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-[#3a3a3a] border-0 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm text-gray-400 mb-1">
            Status
          </label>
          <select
            id="status"
            value={completed ? "completed" : "incomplete"}
            onChange={(e) => setCompleted(e.target.value === "completed")}
            className="w-full bg-[#3a3a3a] border-0 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          {task ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  )
}

export default TaskForm

