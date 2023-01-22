note_array = []

if (localStorage.getItem('notes') === null) {
  console.log('Localstorage je prazan!');
}

if (localStorage.getItem('notes') != null) {
  note_array = JSON.parse(localStorage.getItem('notes'))
}

console.log(note_array);

upisi_u_local_storage = (title, description, date, important) => {
  // console.log(title, description, date, important)
  note = [title, description, date, important]
  console.log(note);
  note_array.push(note)
  localStorage.setItem('notes', JSON.stringify(note_array))
}

ucitaj_podatke = () => {
  title = document.getElementById('title')
  description = document.getElementById('description')
  date = document.getElementById('date')
  important = document.getElementById('important')
  
  // console.log(title.value, description.value, date.value, important.value);

  upisi_u_local_storage(title.value, description.value, date.value, important.value)
}

dodaj_dugme = document.getElementById('dodaj_dugme')

dodaj_dugme.addEventListener('click', function dodaj_dugme_klik(e) {
  e.preventDefault()
  ucitaj_podatke()
  location.reload()
})