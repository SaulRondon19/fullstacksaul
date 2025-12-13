const Header = (props) =>{
  return (
    <p>{props.name}</p>
  )
}


const Content = (props) =>{
  const [part1, part2, part3] = props.parts;
  return(
    <div>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises3}</p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>{props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ];
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises 
  return (
    <div>
      <Header name={course}/>
      <Content parts = {parts}/>
      <Total total={total}/>
    </div>
  )
}

export default App