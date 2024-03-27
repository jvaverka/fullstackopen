const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><strong>Number of exercises {sum}</strong></p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map((part) => <Part key={part.id} part={part} />)}
  </>

const Course = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)
  return (
    <>
      <Header course={course.name} />
      <Content key={course.id} parts={course.parts} />
      <Total sum={total} />
    </>
  )
}

export default Course
