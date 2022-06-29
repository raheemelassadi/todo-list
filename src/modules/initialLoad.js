import { WebpackError } from "webpack"

function createHome() {
    const content = document.querySelector('#content')
    const navbar = document.createElement("nav")
    const navTitle = document.createElement("h1")
    const navText = document.createElement("button")
    const navDiv = document.createElement("div")
    const sidebar = document.createElement("div")
    const mainWindow = document.createElement("div")
    const gridContainer = document.createElement("div")
    const inbox = document.createElement("div")
    const today = document.createElement("div")
    const week = document.createElement("div")

    content.classList.add('container-fluid')

    //nav items
    navbar.classList.add('navbar', 'navbar-expand-lg', 'container-fluid', 'justify-content-between')
    navTitle.textContent = "ToDo List"
    navTitle.setAttribute('id', 'navTitle')
    navText.textContent = 'Add Task'
    navText.setAttribute('id', 'navText')
    navText.classList.add('btn')

    navbar.appendChild(navTitle)
    navDiv.appendChild(navText)
    navbar.appendChild(navDiv)
    

    //text content
    inbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
  </svg><p class="ms-1 d-none d-sm-inline">Inbox</p>`

    today.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg><p class="ms-1 d-none d-sm-inline">Today</p>`

    //adding class lists
    gridContainer.classList.add('container-fluid', 'd-flex', 'h-100', 'gridContainer')

    sidebar.classList.add('sidebar', 'col-2', 'h-100', 'p-md-4')

    inbox.classList.add('inbox', 'sidebar-items')

    today.setAttribute('id', 'today')
    today.classList.add('sidebar-items')

    mainWindow.classList.add("col-10", 'd-grid', 'mainWindow')
    mainWindow.textContent = 'sdocidn'

  
    //appending
    content.appendChild(navbar)
    sidebar.appendChild(inbox)
    sidebar.appendChild(today)
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