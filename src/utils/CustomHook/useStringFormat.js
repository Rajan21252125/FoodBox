// 'swiggy://menu?restaurant_id=532439&source=collection&query=Pizza'


const useStringFormat = (url) => {
  if (url.length >= 6) {
      // Split the string by "?" to get the query parameters
      const queryParams = url.split("?")[1];
  
      // Check if queryParams is undefined before further processing
      if (queryParams) {
        // Split the query parameters by "&" to get individual key-value pairs
        const keyValuePairs = queryParams.split("&");
  
        // Create an object to store the key-value pairs
        const params = {};
  
        // Iterate over the key-value pairs and add them to the object
        keyValuePairs.forEach((pair) => {
          const [key, value] = pair.split("=");
          params[key] = value;
        });
        
        // Extract collection_id and tags from the object
        let id = params["collection_id"];

        if (!id) id = params["restaurant_id"]
        const tags = params["tags"] || "";

        return id
    }
  } else {
    // Handle the case where url is undefined
    return url;
  }
};




// console.log(useStringFormat('swiggy://menu?restaurant_id=532439&source=collection&query=Pizza'))
export default useStringFormat;
