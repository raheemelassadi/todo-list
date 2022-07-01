import { Folder, btnLogic } from "./utils";

const sumbitProject = () => {
    const name = document.querySelector("#name")
    const submitBtn = document.querySelector('#modalSubmit')

    submitBtn.addEventListener('click', function(){
        const newProject = new Folder()
        newProject.pageCreate()
        name.value = ""
    })
}

export { sumbitProject }



