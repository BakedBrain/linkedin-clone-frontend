// frontend/src/components/PostCard.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function PostCard({ post, onPostUpdated, onPostDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [editImage, setEditImage] = useState(post.image || '');
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const { user } = useAuth();

  const API_URL = 'http://localhost:5000/api';
  const isOwner = user?.id === post.user._id;

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString() + ' at ' + d.toLocaleTimeString();
  };

  const handleLike = async () => {
    try {
      const res = await axios.post(`${API_URL}/posts/${post._id}/like`);
      onPostUpdated(res.data);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${API_URL}/posts/${post._id}`, {
        content: editContent,
        image: editImage
      });
      onPostUpdated(res.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`${API_URL}/posts/${post._id}`);
        onPostDeleted(post._id);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const res = await axios.post(`${API_URL}/posts/${post._id}/comment`, {
        text: commentText
      });
      onPostUpdated(res.data);
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const isLiked = post.likes.includes(user?.id);

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-avatar">{post.user.name.charAt(0).toUpperCase()}</div>
        <div className="post-user-info">
          <h3>{post.user.name}</h3>
          <p className="post-time">{formatDate(post.createdAt)}</p>
        </div>
        {isOwner && !isEditing && (
          <div className="post-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="edit-form">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="edit-textarea"
          />
          <input
            type="text"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            placeholder="Image URL (optional)"
            className="edit-image-input"
          />
          <div className="edit-buttons">
            <button onClick={handleUpdate} className="save-btn">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="post-content">
            <p>{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="post-image" />
            )}
          </div>

          <div className="post-stats">
            <span>{post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}</span>
            <span>{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span>
          </div>

          <div className="post-buttons">
            <button 
              onClick={handleLike} 
              className={`action-btn ${isLiked ? 'liked' : ''}`}
            >
              👍 {isLiked ? 'Liked' : 'Like'}
            </button>
            <button 
              onClick={() => setShowComments(!showComments)} 
              className="action-btn"
            >
              💬 Comment
            </button>
          </div>

          {showComments && (
            <div className="comments-section">
              <form onSubmit={handleComment} className="comment-form">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="comment-input"
                />
                <button type="submit" className="comment-btn">Post</button>
              </form>

              <div className="comments-list">
                {post.comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <div className="comment-avatar">
                      {comment.user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="comment-content">
                      <strong>{comment.user.name}</strong>
                      <p>{comment.text}</p>
                      <span className="comment-time">{formatDate(comment.createdAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PostCard;