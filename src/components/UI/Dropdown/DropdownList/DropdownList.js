import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

import styles from "./DropdownList.module.scss";

function DropdownList({ data, value, onItemChange, onItemClick }) {
  return (
    <ul className={styles.dropdownlist}>
      {data.map(item => (
        <DropdownItem
          key={item.id}
          name={item.name}
          abbrev={item.abbrev}
          itemValue={value}
          id={item.id}
          itemChanged={onItemChange}
          itemClicked={onItemClick}
        />
      ))}
    </ul>
  );
}
export default DropdownList;
