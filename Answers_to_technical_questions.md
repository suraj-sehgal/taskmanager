# Answers to Technical Questions

## How long did you spend on the coding test?
I spent around 6-7 hours on the coding test.

## What was the most useful feature that was added to the latest version of your chosen language? 
The most useful features I added to the task management application were:

- **Filtering tasks** based on priority and completion status.
- **Tab navigation** for organizing tasks into upcoming, overdue, and completed categories.

### Code Snippet:
```javascript
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
```

### Navigation Implementation:
```javascript
const now = new Date();
const upcomingTasks = tasks.filter((task) => new Date(task.dueDate) > now && !task.completed);
const overdueTasks = tasks.filter((task) => new Date(task.dueDate) < now && !task.completed);
const completedTasks = tasks.filter((task) => task.completed);

const renderActiveSection = () => {
    switch (activeTab) {
      case "upcoming":
        return (
          <div className="w-full">
            <TaskList tasks={upcomingTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        );
      case "overdue":
        return (
          <div className="w-full">
            <TaskList tasks={overdueTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        );
      case "completed":
        return (
          <div className="w-full">
            <TaskList tasks={completedTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </div>
        );
      default:
        return null;
    }
};
```

## How would you track down a performance issue in production? Have you ever had to do this?
Tracking down a performance issue in production requires a structured approach. Here’s how I would handle it:

1. **Monitor Logs and Metrics**: Use tools like LogRocket, Sentry, or Datadog to track errors, slow queries, and response times.
2. **Profile API Requests**: Check API response times using Postman, Chrome DevTools, or server-side profiling tools like Node.js Performance Hooks.
3. **Database Optimization**: Analyze slow queries using MongoDB Compass or SQL EXPLAIN plans and add appropriate indexes.
4. **Memory and CPU Usage Analysis**: Monitor server resource utilization using PM2, New Relic, or AWS CloudWatch.
5. **Load Testing**: Use tools like Apache JMeter or k6 to simulate high traffic and identify bottlenecks.
6. **Code Profiling**: Use Chrome DevTools or React Profiler to identify slow components and unnecessary re-renders.

Yes, I have debugged performance issues in production before. For example, in a coworking space booking app, I identified slow API response times due to inefficient database queries and resolved the issue by adding indexes and optimizing query logic.

## If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would implement the following improvements:

1. **Real-time Synchronization**: Use WebSockets (Socket.io) to update tasks instantly across multiple devices.
2. **Recurring Tasks**: Allow users to set up tasks that repeat daily, weekly, or monthly.
3. **Drag and Drop Functionality**: Implement a Kanban-style interface using libraries like `react-beautiful-dnd`.
4. **Task Reminders & Notifications**: Integrate push notifications and email reminders using Firebase Cloud Messaging or Twilio.
5. **Dark Mode & Custom Themes**: Provide users with theme customization options for better UX.
6. **Offline Mode**: Use IndexedDB or local storage to allow users to manage tasks offline and sync when online.
7. **Collaboration & Sharing**: Allow users to assign tasks to others and track progress in shared workspaces.
8. **Integration with Calendar Apps**: Sync tasks with Google Calendar or Outlook for better task planning.
9. **AI-based Task Suggestions**: Use AI models to suggest deadlines, priorities, or categorize tasks based on past behavior.

These features would significantly enhance user experience, making the application more efficient and user-friendly.

