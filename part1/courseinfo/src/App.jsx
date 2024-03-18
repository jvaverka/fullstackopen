const Header = (props) => {
  return (
    <>
      <h1>{props.course_name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part_name} {props.exercise_count}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part_name={props.part1.name} exercise_count={props.part1.exercises} />
      <Part part_name={props.part2.name} exercise_count={props.part2.exercises} />
      <Part part_name={props.part3.name} exercise_count={props.part3.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course_name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App
