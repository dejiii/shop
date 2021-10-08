import { useEffect, useRef, useState } from "react";
import { Checkbox } from "custom-input-aslam";
import "custom-input-aslam/build/index.css";
import { LargeText } from "../../utils/styles";

const Category = ({ setTotalProducts, products }) => {
  const [checkedCategories, setCheckedCategories] = useState([]);

  // const masterProducts =
  const isFirstRender = useRef(true);

  const categories = [
    { id: 1, label: "People", value: "people" },
    { id: 2, label: "Premium", value: "premium" },
    { id: 3, label: "Pets", value: "pets" },
    { id: 4, label: "Food", value: "food" },
    { id: 5, label: "Landmarks", value: "landmarks" },
    { id: 6, label: "Cities", value: "cities" },
    { id: 7, label: "Nature", value: "nature" },
  ];
  const handleAddCategory = () => {
    setTotalProducts((prevState) => {
      return prevState.filter((product) => {
        return checkedCategories.includes(product.category);
      });
    });
    // checkedCategories.forEach((category) => {
    //   const y = products.filter((product) => product.category === category);
    //   console.log("y", y);
    //   // x = [...y];
    // });
    // setTotalProducts(x);
    // // setTotalProducts(x);
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      handleAddCategory();
    }
    if (isFirstRender.current) isFirstRender.current = false;
  }, [checkedCategories]);

  return (
    <div>
      <LargeText>Category</LargeText>
      {categories.map((data) => {
        const { id, label, value } = data;
        return (
          <div key={id} className="mt-4">
            <Checkbox
              label={label}
              value={value}
              color="black"
              onChange={(e) =>
                setCheckedCategories((prevState) => [
                  ...prevState,
                  e.target.value,
                ])
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
