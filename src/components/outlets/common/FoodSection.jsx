import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import DummyFoodImg from '../../../assets/foods/seafoods/seafood1.png';
import SeaFood from './foodTypes/SeaFood';
import Kottu from './foodTypes/Kottu';
const FoodSection = () => {
  const [foodItem, setFoodItem] = useState('sea-food');
  return (
    <>
      <div id="menu-section" className="sm:p-10 p-5">
        <div className="p-3 flex justify-between items-center bg-[#034137] rounded-xl w-fit gap-32">
          <h1 className=" font-poppins font-bold text-[#FFF] text-[18px]">
            Food
          </h1>
          <FaArrowRight className="rotate-90 text-white " />
        </div>

        {/* food items */}
        <div className="flex no-scrollbar overflow-y-auto mt-10 gap-5 border-solid border-b-2 border-[#052C2F] pb-4">
          <div
            onClick={() => {
              setFoodItem('sea-food');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'sea-food'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Seafood
          </div>
          <div
            onClick={() => {
              setFoodItem('rice');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'rice'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Rice
          </div>
          <div
            onClick={() => {
              setFoodItem('kottu');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'kottu'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Kottu
          </div>
          <div
            onClick={() => {
              setFoodItem('noodles');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'noodles'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Noodles
          </div>
          <div
            onClick={() => {
              setFoodItem('pasta');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'pasta'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Pasta
          </div>
          <div
            onClick={() => {
              setFoodItem('pizza');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'pizza'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Pizza
          </div>
          <div
            onClick={() => {
              setFoodItem('burgers');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'burgers'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Burgers
          </div>
          <div
            onClick={() => {
              setFoodItem('sandwiches');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'sandwiches'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Sandwiches
          </div>
          <div
            onClick={() => {
              setFoodItem('soup');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'soup'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Soup
          </div>
          <div
            onClick={() => {
              setFoodItem('salad');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'salad'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Salad
          </div>
          <div
            onClick={() => {
              setFoodItem('mexican');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'mexican'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Mexican
          </div>
          <div
            onClick={() => {
              setFoodItem('desserts');
            }}
            className={`font-poppins cursor-pointer ${
              foodItem === 'desserts'
                ? 'font-extrabold text-[#000] text-[18px]'
                : 'font-medium text-[#000] text-[18px]'
            }`}
          >
            Desserts
          </div>
        </div>

        {/* food images section */}
        {foodItem === 'sea-food' && <SeaFood />}
        {foodItem === 'kottu' && <Kottu />}
      </div>
    </>
  );
};

export default FoodSection;
