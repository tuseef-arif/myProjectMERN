import './Home.css';

const Home = () => {
  return (
    <div>      
      <div className="container">
        <h1>Welcome to My Website!</h1>
        <p>Explore our awesome features and services.</p>
        
        <div className="widget-container">
          <div className="widget">
            <h2>Widget 1</h2>
            <p>Some cool content goes here...</p>
          </div>
          
          <div className="widget">
            <h2>Widget 2</h2>
            <p>Some more cool content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
