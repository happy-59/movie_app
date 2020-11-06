import React from 'react';
import Macaron from './Macaron';
import PropTypes from 'prop-types';

// function Food(props) { //자식컴포넌트
//   return (
//     <h1>I Like {props.propsName}</h1>
//   );
// }

// function Food(props) { //구조 분해 할당
//   const {propsName} = props;
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// function Food({propsName}) { //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

function Food({name, id, image}){
  return(
    <div>
      <h1>cake No.{id}</h1>
      <h2>{name}/5.0</h2>
      <img src={image} alt={name} />
    </div>
  );
}

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const cakes = [
  {
    id: 1,
    name: 'cake1',
    image: 'https://i.pinimg.com/236x/13/e3/2b/13e32b7d3ca33aea5a585db23c961b89.jpg',
  },
  {
    id: 2,
    name: 'cake2',
    image: 'https://i.pinimg.com/236x/5d/6e/11/5d6e115a033d7c0d45c5e0d4e802c4c3.jpg',
  },
  {
    id: 3,
    name: 'cake3',
    image: 'https://i.pinimg.com/236x/b2/07/93/b20793af39a24bbc023044db12823f9e.jpg',
  },
];

function App() { //부모컴포넌트
  return (
    <>
      <div>안녕하세요!!</div>
      <Macaron />
      {cakes.map(cake => (
                              <Food
                                name={cake.name} 
                                id={cake.id}
                                image={cake.image}
                              />
                            ))}
    </>
  )
}

// class App extends React.Component{
//   render() {
//     return (
//       <>
//         <div>안녕하세요!!</div>
//         <Macaron />
//         <Food propsName = "coffee"/>
//         <Food propsName = "tea"/>
//         <Food propsName = "latte"/>
//         <Food propsName = "ice coffee"/>
//         <Food propsName = "cake"/>
//       </>
//     );
//   }
// }

//npm install prop-types
Food.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default App;
