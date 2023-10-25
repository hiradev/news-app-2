import { Inter } from 'next/font/google'
import HomePage from './home/HomePage';

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className='App'>
      <HomePage/>
    </div>
  )
}

export default Home;
