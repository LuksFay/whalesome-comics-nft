image_array = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg'
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
    
    random_indey = Math.floor(Math.random() * image_array.length);

    random_indez = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
    
    selected_image2 = image_array[random_indey]

    selected_image3 = image_array[random_indez]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
    
    document.getElementById('image_shower2').src = `./images/${selected_image2}`
    
    document.getElementById('image_shower3').src = `./images/${selected_image3}`
  }