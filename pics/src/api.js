import axios from 'axios';

// async() keyword is for making an asyncronous request.
const searchImages = async (term) => {
    
    // 'await' tell JS to wait for the request to finish before moving on to the next line of code.
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID jyJlSKmidA4PV4ioD1gLClFEY5p1nq5k7iSMhJ5ygEg'
        }, 
        params: {
            query: term,
        },
    });

   // console.log(response);
   // console.log(response.data.results);

    return response.data.results;
};

export default searchImages;