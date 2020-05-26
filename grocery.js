
const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <span>Items: {props.items}</span>
      </header>
    );
  };

  const groceryList = [
    {
      name: 'apple',
    },
    {
      name: 'orange',
      
    },
    {
      name: 'cucumber',
    },
  ];
  
  ReactDOM.render(
    <Header title='Grocery List 2' items='4' />, 
    document.getElementById('root')
  );