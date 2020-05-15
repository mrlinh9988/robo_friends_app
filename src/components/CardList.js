import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
<<<<<<< HEAD
  console.log('CardList');
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
=======
  return (
    <div>
      {robots.map((robot, i) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default CardList;
>>>>>>> 18e510b2fbcbff1bea9c066f7ad9f2ff9cf41815
