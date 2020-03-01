import React, {useState,useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Foooter';
import '../assets/styles/App.scss';
import '../assets/styles/media.scss';
import useInitialState from '../hooks/useInitialState';
import useinitialState from '../hooks/useInitialState';
const API = 'http://localhost:3000/initalState';
const App = () => {
    const initialState = useinitialState(API);
    return  (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>

            </Categories>
             } 
          
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                  </Carousel>

            </Categories>
            <Categories title="Originales de PlatzyVideo">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                
                    <CarouselItem />
                </Carousel>

            </Categories>
            <Footer />
        </div>
    );
};

export default App;