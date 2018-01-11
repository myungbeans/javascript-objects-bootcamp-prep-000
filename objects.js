var playlist = {
  'Eminem':'Lose Yourself',
  'Bruno Mars':'Chunky',
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {[artistName]:songTitle})
}
