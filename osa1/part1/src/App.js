import React from 'react'


const Header = (props) => 
{
  return (
    <div>
      <h1>{props.course_name}</h1>
    </div>
  )
}

const Part = (props) =>
{
  return (
    <div>
      <p>
       {props.pp_part} {props.pp_exercises}
      </p>
    </div>
  )
}

const Content = (props) => 
{
  return (
    <div>
      <Part pp_part={props.parts[0].name} pp_exercises={props.parts[0].exercises}/>
      <Part pp_part={props.parts[1].name} pp_exercises={props.parts[1].exercises}/>
      <Part pp_part={props.parts[2].name} pp_exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => 
{
  return (
    <div>
      <p>
       Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course_name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
