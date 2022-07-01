import { Folder, btnLogic } from "./utils";

const sumbitProject = () => {
    const name = document.querySelector("#name")
    const form = document.querySelector('#myModal')
    const submitBtn = document.querySelector('#modalSubmit')

    submitBtn.addEventListener('click', function(){
        const newProject = new Folder()
        name.value = ""
    })
}

export { sumbitProject }



