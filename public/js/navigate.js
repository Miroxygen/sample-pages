function navigateTo(page) {
  const pages = document.querySelectorAll('.page')
  pages.forEach(p => p.style.display = 'none')
  document.getElementById(page).style.display = 'block'

  const feedback = document.getElementById('feedback')
  feedback.textContent = `Du är nu på ${page.charAt(0).toUpperCase() + page.slice(1)} sidan.`
}

navigateTo('start')
