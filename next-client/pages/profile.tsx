"use client";
import '/app/globals.css';

import React from 'react';

interface UserProfileProps {
    email: string;
    fullName: string;
    profileImage?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, fullName, profileImage }) => {
    return (
        <div className="flex items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-4">
                {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                    <div className="flex justify-center items-center w-full h-full text-gray-500 text-xl font-bold">
                        Default Profile Icon
                    </div>
                )}
            </div>
            <div>
                <div className="text-xl font-bold">{fullName}</div>
                <div className="text-gray-500">{email}</div>
            </div>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">User Profiles</h1>
            <UserProfile
                email="user@example.com"
                fullName="John Doe"
                profileImage="/path/to/profile-image.jpg"
            />
        </div>
    );
};

export default ProfilePage;
