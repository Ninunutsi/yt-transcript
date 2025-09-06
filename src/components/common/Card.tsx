import React from "react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className }) => {
  return (
    <div
      className={`flex items-start space-x-4 p-4 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        className || ""
      }`}
    >
      {icon && <div className="text-blue-500">{icon}</div>}
      <div>
        <h3 className="font-semibold text-lg text-ghost_white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
