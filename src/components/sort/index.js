/* eslint-disable no-self-compare */
import { useEffect, useRef, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";

function Sort({ setTotalProducts }) {
  const [sortValue, setSortValue] = useState("");
  const [ascending, setAscending] = useState(true);
  const isFirstRender = useRef(true);

  const handleSort = () => {
    if (sortValue === "price") {
      setTotalProducts((prevState) => {
        const sortProducts = prevState.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        return [...sortProducts];
      });
    } else {
      setTotalProducts((prevState) => {
        const sortProducts = prevState.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return [...sortProducts];
      });
    }
  };

  const handleOrder = () => {
    setTotalProducts((prevState) => {
      const x = prevState.reverse();
      return [...x];
    });
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      handleOrder();
    }
  }, [ascending]);

  useEffect(() => {
    if (!isFirstRender.current) {
      handleSort();
    }
    if (isFirstRender.current) isFirstRender.current = false;
  }, [sortValue]);

  return (
    <div>
      <span>
        <BiSortAlt2
          style={{ fontSize: "20" }}
          onClick={() => setAscending((prev) => !prev)}
        />
      </span>
      <span style={{ color: "#9b9b9b" }}>Sort</span>
      <span className="px-2">
        <select onChange={(e) => setSortValue(e.target.value)}>
          <option value=""></option>
          <option value="price">Price</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </span>
    </div>
  );
}

export default Sort;
