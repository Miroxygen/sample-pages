document.getElementById('submissionForm').onsubmit = function(event) {
  event.preventDefault()
  
  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim()
  const errorMessage = document.getElementById('errorMessage')

  if (name === '' || email === '') {
      errorMessage.textContent = 'Vänligen fyll i alla fält.'
  } else if (!email.includes('@')) {
      errorMessage.textContent = 'Vänligen ange en gilgitg epostadress.'
  } else {
      errorMessage.textContent = ''
      alert('Form submitted successfully!')
  }
}
