import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';
import { useState } from 'react';

const music = [
  {
    'name': 'Sample 1',
    'url': 'https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/11/file_example_MP3_700KB.mp3'
  },
  {
    'name': 'Sample 2', 'url': 'https://filesamples.com/samples/audio/mp3/sample4.mp3'
  },
  {
    'name': 'Symphony No.6', 'url': 'https://filesamples.com/samples/audio/mp3/Symphony%20No.6%20(1st%20movement).mp3'
  }
];

const images = [
  {
    'name': 'Cat',
    'url': 'https://media.istockphoto.com/id/1071204716/photo/bengal-cat-lying-on-the-bed.jpg?s=612x612&w=0&k=20&c=RD84qo3_FPV0EBC1wdccyV44J0pkpqIK8oEemViXtAI='
  },
  {
    'name': 'Cat and dog',
    'url': 'https://media.istockphoto.com/id/1423026647/photo/fluffy-friends-a-cat-and-a-corgi-dog-are-sitting-in-a-meadow-on-a-sunny-summer-day.jpg?s=612x612&w=0&k=20&c=RE_ruqa_mlRqAMoi6-J6AIOFl4XPeepSwrHqiEJYotI='
  },
  {
    'name': 'Chipmunk',
    'url': 'https://media.istockphoto.com/id/480460526/photo/chipmunk.jpg?s=612x612&w=0&k=20&c=V2iAzdV3QveT6nWEWyqkucr13Zf6h5wDw1OiRkZayJk='
  }
];

function App() {

  const [selectedSong, setMusic] = useState({
    'name': '', 'url': ''
  });
  const [selectedImage, setImage] = useState({
    'name': '', 'url': ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isImageGalleryVisible, setIsImageGalleryVisible] = useState(false);
  const [isMusicGalleryVisible, setIsMusicGalleryVisible] = useState(false);

  return (<div className="App">
    <div className="menu">
      <ul>
        <li>
          <span>Вибрати</span>
          <ul>
            <li><span onClick={ () => {setIsImageGalleryVisible(true);} }>Малюнок</span></li>
            <li><span onClick={ () => {setIsMusicGalleryVisible(true);} }>Музика</span></li>
          </ul>
        </li>
        <li><span onClick={ () => {
          setIsVisible(true);
          setIsImageGalleryVisible(false);
          setIsMusicGalleryVisible(false);
        } }>Показати</span></li>
        <li><span onClick={ () => {
          setIsVisible(false);
          setIsImageGalleryVisible(false);
          setIsMusicGalleryVisible(false);
        } }>Видалити</span></li>
      </ul>
    </div>

    { isImageGalleryVisible &&
      <div className="imageGallery">
        <ul>
          { images.map(function(image) {
            return <li key={ image.url } className={ selectedImage === image ? 'active' : '' }>
              <div className="imageBlock" onClick={ () => setImage(image) }>
                <img src={ image.url } alt={ image.name } />
                <span>{ image.name }</span>
              </div>
            </li>;
          }) }
        </ul>
      </div>
    }

    { isMusicGalleryVisible &&
      <div className="musicGallery">
        <ul>
          { music.map(function(song) {
            return <li
              key={ song.url }
              className={ selectedSong === song ? 'active' : '' }
              onClick={ () => setMusic(song) }
            >
              <span>{ song.name }</span>
            </li>;
          }) }
        </ul>
      </div>
    }


    {
      isVisible && selectedImage.url &&
      <>
        <img className="centerBlock" src={ selectedImage.url } alt={ selectedImage.name } />
        <div className="centerBlock">Picture: { selectedImage.name }</div>
      </>
    }
    {
      isVisible && selectedSong.url &&
      <>
        <div className="centerBlock">
          Song: { selectedSong.name }
        </div>
        <AudioPlayer
          autoPlay
          progressJumpStep={ 10 * 1000 }
          src={ selectedSong.url }
        />
      </>
    }

  </div>);
}

export default App;
