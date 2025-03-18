export function Greeting({ title, name = "User" }) {
  return <h1>{title},dice {name}</h1>;
}
export function UserCard(props, functi) {
  console.log(props, props.functi)
  return <div>
    <h1>{props.name}</h1>
    <p>${props.amount}</p>
    <ul>
      <li>CCity: {props.address.city}</li>
      <li>stret: {props.address.stret}</li>
    </ul>
  </div>

}
