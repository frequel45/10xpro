import React from 'react'

export default function AboutPage() {
  return (
    

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About This Application</h1>
      
      <p className="text-lg mb-4">
        This is a Next.js application with a primary focus on building robust CRUD (Create, Read, Update, Delete) functionalities. The app allows users to create new posts, read existing posts, update them, and delete posts when necessary. These features are built with scalability in mind, providing an efficient and seamless user experience.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>OAuth Authentication:</strong> Secure login through OAuth providers ensures that users can safely authenticate and manage their profiles with ease.
        </li>
        <li className="mb-2">
          <strong>Post Management:</strong> Users can create new posts, edit existing ones, or delete them, with full control over their content.
        </li>
        <li className="mb-2">
          <strong>Real-Time Updates:</strong> The application keeps content fresh, and updates are instantly reflected across the platform.
        </li>
        <li className="mb-2">
          <strong>Interactive User Experience:</strong> The app is designed with a user-friendly interface that makes it easy to navigate and interact with posts.
        </li>
        <li className="mb-2">
          <strong>Secure and Scalable:</strong> Built on top of Next.js, this application is highly performant, secure, and scalable for future improvements.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Contribute to the Platform</h2>
      <p className="text-lg mb-4">
        We encourage users to contribute interesting news and updates to the platform. Feel free to add new posts, share ideas, and enhance the content to keep the community engaged.
      </p>
      
      <p className="text-lg mb-4">
        This application is a constantly evolving project, and we are always looking for ways to improve. Stay tuned for future updates and new features!
      </p>
    </div>
  );
};



     
    
    
    
  );
}
