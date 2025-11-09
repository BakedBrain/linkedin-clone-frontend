// frontend/src/components/Profile.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-large">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h1>{user?.name}</h1>
          <p className="profile-email">{user?.email}</p>
        </div>
        
        <div className="profile-section">
          <h2>About</h2>
          <p className="profile-bio">
            {user?.bio || 'No bio added yet. Update your profile to add a bio!'}
          </p>
        </div>

        <div className="profile-section">
          <h2>Account Information</h2>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Member since:</span>
            <span className="info-value">Recently joined</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-profile-btn">Edit Profile (Coming Soon)</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;