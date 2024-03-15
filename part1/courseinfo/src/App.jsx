const Header = (props) => {
  return (
    <>
      <h1>{props.course_name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part_name} {props.exercise_count}
      </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course_name={course} />
      <Content part_name={part1} exercise_count={exercises1} />
      <Content part_name={part2} exercise_count={exercises2} />
      <Content part_name={part3} exercise_count={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
