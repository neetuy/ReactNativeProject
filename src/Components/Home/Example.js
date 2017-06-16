import React from 'react';


 const Home = () => {
    return (
        <div>
            <h1>Welcome HOME!</h1>
        </div>
    );
};
 const About = () => {
    return (
        <div>
            <h1>This is About .....</h1>
        </div>
    );
};
 const Topics = ({pathname}) => {
    return (
        <div>
            <h2>Topics </h2>
            {pathname}
        </div>
    );
};
  const App = () => {
  return (
    <div>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>
        <hr/>
        <Match  pattern='/' component={Home} />
        <Match  pattern='/about' component={About} />
        <Match  pattern='/topics' component={Topics} />
      </div>
    </Router>
    </div>
  );}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reactjs react-router