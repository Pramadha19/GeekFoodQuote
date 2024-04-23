import React from 'react';
import './Quote.css';
import { Navbar } from '../component/Navbar';
import { QuoteMain } from '../component/QuoteMain';
import { Footer } from '../component/Footer';


export const Quote = () => {
  return (
    <div>
        <Navbar></Navbar>
        <QuoteMain></QuoteMain>
        <Footer></Footer>
    </div>
  )
}