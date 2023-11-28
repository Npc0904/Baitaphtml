
let jobs = [];
let editing = -1;
clickButton = document.getElementsByClassName('container__button')[0];
clickButton.addEventListener('click', () => {
    text = document.getElementById('text').value;
    jobs.push({ text: text, backgroundColor: jobs.length % 2 == 0 ? 'rgb(211,204,204)' : 'bisque' })
    renderJobs();
})
renderJobs = () => {
    let result = '';
    for (let i = 0; i < jobs.length; i++) {
        result += `<div style="background-color: ${jobs[i].backgroundColor};" class="container__sub__job">
        <div class="container__job__main">
        <p>${jobs[i].text}</p>
    </div>
        <div class="container__job__fix">
                    <span onclick ="clickEdit(${i})" class="material-symbols-outlined edit">
                        edit_square
                    </span>
                    <span onclick ="clickClose(${i})" class="material-symbols-outlined close">
                        close
                    </span>
                </div>
                </div>
        `
        document.getElementById('text').value = '';

    }
    document.getElementsByClassName('container__main__job')[0].innerHTML = result
}
clickClose = (i) => {
    jobs.splice(i, 1)
    renderJobs();
}
clickEdit = (i) => {
    document.getElementById('text').value = document.querySelectorAll('.container__job__main p')[i].textContent;
    document.querySelectorAll('.container__job__main p')[i].textContent = '';
    clickButton.addEventListener('click', () => {
        text = document.getElementById('text').value;
        document.querySelectorAll('.container__job__main p')[i].textContent = text;
    })
}