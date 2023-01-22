upisi_u_local_storage = (title, description, date, important) => {
  localStorage.setItem('note', JSON.stringify([title, description, date, important]))
}

ucitaj_podatke = () => {
  title = document.getElementById('title')
  description = document.getElementById('description')
  date = document.getElementById('date')
  important = document.getElementById('important')
  
  console.log(title.value, description.value, date.value, important.value);

  upisi_u_local_storage(title, description, date, important)
}

dodaj_dugme = document.getElementById('dodaj_dugme')

dodaj_dugme.addEventListener('click', function dodaj_dugme_klik(e) {
  e.preventDefault()
  ucitaj_podatke()
})