note_array = []

if (localStorage.getItem('notes') === null) {
  console.log('Localstorage je prazan!');
}

if (localStorage.getItem('notes') != null) {
  note_array = JSON.parse(localStorage.getItem('notes'))
}

var all_notes_div = document.getElementById('all_notes')
// console.log(note_array);

dodaj_sve_beleske = () => {
  for (let note of note_array) {
    console.log(note[3]);
    date = note[2].split('-')
    // console.log(date);
    day = date[2]
    month = date[1]
    year = date[0]

    if (note[3] == 'high') {
      all_notes_div.innerHTML += `
        <div class="note high_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
        </div>
      `
    } 
    if (note[3] == 'medium') {
      all_notes_div.innerHTML += `
        <div class="note medium_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
        </div>
      `
    }
    if (note[3] == 'low') {
      all_notes_div.innerHTML += `
        <div class="note low_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
        </div>
      `
    }
    if (note[3] == 'none') {
      all_notes_div.innerHTML += `
        <div class="note none_note">
          <p class="note_title">${note[0]}</p>
          <p class="note_description">${note[1]}</p>
          <p class="note_date">${day}/${month}/${year}</p>
        </div>
      `
    }
  }
}

dodaj_sve_beleske()