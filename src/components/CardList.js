// Component to display list of items in the JSON data on to the card
import Card from './Card';

const CardList = ({robots}) => {
    return (
    <div>
      {
      robots.map((user, i) => {
      return (<Card key={i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                phone={robots[i].phone}
            />
          );
  })
}    </div>
    );
}

export default CardList;