import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import './App.css';
import Institutional from './components/Institutional';

import posts from './data/posts';


const App = () => (
    <div className="App">
      <Navigation />
      <Hero />

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional />
    </div>
  );

export default App;
