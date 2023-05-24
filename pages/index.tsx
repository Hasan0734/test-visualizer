import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <h1 className='card-title'>Hello world</h1>
   </div>
  )
}
