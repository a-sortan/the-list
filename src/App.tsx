import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <header className="header">Header</header>
        <div className="holygrail-body">
          <div className="content">
            the-list
            <button className='red-bck'>click me</button>
            <button className='primary'> click me</button>
            <button className='secondary'> click me</button>
          </div>
          <ul className="nav">
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <button className='red-bck'> click me</button>
            <button className='primary'> click me</button>
            <button className='secondary'> click me</button>
          </ul>
          
          <div className="aside">Aside</div>
        </div>
        <footer className="footer">Footer</footer>
      </div>
    </>
  )
}

export default App
