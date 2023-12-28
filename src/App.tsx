import TaskListComponent from './components/TaskListComponent';
import './App.css';

function App() {

  return (
    <>
      <div className='app'>
        <header className="header">Header</header>
        <div className="holygrail-body">
          <div  className="nav">
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
              <button className='red-bck'> click me</button>
              <button className='primary-bck'> click me</button>
              <button className='secondary-bck'> click me</button>
            </ul>
          </div>
          <div className="content">
            <TaskListComponent />
          </div>
          
          
          <div className="aside">Aside</div>
        </div>
        <footer className="footer">Footer</footer>
      </div>
    </>
  )
}

export default App
