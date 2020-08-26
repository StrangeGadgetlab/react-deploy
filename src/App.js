import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><b>You can invite ZukBot <a href="https://top.gg/bot/720752022395158538">here</a></b></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">What is ZukBot?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Commands</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Our amazing team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="bg-primary text-black">
  <a><img src="/images/d2edc046149cb37214869fa23cac4856.jpeg" alt="" /></a>
    <div className="container text-center">
      <h1>Welcome To ZukBot's Website!</h1>
      <p className="lead"><b>Here you will learn about ZukBot and understand how to use it.</b></p>
    </div>
  </header>

  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>What is Zukbot?</h2>
          <p className="lead">Zukbot is a discord bot for moderating, fun and much more! This bot is for the youtuber Xandergamer 123, which means you can answer trivia questions relating to him! KJD is the bot developer, so if you would like, Direct message KJD questions! I hope you enjoy this amazing bot, it's super fun.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="services" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Commands</h2>
          <p className="lead">Moderation z!kick - kicks a member, z!ban - bans a member, z!clear - purges messages. Fun: z!meme - generates a random meme, z!ascii - converts text into ascii, z!8ball - fortune-tells or seeks advice. Fun 2: z!flipcoin - flips a coin, either lands on heads or tails, z!trivia - try some questions about zuk's YT.

Economy:

z!bal - checks your balance,

z!work - work and recieve money,

z!daily - recieve a daily award of money,

z!leaderboard - checks the servers leaderboard.

Utility:

z!ping - get the bot's API ping,

z!weather - checks the weather from where you live,

z!covid - checks the covid cases in your country.

Fighting:

z!kill - get the bot to kill someone for you,

z!slap - slaps a person which you ping.

Support:

z!botinvite - Direct messages you a bot invite for you to use,

z!vote - Direct messages you my top.gg page. <b>The commands will be updated frequently.</b></p>

    
        </div>
      </div>
    </div>
  
  </section>

  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Our amazing team</h2>
          <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                            <h4>KJD</h4>
                            <p class="text-muted">Developer</p>

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                            <h4>Zukry</h4>
                            <p class="text-muted">Hoster of ZukBot</p>
                           
 
                        </div>
                    </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; ZukBot 2020</p>
    </div>

  </footer>

      
    </div>
  );
}

export default App;
