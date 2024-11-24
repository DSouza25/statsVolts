import { Link } from "react-router-dom";
import "./Menu.css";
import { menu } from "../../dados";

function Menu() {
  return (
    <div className="Menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="titulo-menu">{item.title}</span>
          {item.listItems.map((listItems) => (
            <Link to={"/"} className="listItem" key={listItems.id}>
              <img src={listItems.icon} alt="" />
              <span className="listItemTitle">{listItems.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
