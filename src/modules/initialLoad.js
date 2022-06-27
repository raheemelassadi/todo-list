function createHome() {
    const content = document.querySelector('#content');
    const navbar = document.createElement("nav");
    const navTitle = document.createElement("h1")
    const navText = document.createElement("button")
    const navDiv = document.createElement("div")
    const sidebar = document.createElement("div");
    const mainWindow = document.createElement("div");
    const gridContainer = document.createElement("div")

    content.classList.add('container-fluid')

    navbar.classList.add('navbar', 'navbar-expand-lg', 'container-fluid', 'justify-content-between')
    navTitle.textContent = "ToDo List"
    navTitle.setAttribute('id', 'navTitle')
    navText.textContent = 'Add Task'
    navText.setAttribute('id', 'navText')
    navText.classList.add('btn')
    gridContainer.classList.add('container-fluid', 'd-flex', 'h-100', 'gridContainer')

    navbar.appendChild(navTitle)
    navDiv.appendChild(navText)
    navbar.appendChild(navDiv)
    

    sidebar.classList.add('sidebar', 'col-2', 'h-100')
    sidebar.textContent = 'hello'

    mainWindow.classList.add("col-10", 'd-grid', 'mainWindow')
    mainWindow.textContent = 'sdocidn'

    
    content.appendChild(navbar);
    gridContainer.appendChild(sidebar)
    gridContainer.appendChild(mainWindow)
    content.appendChild(gridContainer)

  
    return content;
  }
  
  // function createParagraph(text) {
  //   const paragraph = document.createElement("p");
  //   paragraph.textContent = text;
    
  //   return paragraph;
  // }
  
  // function loadHome() {
  //   const main = document.getElementById("content");
  //   main.textContent = "";
  //   main.appendChild(createHome());
  // }
  
  export default createHome;