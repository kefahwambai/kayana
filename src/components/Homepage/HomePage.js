import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import cat1 from '../../Assets/category-1.jpg';
import cat2 from '../../Assets/category-2.jpg';
import cat3 from '../../Assets/category-3.jpg';
import cat4 from '../../Assets/category-4.jpg';

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const items = useRef([]);
  const controls = useRef([]);
  const headerItems = useRef([]);
  const descriptionItems = useRef([]);

  const activeDelay = 0.76;
  const interval = 5000;

  useEffect(() => {
    items.current = document.querySelectorAll('.item');
    controls.current = document.querySelectorAll('.control');
    headerItems.current = document.querySelectorAll('.item-header');
    descriptionItems.current = document.querySelectorAll('.item-description');

    controls.current.forEach(control =>
      control.addEventListener('click', clickedControl)
    );
    controls.current[current].classList.add('active');
    items.current[current].classList.add('active');

    intervalRef.current = setInterval(nextSlide, interval);

    return () => clearInterval(intervalRef.current);
  }, [current]);

  const nextSlide = () => {
    const nextIndex = current === items.current.length - 1 ? 0 : current + 1;
    activateSlide(nextIndex);
  };

  const clickedControl = (e) => {
    clearInterval(intervalRef.current);
    const control = e.target;
    const dataIndex = Number(control.dataset.index);
    activateSlide(dataIndex);
    intervalRef.current = setInterval(nextSlide, interval);
  };

  const activateSlide = (index) => {
    items.current.forEach((item, idx) => {
      item.classList.toggle('active', idx === index);
      controls.current[idx].classList.toggle('active', idx === index);
    });
    setCurrent(index);
    transitionDelay(headerItems.current);
    transitionDelay(descriptionItems.current);
  };

  const transitionDelay = (items) => {
    items.forEach(item => {
      const children = item.childNodes;
      let count = 1;
      let seconds = item.classList.contains('item-header') ? 0.015 : 0.007;

      children.forEach(child => {
        if (child.classList) {
          const delay = item.parentNode.classList.contains('active')
            ? count * seconds + activeDelay
            : count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`;
          count++;
        }
      });
    });
  };

  return (
    <div>
      <section>
        <div className="content-width">
          <div className="slideshow">
            <div className="slideshow-items">
              {[
                {
                    img: "https://images.unsplash.com/photo-1525103504173-8dc1582c7430?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Carry On Bags",
                    description: "Explore our collection of carry-on bags designed for modern travelers. Lightweight, durable, and stylish, these bags ensure you travel with ease and elegance, whether it's for business or pleasure."
                  },
                  {
                    img: "https://corkcicle.com/cdn/shop/files/SeriesA_SecondaryBlock_540x.jpg?v=1714495870",
                    header: "Cork Cicles",
                    description: "Stay hydrated in style with Corkcicle’s range of drinkware. Our innovative bottles and tumblers are crafted to keep your drinks at the perfect temperature, making them ideal for both hot and cold beverages."
                  },
                  {
                    img: "https://cdn.thewirecutter.com/wp-content/media/2023/02/giftbaskets-2048px-4055.jpg?auto=webp&quality=75&width=980&dpr=2",
                    header: "Corporate Gifting",
                    description: "Impress clients and colleagues with our premium corporate gifting options. From gourmet gift baskets to personalized items, our selection is designed to make a lasting impression and foster strong business relationships."
                  }
                
              ].map((item, index) => (
                <div className={`item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="item-image-container">
                    <img className="item-image" src={item.img} alt={item.header} />
                  </div>
                  <div className="item-header">
                    {item.header.split('').map((char, i) => (
                      <span className="vertical-part" key={i}><b>{char}</b></span>
                    ))}
                  </div>
                  <div className="item-description">
                    {item.description.split(' ').map((word, i) => (
                      <span className="vertical-part" key={i}><b>{word}</b></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="controls">
              <ul>
                {Array(3).fill(0).map((_, index) => (
                  <li className="control" data-index={index} key={index}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-category ftco-no-pt">   
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                  <div
                    className="category-wrap-2 ftco-animate img align-self-stretch d-flex"
                  >
                    <div className="text text-center">
                      {/* <h2>Vegetables</h2>
                      <p>Protect the health of every home</p> */}
                      <p style={{marginLeft: '10px'}}><a href="#" className="btn btn-primary">Shop now</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end">
                    <img src={"https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Gadgest" />
                    <div className="text px-3 py-1">
                      <h2 className="mb-0"><a href="#">Gadgets</a></h2>
                    </div>
                  </div>
                  <div className="category-wrap ftco-animate img d-flex align-items-end">
                    <img src={"https://images.unsplash.com/photo-1555494183-648c287e29bc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Bags" />
                    <div className="text px-3 py-1">
                      <h2 className="mb-0"><a href="#">Bag Packs</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end">
                <img style={{ marginTop: '-7.5rem'}} src={"https://corkcicle.com/cdn/shop/products/2116BBB-2_900x.png?v=1715277657"} alt="Cork Cicle" />
                <div className="text px-3 py-1">
                  <h2 style={{ color: 'darkGrey'}} className="mb-0"><a href="#">Cork Cicle</a></h2>
                </div>
              </div>
              <div className="category-wrap ftco-animate img d-flex align-items-end">
                <img src={"https://www.redstickspice.com/cdn/shop/files/CorporateGiftBoxes-RoundTwo-12_2000x.jpg?v=1699749359"} alt="Gifts" />
                <div className="text px-3 py-1">
                  <h2 className="mb-0"><a href="#">Corporate Gifts</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="planner">
        <div className='plaHead'>
          <p>
          FOR ALL YOUR GIFTING NEEDS
          </p>
        </div>
        <div className='plancont'>
          <div>
            <h1>
              01
            </h1>
            <h3> Consultaion </h3>
            <p style={{ width: "200px"}}>
            Apparently we had reached a great height in the atmosphere.
            </p>
          </div>
          <div>
            <h1>
              02
            </h1>
            <h3> Confirmation </h3>
            <p style={{ width: "200px"}}>
            By the same illusion which lifts the horizon of the sea to the level 
            </p>
          </div>
          <div>
            <h1>
              03
            </h1>
            <h3> We do the plan </h3>
            <p style={{ width: "200px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          <div>
            <h1>
              04
            </h1>
            <h3> Enjoy  </h3>
            <p style={{ width: "200px"}}>
            Apparently we had reached a great height in the atmosphere
            </p>
          </div>

        </div>      
      </section>
    </div>
  );
}
