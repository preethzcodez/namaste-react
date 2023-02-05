// get Search Results - Restaurants List
export const getSearchResults = (searchText, restaurantsData) =>
  restaurantsData?.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
