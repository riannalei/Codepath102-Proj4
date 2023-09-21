export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card image"/>
      <h3>{props.name}</h3>
      <h4>likes: {props.likes}</h4>
      <a href={props.link} className="button">View Link</a>
    </div>
  );
}
