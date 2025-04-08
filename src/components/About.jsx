import React from 'react';

function About() {
  const cardData = [
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=828&q=50',
      title: 'Hands-On Learning',
      text: 'Blend physical and digital play seamlessly. With letter tiles, number blocks, and magnetic tiles, kids spell, count, and build to solve puzzles on the screen',
    },
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-2.webp&w=828&q=50',
      title: 'Learn the Fundamentals',
      text: 'Counting, sequencing, letter identification, spelling, shapes, and more!',
    },
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=828&q=50',
      title: 'Story-Based Learning',
      text: 'Play 14 exciting story-driven games with over 1000 levels using our innovative toys.',
    },
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-4.webp&w=828&q=50',
      title: 'Age-Adaptive Games',
      text: "The app customizes challenges to your child's grade level. For ages 4-6, master counting, sequences, phonics, sight words. Kids over 6 can conquer addition, subtraction, verbs, prepositions, and more.",
    },
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-5.webp&w=828&q=50',
      title: 'Holistic STEM-Learning Pack',
      text: 'The junior genius pack is the ultimate educational learning toy to introduce your child to STEM concepts seamlessly.',
    },
    {
      imgSrc: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=828&q=50',
      title: 'Skill Building',
      text: 'Our educational learning toys nurture eloquent expression, mathematical reasoning, and spatial intelligence.',
    },
  ];

  return (
    <div className="about-section"> 
      <h1 className="about-title-main">About</h1>
      <h2 className="about-title-sub">Junior Genius Pack</h2> 

      <div className="about-cardDisplay">
        {cardData.map((card, index) => (
          <div key={index} className="aboutCard">
            <img src={card.imgSrc} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;