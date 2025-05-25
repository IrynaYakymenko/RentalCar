import React from "react";
import IconTextItem from "./IconTextItem";
import s from "./ListSection.module.css";

const ListSection = ({ title, items }) => {
  return (
    <div className={s.listSection}>
      <h3 className={s.listHeading}>{title}</h3>
      <ul className={s.specsList}>
        {items.map((item, idx) => (
          <IconTextItem key={idx} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
