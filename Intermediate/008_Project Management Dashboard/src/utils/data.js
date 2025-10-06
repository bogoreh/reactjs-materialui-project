export const initialTasks = {
  todo: [
    {
      id: '1',
      title: 'Design Homepage',
      description: 'Create wireframes and mockups for the homepage',
      priority: 'high',
      assignee: 'John Doe',
      dueDate: '2024-02-15',
      tags: ['design', 'ui/ux'],
    },
    {
      id: '2',
      title: 'Research Competitors',
      description: 'Analyze competitor products and features',
      priority: 'medium',
      assignee: 'Jane Smith',
      dueDate: '2024-02-20',
      tags: ['research'],
    },
  ],
  inProgress: [
    {
      id: '3',
      title: 'Develop Auth System',
      description: 'Implement user authentication and authorization',
      priority: 'high',
      assignee: 'Mike Johnson',
      dueDate: '2024-02-10',
      tags: ['development', 'backend'],
    },
  ],
  review: [
    {
      id: '4',
      title: 'Code Review API',
      description: 'Review and test the new REST API endpoints',
      priority: 'medium',
      assignee: 'Sarah Wilson',
      dueDate: '2024-02-12',
      tags: ['review', 'backend'],
    },
  ],
  done: [
    {
      id: '5',
      title: 'Setup Project',
      description: 'Initialize project structure and dependencies',
      priority: 'low',
      assignee: 'John Doe',
      dueDate: '2024-02-01',
      tags: ['setup'],
    },
  ],
};

export const chartData = {
  tasksByStatus: {
    labels: ['To Do', 'In Progress', 'Review', 'Done'],
    data: [2, 1, 1, 1],
    backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'],
  },
  tasksByPriority: {
    labels: ['High', 'Medium', 'Low'],
    data: [2, 2, 1],
    backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
  },
};