import React from "react";

const Box = ({ product, hideBox }) => {
  const handleBox = () => {
    hideBox(product.id);
  };
  return (
    <div onClick={handleBox} className="bg-gray-200 p-3 flex flex-col gap-3 cursor-pointer">
      <p className="border-b border-slate-800 pb-3">{product.name}</p>
      <p className={`${product.hide && "hidden"}`}>$ {product.price}</p>
    </div>
  );
};

export default Box;
