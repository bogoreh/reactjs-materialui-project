// utils/mockData.js
export const generatePosts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `post-${Date.now()}-${i}`,
    user: {
      id: `user-${i}`,
      name: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'Alex Chen'][i % 5],
      username: ['@johndoe', '@janesmith', '@mikej', '@sarahw', '@alexc'][i % 5],
      avatar: `/static/images/avatar/${(i % 5) + 1}.jpg`
    },
    content: `This is post content #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: i % 3 === 0 ? `/static/images/post-${(i % 3) + 1}.jpg` : null,
    timestamp: `${i + 1}h ago`,
    location: i % 2 === 0 ? 'New York, NY' : 'San Francisco, CA',
    likesCount: Math.floor(Math.random() * 100) + 10,
    isLiked: Math.random() > 0.7,
    comments: Array.from({ length: Math.floor(Math.random() * 5) }, (_, j) => ({
      id: `comment-${i}-${j}`,
      user: {
        id: `comment-user-${j}`,
        name: ['Commenter One', 'Commenter Two', 'Commenter Three'][j % 3],
        avatar: `/static/images/avatar/${(j % 3) + 1}.jpg`
      },
      content: `This is comment #${j + 1} on post #${i + 1}`,
      timestamp: `${j + 1}m ago`,
      likes: Math.floor(Math.random() * 10),
      isLiked: Math.random() > 0.5
    }))
  }));
};

export const generateNewPost = () => {
  return {
    id: `post-new-${Date.now()}`,
    user: {
      id: 'user-new',
      name: 'New User',
      username: '@newuser',
      avatar: '/static/images/avatar/6.jpg'
    },
    content: 'Just posted something new! Check out this amazing content! 🚀',
    image: null,
    timestamp: 'Just now',
    location: 'Online',
    likesCount: 0,
    isLiked: false,
    comments: []
  };
};