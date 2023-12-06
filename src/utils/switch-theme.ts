export function switchTheme() {
  // Aqui eu resgato qual é o tema que esta definido no html
  const theme = document.getElementsByTagName("html")[0].className;
  console.log(theme);

  if (theme == "dark" || !theme) {
    // Aqui basicamente adicionamos ou removemos a classe dark do elemento
    document.getElementsByTagName("html")[0].classList.toggle("dark");
    return;
  }
}
