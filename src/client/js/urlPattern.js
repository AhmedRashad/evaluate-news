function urlPattern(inputURL) {
  var regex = inputURL.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

   if(regex == null){
       return 0;
   } else{
   return 1;
   }
}
  export { urlPattern }