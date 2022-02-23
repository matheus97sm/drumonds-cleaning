export function faq() {
  const questions = document.querySelectorAll('.faq-card');

  if (questions.length === 0) return null;

  questions.forEach(question => {
    question.addEventListener('click', e => {
      e.preventDefault();

      question.classList.toggle('active');
    });
  });
}
