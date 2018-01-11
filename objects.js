var playlist = {
  'Eminem':'Lose Yourself',
  'Bruno Mars':'Chunky',
};

function updatePlaylist(playlist, artist, song){
  Object.assign({}, playlist, {[artist]:[song]})
  return
}
