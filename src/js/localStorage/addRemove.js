import localStrg from './localStrg';

export function removeMovieFromLib(movieID, userLibrary) {
  let currentLibraryState = localStrg.load(userLibrary);
  let updatedLibraryState = currentLibraryState.filter(movie => {
    console.log(movie.id);
    return movie.id !== +movieID;
  });
  console.log(updatedLibraryState, updatedLibraryState.length);
  updatedLibraryState =
    updatedLibraryState.length > 0 ? updatedLibraryState : null;
  localStrg.save(userLibrary, updatedLibraryState);
}

export function addMovieToLib(movieID, userLibrary) {
  let currentLibraryState = localStrg.load(userLibrary);
  const currentPage = localStrg.load('currentPage');
  console.log(currentLibraryState);
  let movieToAddToLib = currentPage.find(movie => movie.id == movieID);
  console.log(movieToAddToLib);
  if (!currentLibraryState) {
    currentLibraryState = [movieToAddToLib];
  } else currentLibraryState.push(movieToAddToLib);
  console.log(currentLibraryState);
  localStrg.save(userLibrary, currentLibraryState);
}
