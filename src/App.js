import style from './App.module.css';
import Notes from './components/notes/Notes';

function App() {
  return (
    <div>
      <p className={style.headerText}>THE NOTES</p>
      <Notes />
    </div>
  );
}

export default App;
