if (
  !(
    localStorage.getItem('proxzimaDarkMode') === 'dark' ||
    (!('proxzimaDarkMode' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
) {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}
