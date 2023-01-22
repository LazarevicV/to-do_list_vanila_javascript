note_array = []

if (localStorage.getItem('notes') === null) {
  console.log('Localstorage je prazan!');
}

if (localStorage.getItem('notes') != null) {
  note_array = JSON.parse(localStorage.getItem('notes'))
}

console.log(note_array);

upisi_u_local_storage = (title, description, date, important) => {
  note = [title, description, date, important]
  console.log(note);
  note_array.push(note)
  localStorage.setItem('notes', JSON.stringify(note_array))
}

ucitaj_podatke = () => {
  let title = document.getElementById('title')
  let description = document.getElementById('description')
  let date = document.getElementById('date')
  let radioButtons = document.getElementsByName('important')

  var important

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      important = radioButtons[i].value
    }
  }

  upisi_u_local_storage(title.value, description.value, date.value, important)
  console.log(title.value, description.value, date.value, important);
}

dodaj_dugme = document.getElementById('dodaj_dugme')

dodaj_dugme.addEventListener('click', function dodaj_dugme_klik(e) {
  e.preventDefault()
  ucitaj_podatke()
  location.reload()
})