import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import { getTasks, saveTasks } from "./utils/localStorage";
import {
  UserCircle,
  Plus,
} from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    saveTasks([...tasks, { ...newTask, id: Date.now() }]);
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setShowTaskForm(false);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPriority =
      filterPriority === "all" || task.priority === filterPriority;
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && task.completed) ||
      (filterStatus === "Incompleted" && !task.completed);
    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#1a1a1a]">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-8">
            <UserCircle className="w-12 h-12" />
            <div>
              <h2 className="font-semibold">Task Manager</h2>
              <p className="text-sm text-gray-400">Suraj Sehgal</p>
            </div>
          </div>
          <button
            onClick={() => setShowTaskForm(true)}
            className="p-2 bg-[#2a2a2a] rounded-full hover:bg-[#3a3a3a] text-white"
          >
            <Plus size={24} />
          </button>
        </div>

        {showTaskForm && (
          <div className="mb-8">
            <TaskForm
              onSubmit={addTask}
              onCancel={() => setShowTaskForm(false)}
            />
          </div>
        )}

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
        <div className="mb-6">
          <div className="flex space-x-4 border-b border-gray-700">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Tasks
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "overdue"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("overdue")}
            >
              Overdue Tasks
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "completed"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Tasks
            </button>
          </div>
        </div>

        <Dashboard
          tasks={filteredTasks}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}

export default App;
