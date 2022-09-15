import style from "./ContentContainer.module.css";

function ContentContainer(props) {
  return <div className={style["content-container"]}>{props.children}</div>;
}

export default ContentContainer;
