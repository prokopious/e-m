import { useState } from "react";

import RoseCard from "./RoseCard";

function RosesPage({ products }) {
  return (
    <div id="products" className="container mx-auto px-6">
      <h3 className="text-white text-2xl font-medium">Products</h3>
      <span className="mt-3 text-sm text-gray-500"></span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <RoseCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default RosesPage;