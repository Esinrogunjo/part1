const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <div>
      {props.info.map((inf, i) => {
        return <Part inf={inf} key={i} index={i} />;
      })}
    </div>
  );
};
const Part = ({ inf, index }) => {
  return (
    <div key={index}>
      <h3>
        {inf.name} {inf.exercises}
      </h3>
    </div>
  );
};
const Total = (props) => {
  const totalProps = props.total;
  const total =
    totalProps[0].exercises + totalProps[1].exercises + totalProps[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content info={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
