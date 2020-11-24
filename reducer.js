export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // discover_weekly: []

    //remove after finish developing...
    // token: "BQDzKqeOX4z16z-mfp391i7znBMmxwFG7Dl715M_d-k2ZhZSFZz2u3zJfifxUNI1-MI6Bgeruspo-7Lsyr-R4XbgcZk0-rwHH9UUN8eFVHDBz8nCCe7AOPKLxY4ZpLLIGDYEsUnMxeSySb6Ul0IxnQ6TvzbrizKjHe35SOG7PanDAbP9",
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
     return {
         ...state,
         user: action.user
     };
     
     case "SET_TOKEN":
         return {
             ...state,
            token: action.token,
         };

         case "SET_PLAYLISTS":
             return {
                 ...state,
                 playlists: action.playlists,
             };

         case "SET_DISCOVER_WEEKLY":
              return {
                  ...state,
                  discover_weekly: action.discover_weekly,
                 }

     default:
         return state;

}
};

export default reducer;