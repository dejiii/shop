import { Checkbox } from "custom-input-aslam";
import "custom-input-aslam/build/index.css";
import { LargeText } from "../../utils/styles";

function Range() {
  const handleCheck = (e) => {
    console.log(e.target.checked);
  };

  const ranges = [
    { id: 1, label: "Lower than $20", value: "people" },
    { id: 2, label: "$20 - $100", value: "premium" },
    { id: 3, label: "$100 - $200", value: "pets" },
    { id: 4, label: "More than $200", value: "food" },
  ];

  return (
    <div>
      <LargeText>Price Range</LargeText>
      {ranges.map((data) => (
        <div className="mt-4 range-texts" id={data.id}>
          <Checkbox
            label={data.label}
            value={data.values}
            color="black"
            onChange={(e) => handleCheck(e)}
          />
        </div>
      ))}
    </div>
  );
}

export default Range;
