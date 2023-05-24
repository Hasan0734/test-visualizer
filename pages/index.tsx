import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'


export default function Home() {
  return (
   <div>
    <Navbar/>
    <h1 className='card-title'>Hello world</h1>
   </div>
  )
}
