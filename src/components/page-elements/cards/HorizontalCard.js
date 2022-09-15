import horizontalCardStyle from "./HorizontalCard.module.css";

function HorizontalCard(props) {
  return (
    <div
      className={
        horizontalCardStyle["horizontal-card"] +
        " " +
        horizontalCardStyle[props.direction]
      }
    >
      <div className={horizontalCardStyle["horizontal-card-image"]}>
        <img src={props.imageSrc} />
      </div>
      <div className={horizontalCardStyle["horizontal-card-content"]}>
        {props.children}
      </div>
    </div>
  );
}

export default HorizontalCard;
