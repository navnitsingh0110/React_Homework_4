import './App.css'
import { IoShareSocial } from "react-icons/io5";
import { MdFavorite, MdRateReview } from "react-icons/md";

function App() {

  return (
    <>
      <div className="container">

        <div className="movie-card">

          <div className="movie-info">
            <img src="https://imgs.search.brave.com/XS5dYckUCl3gnbyPBeiqkiJOmJc7REyQr9dl4nQPLXQ/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzE5OTQvcG9zdGVy/cy9zaGF3c2hhbmtf/cmVkZW1wdGlvbl92/ZXIxLmpwZw" alt="The Shawshank Redemption" className="main-img" />
            <div className="info">
              <h1 className="title">The Shawshank Redemption</h1>
              <p className='year'>1994, Frank Darabont</p>
              <p className="details">
                <span className='rating'>⭐ 9.3/10</span>
                <span className="duration">2h 22m</span>
                <p className="genre">Period Drama, Drama</p>
              </p>
              <div className="icons">
                <p><IoShareSocial /></p>
                <p><MdFavorite /></p>
                <p><MdRateReview /></p>
              </div>
            </div>

            <p className="description">A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.</p>

          </div>

          <div className="movie-cover">
            <img className='mask' src="https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_QL75_UX595.5_.jpg" alt="cover" />
          </div>

        </div>

        <div className="movie-card">

          <div className="movie-info">
            <img src="https://m.media-amazon.com/images/M/MV5BZjY1NWExMzUtNWUyNi00Nzk2LThlNTQtZDI0NmZlOWU2Mzc3XkEyXkFqcGc@._V1_QL75_UX1230_.jpg" alt="Prisoners" className="main-img" />
            <div className="info">
              <h1 className="title">Prisoners</h1>
              <p className='year'>2013, Denis Villeneuve</p>
              <p className="details">
                <span className="rating">⭐ 8.2/10</span>
                <span className="duration">2h 33m</span>
                <p className="genre">Crime, Drama, Mystery, Thriller</p>
              </p>
              <div className="icons">
                <p><IoShareSocial /></p>
                <p><MdFavorite /></p>
                <p><MdRateReview /></p>
              </div>
            </div>

            <p className="description">A desperate father takes the law into his own hands after police fail to find two kidnapped girls.</p>

          </div>

          <div className="movie-cover">
            <img className='mask' src="https://m.media-amazon.com/images/M/MV5BMTM4MzcwNjk5MV5BMl5BanBnXkFtZTgwNTA1MjcxMDE@._V1_QL75_UX606_.jpg" alt="cover" />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
