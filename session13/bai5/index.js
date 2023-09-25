feedBack = () => {
    let scoreBtn = document.querySelectorAll(".score label");
    let score = 0;
    let deleteBtn = document.querySelectorAll(".list__delete");
    let chooseBtn;
    for (let i = 0; i < scoreBtn.length; i++) {
        scoreBtn[i].addEventListener("click", (event) => {
            chooseBtn = event.target;
            for (let j = 0; j < scoreBtn.length; j++) {
                scoreBtn[j].style.backgroundColor = "#dedcdc7a";
                scoreBtn[j].style.color = "#333";

            }
            chooseBtn.style.backgroundColor = " palevioletred";
            chooseBtn.style.color = "#fff";
            score = i + 1;
        })
    }
    let sendBtn = document.querySelector(".send");
    sendBtn.addEventListener("click", () => {
        let value = document.querySelector(".comment").value;
        if (score > 0 && value != "") {
            let clone = document.querySelector(".feedback__content ul li").cloneNode(true);
            clone.querySelector(".list__score span").innerHTML = score;
            clone.querySelector(".list__comment p").innerHTML = value;
            document.querySelector(".feedback__content ul").appendChild(clone);
        }
        else {
            alert("moi nhap thong tin va chon diem");
        }
        score = 0;
        document.querySelector(".comment").value = "";
        chooseBtn.style.backgroundColor = "#dedcdc7a";
        chooseBtn.style.color = "#333";
        deleteFeedBack();
        editFeedback();
    })
}
feedBack();

deleteFeedBack = () => {
    deleteBtn = document.querySelectorAll(".list__delete");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove();
        })

    }
}



editFeedback = () =>{
    let btnEdit = document.querySelectorAll(".list__edit");
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener("click", (event)=>{
            event.target.parentNode.parentNode.querySelector(".edit").style.display = "block";
            for (let j = 0; j < btnEdit.length; j++) {
                btnEdit[j].querySelector(".edit").style.display = "none";
            }
            event.target.parentNode.parentNode.querySelector(".edit").style.display = "block";
           event.target.parentNode.querySelector("textarea").addEventListener("keypress",(event, keyCode)=>{
                if(event.keyCode == 13){
                    console.log(event.target.parentNode.parentNode.querySelector(".list__comment p"));
                    event.target.parentNode.parentNode.querySelector(".list__comment p").innerHTML = event.target.value;
                    event.target.style.display = "none";
                }
            })
          })
       
       
       
    }
}



