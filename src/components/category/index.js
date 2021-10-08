import { Checkbox } from "custom-input-aslam";
import "custom-input-aslam/build/index.css";
import { LargeText } from "../../utils/styles";

const Category = () => {
  const handleCheck = (e) => {
    console.log(e.target.checked);
  };

  const categories = [
    { id: 1, label: "People", value: "people" },
    { id: 2, label: "Premium", value: "premium" },
    { id: 3, label: "Pets", value: "pets" },
    { id: 4, label: "Food", value: "food" },
    { id: 5, label: "Landmarks", value: "landmarks" },
    { id: 6, label: "Cities", value: "cities" },
    { id: 7, label: "Nature", value: "nature" },
  ];

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
              onChange={(e) => handleCheck(e)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
