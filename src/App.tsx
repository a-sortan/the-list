import TaskListComponent from './components/TaskListComponent';
// import EditTaskComponent from './components/EditTaskComponent';
import './App.css';
import { useState } from 'react';
import AsideComponent from './components/AsideComponent';

function App() {
  const [asideVisible, setAsideVisible] = useState(true);
  function showAside() {
    setAsideVisible(true);
  }

  function hideAside() {
    setAsideVisible(false);
  }

  return (
    <>
      <div className='app'>
        <header className="header">Header</header>
        <div className="holygrail-body">
          <div  className="nav">
            <ul>
              <li><i className="bi bi-calendar-check"> Today</i> </li>
              <li><i className="bi bi-calendar-check-fill secondary"> Menu 2</i></li>
              <li>Menu 3</li>
              <button className='red-bck'> click me</button>
              <button className='primary-bck'> click me</button>
              <button className='secondary-bck'> click me</button>
            </ul>
          </div>
          <div className="content">
            <TaskListComponent showAside={showAside} />
          </div>
          <AsideComponent asideVisible={asideVisible} hideAside={hideAside} />
        </div>
        {/* <footer className="footer">Footer</footer> */}
      </div>
    </>
  )
}

export default App
