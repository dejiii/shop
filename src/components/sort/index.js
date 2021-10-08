import { BiSortAlt2 } from "react-icons/bi";

function Sort() {
  return (
    <div>
      <span>
        <BiSortAlt2 style={{ fontSize: "20" }} />
      </span>
      <span style={{ color: "#9b9b9b" }}>Sort</span>
      <span className="px-2">
        <select>
          <option value="volvo">Price</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </span>
    </div>
  );
}

export default Sort;
