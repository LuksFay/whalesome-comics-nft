import React, {useEffect} from 'react';
import './Comic.css';
import frames from '../../comic';
const Comic = () => {

  frames.map( frame => {
    return(
      console.log(frame)
    )
  })

    return (
    <>
    <main id="container">
        <div id="comic">
            <div className="comic_frame">
                <img id="image_shower" alt='comic 1'/>
              </div>
              <div className="comic_frame">
                <img id="image_shower2" alt='comic 2'/>
              </div>
              
              <div className="comic_frame">
                <img id="image_shower3" alt='comic 3'/>
              </div>
        </div>
        <div id="action_buttons">
            <button> Random Comic </button>
            <button id="download"> Download </button>
        </div>
    </main>
    </>
  )
}

export default Comic



    // let image_array = [
    //     '01.jpg',
    //     '02.jpg',
    //     '03.jpg',
    //     '04.jpg',
    //     '05.jpg',
    //     '06.jpg',
    //     '07.jpg',
    //     '08.jpg',
    //     '09.jpg'
    //   ]
      
    //   function get_random_image(){
    //     // Get a random index
    //     let random_index = Math.floor(Math.random() * image_array.length);
        
    //     let random_indey = Math.floor(Math.random() * image_array.length);
    
    //     let random_indez = Math.floor(Math.random() * image_array.length);
      
    //     // Get an image at the random_index
    //     let selected_image = image_array[random_index]
        
    //     let selected_image2 = image_array[random_indey]
    
    //     let selected_image3 = image_array[random_indez]
      
    //     // Display the image
    //     document.getElementById('image_shower').src = `./images/${selected_image}`
        
    //     document.getElementById('image_shower2').src = `./images/${selected_image2}`
        
    //     document.getElementById('image_shower3').src = `./images/${selected_image3}`
    //   }

    //   document.getElementById('download').onclick = function(){
    //     const screenshotTarget = document.getElementById('comic');

    //     html2canvas(screenshotTarget).then((canvas) => {
    //       const base64image = canvas.toDataURL('image/png');
    //       let anchor = document.createElement('a');
    //       anchor.setAttribute('href', base64image);
    //       anchor.setAttribute('download', 'my-random-comic.png');
    //       anchor.click();
    //       anchor.remove();
    //     }) 
    //   }