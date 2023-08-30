import React from 'react';
import '../context_notes/AboutUsContent.css'


const AboutUsContent = () => {
  return (
    <section className="about">
  <div className="about-content">
    <h1>About Me</h1>
    <p>Hello, I'm <strong style={{ color: 'black' }}>Prasad v kamat</strong>, a passionate developer with a love for coding and solving complex problems.</p>
    <p>I'm currently studying the MERN (MongoDB, Express.js, React, Node.js) stack for web development, and I'm excited about building powerful and dynamic web applications.</p>
    <p>This website is my first full MERN stack web application, where I've combined my programming skills with my creativity to create a platform that allows users to manage and sync their notes.</p>
    <p>I enjoy contributing to open-source projects and continuously improving my coding skills. In my free time, you can find me on LeetCode, refining my algorithmic skills.</p>
  </div>
  <div className="about-links">
    <a href="https://leetcode.com/prasadvkamat/" target="_blank" rel="noopener noreferrer">LeetCode Profile</a>
    <a href="https://github.com/prasadvkamat" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
  </div>
</section>


  );
}

export default AboutUsContent;
