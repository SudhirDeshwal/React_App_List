//<h1>Hello world</h1>;
// const title = React.createElement(
//   'h1',
//   { id: 'main', title: 'my title' },
//   'My Title'
// );

// const desc = React.createElement('p', null, 'My Description');

// const header = React.createElement('header', null, title, desc);

const title = (
  <h1 id='main' title=''>
    My Title
  </h1>
);
const desc = <p>My description</p>;

const header = React.createElement('header', null, title, desc);

ReactDOM.render(header, document.getElementById('root'));