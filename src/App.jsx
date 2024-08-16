import { useState, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ChildArea } from './ChildArea';

export function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), [setOpen])

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Show</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;
