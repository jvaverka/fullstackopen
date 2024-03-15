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
      <Part part_name={props.part1_name} exercise_count={props.part1_count} />
      <Part part_name={props.part2_name} exercise_count={props.part2_count} />
      <Part part_name={props.part3_name} exercise_count={props.part3_count} />
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
      <Content part1_name={part1} part1_count={exercises1} part2_name={part2} part2_count={exercises2} part3_name={part3} part3_count={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
