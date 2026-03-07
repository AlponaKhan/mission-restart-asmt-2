import { Suspense, use, useState } from 'react'
import './App.css'
import Bannar from './components/Bannar'
import Footer from './components/Footer'
import Main from './components/mainSection/Main'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';


const customerPromise = fetch('./fakeData.json')
  .then(res => res.json());
// console.log(customerPromise);

function App() {

  const data = use(customerPromise);
  // console.log(data);

  const [cards, setCards]= useState(data);

  const [progress, setProgress] = useState(0);

  const [titled, setTitle] = useState([]);

  const [resolved, setResolved] = useState([]);
  const [solvedCount, setSolvedCount] = useState(0);

  const removeTask = (task) => {
    // console.log('task remove', task);
    const filteredData = titled.filter(heading => heading !== task);
    setTitle(filteredData);

    const filteredCard = cards.filter(card=> card.title !== task);
    setCards(filteredCard);
  }

  const handleCompletedTask = (title) => {
    // console.log(title);


    toast(`Task: ${title}.title Completed!!!`);

    const newResolved = [...resolved, title];
    setResolved(newResolved);

    const updatedProgress = progress - 1;
    setProgress(updatedProgress);

    const updatedSolved = solvedCount + 1;
    setSolvedCount(updatedSolved);
  }

  const handleCardClick = (singleCard) => {
    const updatedProgress = progress + 1;
    setProgress(updatedProgress);

    const selectedTitle = singleCard.title;

    const newTitle = [...titled, selectedTitle];
    setTitle(newTitle);

    toast(`Task In progress!!!`);
  }

  return (


    <>
      <Navbar></Navbar>
      <Bannar solvedCount={solvedCount} progress={progress}></Bannar>
      <Suspense fallback={<div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Main cards={cards} removeTask={removeTask} resolved={resolved} handleCompletedTask={handleCompletedTask} titled={titled} handleCardClick={handleCardClick} data={data}></Main>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
