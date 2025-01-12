import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SeaFood from './foodTypes/SeaFood';
import Kottu from './foodTypes/Kottu';
import Rice from './foodTypes/Rice';
import { motion, AnimatePresence } from 'framer-motion';

const foodTabs = [
  { id: 'sea-food', label: 'Seafood' },
  { id: 'rice', label: 'Rice' },
  { id: 'kottu', label: 'Kottu' },
  { id: 'noodles', label: 'Noodles' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'soup', label: 'Soup' },
  { id: 'salad', label: 'Salad' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'desserts', label: 'Desserts' },
];

const FoodSection = () => {
  const [foodItem, setFoodItem] = useState('sea-food');

  const renderFoodComponent = () => {
    switch (foodItem) {
      case 'sea-food':
        return <SeaFood />;
      case 'kottu':
        return <Kottu />;
      case 'rice':
        return <Rice />;
      default:
        return null;
    }
  };

  return (
    <div id="menu-section" className="sm:p-10 p-5">
      <div className="p-3 flex justify-between items-center bg-[#034137] rounded-xl w-fit gap-32">
        <h1 className="font-poppins font-bold text-white text-[18px]">Food</h1>
        <FaArrowRight className="rotate-90 text-white" />
      </div>

      {/* Tab Navigation */}
      <nav className="mt-10 border-solid border-b-2 border-[#052C2F]">
        <ul className="flex no-scrollbar overflow-y-auto gap-5 pb-4">
          {foodTabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setFoodItem(tab.id)}
              className="relative"
            >
              <button
                className={`font-poppins cursor-pointer ${
                  foodItem === tab.id
                    ? 'font-extrabold text-[#000]'
                    : 'font-medium text-[#000]'
                } text-[18px]`}
              >
                {tab.label}
              </button>
              {foodItem === tab.id && (
                <motion.div
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#034137]"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={foodItem}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderFoodComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FoodSection;
