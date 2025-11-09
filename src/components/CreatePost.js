// frontend/src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const API_URL = 'http://localhost:5000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Post content cannot be empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${API_URL}/posts`, {
        content,
        image
      });
      
      onPostCreated(res.data);
      setContent('');
      setImage('');
    } catch (error) {
      setError('Failed to create post');
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-card">
      <div className="create-post-header">
        <div className="user-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
        <div className="user-info">
          <h3>{user?.name}</h3>
        </div>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <textarea
          className="post-textarea"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
        />
        
        <input
          type="text"
          className="image-input"
          placeholder="Image URL "
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        
        <button type="submit" className="post-button" disabled={loading}>
          {loading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;