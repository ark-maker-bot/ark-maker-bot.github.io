function changeTheme(){
  document.body.classList.toggle("dark");
  let theme = "light";
  if(document.body.classList.contains("dark"))theme = "dark";
  localStorage.setItem("theme", theme);
  
  // Changes Text Theme
  document.getElementById("text").classList.toggle("dark");
  let themeText = "light";
  if(document.getElementById("text").classList.contains("dark"))themeText = "dark";
  localStorage.setItem("themeText", themeText);

  // Changes Text Theme 2
  document.getElementById("text2").classList.toggle("dark");
  let themeText2 = "light";
  if(document.getElementById("text2").classList.contains("dark"))themeText2 = "dark";
  localStorage.setItem("themeText2", themeText2);
}