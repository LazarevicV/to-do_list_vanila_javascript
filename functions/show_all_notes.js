note_array = []

if (localStorage.getItem('notes') === null) {
}

if (localStorage.getItem('notes') != null) {
  note_array = JSON.parse(localStorage.getItem('notes'))
}

var all_notes_div = document.getElementById('all_notes')

dodaj_sve_beleske = () => {
  var brojac = 0
  for (let note of note_array) {
    date = note[2].split('-')
    day = date[2]
    month = date[1]
    year = date[0]

    if (note[3] == 'high') {
      all_notes_div.innerHTML += `
        <div class="note high_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
          <p class="obrisi_note" id="obrisi_note_${brojac}">Delete</p>
        </div>
      `
    } 
    if (note[3] == 'medium') {
      all_notes_div.innerHTML += `
        <div class="note medium_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
          <p class="obrisi_note" id="obrisi_note_${brojac}">Delete</p>
        </div>
      `
    }
    if (note[3] == 'low') {
      all_notes_div.innerHTML += `
        <div class="note low_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
          <p class="obrisi_note" id="obrisi_note_${brojac}">Delete</p>
        </div>
      `
    }
    if (note[3] == 'none') {
      all_notes_div.innerHTML += `
        <div class="note none_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
          <p class="obrisi_note" id="obrisi_note_${brojac}">Delete</p>
        </div>
      `
    }
    brojac++
  }
}

dodaj_sve_beleske()

const deleteButtons = document.querySelectorAll("[id^='obrisi_note_']")

deleteButtons.forEach(button => {
  button.addEventListener('click', event => {
    const memberDiv = event.target.parentNode
    memberDiv.remove()
    obrisi_id = event.target
    var id_note = event.target.id.split('_')[1]
    note_array.splice(id_note, 1)
    localStorage.setItem('notes', JSON.stringify(note_array))
    location.reload()
  })
})
