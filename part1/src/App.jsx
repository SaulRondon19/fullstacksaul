const Header = (props) =>{
  return (
    <p>{props.name}</p>
  )
}

const Part = (props) =>{
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}


const Content = (props) =>{
  const [part1, part2, part3] = props.parts;
  return(
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
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