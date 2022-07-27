let randomNumber = parseInt((Math.random()*100)+1);

let count = 0;

let x = 12;

function check() {
    debugger;
    count++;

    let guessNum = +document.getElementById("guessNum").value;

    if (guessNum==x) {

        // document.getElementById("text").innerHTML= "Chính xác";

        alert("ok")

        return;

    }   else if (guessNum!=x && count<5) {

            if (guessNum > x) {

                // document.getElementById("text").innerHTML = "Số hơi lớn"
                alert("lon qua")

            } else {
                
                // document.getElementById("text").innerHTML = "Số hơi nhỏ"
                alert("be qua")
            }

        }   else {

            document.getElementById("text").innerHTML = "Thua"
            
        }


}