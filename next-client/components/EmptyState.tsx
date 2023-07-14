import React, { FC } from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

const EmptyState: FC<EmptyStateProps> = ({ title, description, icon }) => {
  return (
    <div className="text-center mt-10">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">{icon}</div>
    </div>
  );
};

export default EmptyState;
