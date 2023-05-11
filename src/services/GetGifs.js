
const api_key = 'OtwdREt1cvMo8HMMldmoBJHwpxxS59B5'


export default  function  ({keyword = 'morty'} = {}) {
     
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`
   
    return fetch(apiURL). then(respuesta =>  respuesta.json()).then(response => { const {data} = response

    const gifs = data.map(image => {
      const {images,title,id} = image 
      const {url} =  images.downsized_medium
      return {url,title,id}
    
    
    })



    return gifs
    
    })


  }