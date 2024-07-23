interface Props {
  body: string;
}

function Card(props: Props) {
  const { body } = props;

  return (
    <div className="card" style={{ width: "360px" }}>
      <div className="card-body">{body}</div>
    </div>
  );
}

interface CardBodyPropd {
  title: string;
  text: string;
}

export function CardBody(props: CardBodyPropd) {
  const { title, text } = props;

  return (
    <>
      <h5 className="card-title"> {title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
