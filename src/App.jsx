import { Suspense } from 'react'
import './App.css'
import Bannar from './components/Bannar'
import Footer from './components/Footer'
import Main from './components/mainSection/Main'
import Navbar from './components/Navbar'


const customerPromise = fetch('./fakeData.json')
  .then(res => res.json());
// console.log(customerPromise);

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Suspense fallback={<div>
        <span class="loading loading-dots loading-xs"></span>
        <span class="loading loading-dots loading-sm"></span>
        <span class="loading loading-dots loading-md"></span>
        <span class="loading loading-dots loading-lg"></span>
        <span class="loading loading-dots loading-xl"></span>
      </div>}>
        <Main customerPromise={customerPromise}></Main>
      </Suspense>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
