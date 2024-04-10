const inputs = document.querySelectorAll('.form-input')
const letter = document.querySelector('.letter')
const locks = document.querySelectorAll('.form-group i')
const formHeading = document.querySelector('.form-heading')

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    letter.style.opacity = 0
    if (input.type !== 'password') {
      setTimeout(() => {
        letter.textContent = e.target.value.split('').slice(-1)
        letter.style.opacity = 1
      }, 100)
    } else {
      setTimeout(() => {
        letter.textContent = '*'
        letter.style.opacity = 1
      }, 100)
    }
  })

  input.addEventListener('focus', (e) => {
    formHeading.style.opacity = 0
    setTimeout(() => {
      formHeading.textContent = e.target.placeholder
      formHeading.style.opacity = 1
    }, 200)
  })

  input.addEventListener('blur', () => {
    formHeading.style.opacity = 0
    setTimeout(() => {
      formHeading.textContent = 'Sign Up'
      formHeading.style.opacity = 1
    }, 200)
  })
})

locks.forEach((lock) => {
  lock.addEventListener('click', () => {
    lock.classList.toggle('fa-lock-open')

    lock.classList.contains('fa-lock-open')
      ? (lock.previousElementSibling.type = 'text')
      : (lock.previousElementSibling.type = 'password')
  })
})
