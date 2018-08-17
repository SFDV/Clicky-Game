//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import saiyan from "./saiyans.json";
import "./App.css";


class App extends Component {
  state = {
    saiyan,
    clickedSaiyan: [],
    score: 0
  };


  imageClick = event => {
    const currentSaiyan = event.target.alt;
    const SaiyanAlreadyClicked =
      this.state.clickedSaiyan.indexOf(currentSaiyan) > -1;


    if (SaiyanAlreadyClicked) {
      this.setState({
        saiyan: this.state.saiyan.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedSaiyan: [],
        score: 0
      });
        alert("You lose... don't give up! Try again!");


    } else {
      this.setState(
        {
          saiyan: this.state.saiyan.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedSaiyan: this.state.clickedSaiyan.concat(
            currentSaiyan
          ),
          score: this.state.score + 1
        },
       
        () => {
          if (this.state.score === 12) {
            alert("Very impressive... I might even say you're a rare genious");
            this.setState({
              saiyan: this.state.saiyan.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedSaiyan: [],
              score: 0
            });
          }
        }
      );
    }
  };

 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.saiyan.map(saiyan => (
            <FriendCard
              imageClick={this.imageClick}
              id={saiyan.id}
              key={saiyan.id}
              image={saiyan.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;