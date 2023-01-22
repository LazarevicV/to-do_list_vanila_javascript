note_array = []

if (localStorage.getItem('notes') === null) {
  console.log('Localstorage je prazan!');
}

if (localStorage.getItem('notes') != null) {
  note_array = JSON.parse(localStorage.getItem('notes'))
}