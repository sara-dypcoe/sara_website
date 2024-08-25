import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="./images/favsara3.png" alt="SARA" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">TEAM</a></li>
            <li><a href="/">FAQS</a></li>
            <li><a href="/">WORKSHOPS</a></li>
            <li><a href="/">EVENTS</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">TUTORIALS</a></li>
            <li><a href="/">ABOUT US</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <h1>Student Association of Robotics & Automation</h1>
          <p>20th Jan - 22nd Jan, 2023</p>
          <button className="button">Explore Events</button>
        </div>
      </main>
      <footer className="footer">
        <div className="social">
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="copyright">
          &copy; 2024 Student Association of Robotics & Automation. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
