import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from './animations';

const TimelineItem = ({ title, time, description, avatars }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <span className="ml-auto text-sm text-gray-500">{time}</span>
    </div>
    <p className="text-gray-600 ml-4">{description}</p>
    {avatars && (
      <div className="flex -space-x-2 mt-2 ml-4">
        {avatars.map((avatar, index) => (
          <img key={index} className="w-8 h-8 rounded-full border-2 border-white" src={avatar} alt="User avatar" />
        ))}
      </div>
    )}
  </div>
);

const TimelineCard = () => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-emerald-100"
      variants={cardVariants}
    >
      <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Timeline</h2>
      {/* <div className="space-y-4">
        <TimelineItem 
          title="All Hands Meeting" 
          time="10:00 PM" 
          description="Discuss about new partnership" 
        />
        <TimelineItem 
          title="New Project" 
          time="2:00 PM" 
          description="Kickoff meeting for the new project" 
          avatars={['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg']}
        />
        <TimelineItem 
          title="Team Lunch" 
          time="12:00 PM" 
          description="Monthly team bonding session" 
        />
      </div> */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
      >
        View All Messages
      </motion.button>
    </motion.div>
  );
};

export default TimelineCard;

