var playlist = {
  'Eminem':'Lose Yourself',
  'Bruno Mars':'Chunky',
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]:songTitle})
}
