import React from 'react';
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </>
  );
}
export default Home;
