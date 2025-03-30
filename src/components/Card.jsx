import { useState } from "react";
import styles from "./Card.module.css";
import disslike from "/src/assets/dislike.png";
import like from "/src/assets/Like.png";
export default function Card() {
  const [joke, setJoke] = useState(0);
  function goodJoke() {
    setJoke((prev) => prev + 1);
  }
  const [badjoke, setbadJoke] = useState(0);
  function badJoke() {
    setbadJoke((prev) => prev - 1);
  }
  const sumJoke = joke + badjoke;

  const [chacknorisJoke, setcChacknorisJoke] = useState("");

  function chacknorishJokeApi() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setcChacknorisJoke(data.value))
      .catch(console.error(error));
  }
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.jokeContainer}>
            <p>{chacknorisJoke}</p>
          </div>
          <button
            onClick={chacknorishJokeApi}
            className={styles.profileShownButton}
          >
            Fetch Joke
          </button>
        </div>
        <div className={styles.jokeRateContainer}>
          <div className={styles.goodAndBadJokeContainer}>
            <div className={styles.goodJokeSum}>
              <div className={styles.sum}>
                <p>{joke}</p>
              </div>
              <img className={styles.badJokeImage} src={like} alt="badJoke" />
            </div>
            <div className={styles.badJokeSum}>
              <div className={styles.sum}>
                <p>{badjoke}</p>
              </div>
              <img
                className={styles.badJokeImage}
                src={disslike}
                alt="badJoke"
              />
            </div>
          </div>
          <div className={styles.goodAndBadButton}>
            <button onClick={goodJoke} className={styles.goodJoke}>
              Thumbs Up
            </button>
            <div className={styles.badAndGoodSUm}>
              <p>{sumJoke}</p>
            </div>
            <button onClick={badJoke} className={styles.badJoke}>
              Thumbs Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
