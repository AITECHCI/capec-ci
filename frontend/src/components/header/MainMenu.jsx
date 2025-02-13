import React, { useEffect, useState } from "react";
import Link from "next/link";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        console.error("Erreur lors de la récupération du menu:", err);
      }
    };
    fetchMenu();
  }, []);

  const renderMenu = (items, parentId = null) => {
    return items
      .filter((item) => item.parent_id === parentId)
      .map((item) => (
        <li key={item.id} className={item.is_dropdown ? "dropdown" : ""}>
          <Link
            href={item.url}
            className={item.is_dropdown ? "dropdown-toggle" : ""}
            data-toggle={item.is_dropdown ? "dropdown" : null}
            onClick={item.is_dropdown ? toggleSubMenu : null}
          >
            {item.label}
          </Link>
          {item.is_dropdown && (
            <ul className="dropdown-menu">
              {renderMenu(items, item.id)}
            </ul>
          )}
        </li>
      ));
  };

  return (
    <ul
      className={`nav navbar-nav ${navbarPlacement}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      {renderMenu(menuItems)}
    </ul>
  );
};

export default MainMenu;