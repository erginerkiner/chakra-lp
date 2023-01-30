import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HeroSection from '@/components/HeroSection'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features  />
      <Stats />
      <Contact />
    </main>
  )
}
