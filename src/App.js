import React, {useState, useEffect} from 'react';
import './App.css';

//components
import Header from './Components/Header/Header';
import Fav from './Components/Fav/Fav';

//functions
import DB from './firebase/config';

function App() {

  const [appState, setAppState] = useState({
    title:'',
    src:''
  })

  useEffect(()=>{
    DB.collection('groups').doc('kedumim').onSnapshot(groupDB=>{
      
      let {src, title} = groupDB.data();
      
      setAppState({src, title})
    })
  },[])

  return (
   <div className='app'>
     <Header title={appState.title} src={appState.src} />
     <Fav />
   </div>
  );

  
}

export default App;


