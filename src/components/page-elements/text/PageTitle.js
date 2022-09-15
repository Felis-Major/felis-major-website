import style from "./PageTitle.module.css";

function PageTitle(props) {
  let classes = style["page-title"];

  switch (props.size) {
    case "large":
      classes += " " + style["large"];
      break;
    case "medium":
      classes += " " + style["medium"];
      break;
    case "small":
      classes += " " + style["small"];
      break;
  }

  return <span className={classes}>{props.children}</span>;
}

export default PageTitle;
