import { useState } from 'react';
import './App.css';
import pic1 from '../xi_trum/Messenger_creation_86E2A5C0-9CEE-4DB8-BE2F-DAEFE97B950D.jpeg';

function App() {
  return (
    <>
      <section>Hình mà anh thích nhất</section>
      <img src={pic1} width={300} alt='anh1' />
    </>
  );
}

export default App;
