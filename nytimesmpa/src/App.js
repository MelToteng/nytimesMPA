// import logo from './logo.svg';
import './App.css';
import Header from './header';
import ArticlesList from './articles';

function App() {
  return (
    <body>
      <Header />
      <div class="row" style={{ paddingLeft: '10px', paddingTop: '10px' }}>
        <div class="col-md-12">
          <ArticlesList />
        </div>
        
      </div>

    </body>
    // <div className="App">
    // <div class="col-md-8">
    //       <ArticleDetails />
    //     </div>
    //   <header>
    //     <div class="row">
    //       <div class="col-md-6">
    //         Test Header
    //       </div>
    //     </div>  
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <body>
    //     test
    //   </body>
    // </div>
  );
}

export default App;
