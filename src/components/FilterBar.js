function FilterBar({ filterPriority, setFilterPriority, filterStatus, setFilterStatus }) {
    return (
      <div className="flex gap-4">
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="bg-[#2a2a2a] border-0 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-[#2a2a2a] border-0 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="Incompleted">Incompleted</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    )
  }
  
  export default FilterBar
  
  