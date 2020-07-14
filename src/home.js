import React from 'react';
import logo from './logo.svg';
import './home.css';

function Home() {
  return (
    <div>
      <header className="home-header">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt neque ut dolor pellentesque placerat. 
        Curabitur nec convallis orci. Mauris dapibus massa ligula, ut efficitur eros convallis sed. Integer quis accumsan nunc,
         in congue dui. Quisque viverra vulputate mi, vel laoreet augue ullamcorper commodo. Morbi iaculis id turpis vel efficitur.
          Donec accumsan diam ut vestibulum sodales. Cras ultrices nulla a mauris rhoncus mollis. Suspendisse at purus nisi. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat laoreet mollis. 
          Donec aliquam nisi viverra turpis sodales, eget fringilla tortor vehicula. Sed fringilla bibendum pellentesque. 
          Sed venenatis quam tincidunt eros imperdiet ornare. Phasellus vehicula massa id ullamcorper vestibulum.
        </p>
        <a
          className="home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
