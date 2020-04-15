import React from 'react';
import AppRouter from "./router/router.js"
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit,faPlusSquare)



function App() {
  return (
 
  <AppRouter/>

  );
}

export default App;
