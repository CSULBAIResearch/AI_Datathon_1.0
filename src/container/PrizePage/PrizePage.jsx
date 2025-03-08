import JBLimg from '../../asset/prizesImg/JBL.jpg';
import Kimg from '../../asset/prizesImg/keyboard.jpg';
import legoimg from '../../asset/prizesImg/Lego.webp';
import Giftimg from '../../asset/prizesImg/giftcard.jpg';

import React from 'react';
import "./PrizePage.css"

const PrizePage = () => {
  const prizes = [
    {
      title: 'Gaming Keyboard',
      description: 'TMKB T84SE Gaming Keyboard',
      imgUrl: Kimg,
    },
    {
      title: 'Headphones',
      description: 'JBL Quantum 100 Headphones',
      imgUrl: JBLimg,
    },
    {
      title: 'Lego Set',
      description: 'Different Lego sets',
      imgUrl: legoimg,
    },
    {
      title: 'Gift Card',
      description: 'Amazon Gift Card',
      imgUrl: Giftimg,
    },
  ];

  return (
    <section className="Prizes-container" id="prizes">
      <div className="Prizes-wrapper">
        <h2>Prizes</h2>
        <p>
          Here's a quick overview of the prizes you can win.</p>
        <div className="Prizes-list">
          {prizes.map((prize, index) => (
            <div className="Prize-card" key={index}>
              <h3>{prize.title}</h3>
              <p>{prize.description}</p>
              <img src={prize.imgUrl} alt={prize.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizePage;