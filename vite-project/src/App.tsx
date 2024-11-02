import { useState } from 'react';
import Container from './components/Container.tsx';
import Summary from './components/Summary/Summary.tsx';
import Input from './components/Input/Input.tsx';
import Task from './components/Task/Task.tsx';
import './App.css';

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <div className="flex flex-col p-4">
            <Container title={'Summary'}>
              <Summary></Summary>
            </Container>
          </div>
          <div className="flex flex-col p-4">
            <Container>
              <Input></Input>
            </Container>
          </div>
          <div className="flex flex-col p-4">
            <Container title={'Tasks'}>
              <Task></Task>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
