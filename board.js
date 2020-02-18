// Grap IDS

// const topLeft = document.getElementById('tl');
// const topMiddle = document.getElementById('tm');
// const topRight = document.getElementById('tr');
// const middleLeft = document.getElementById('ml');
 const middle = document.getElementById('m');
// const middleRight = document.getElementById('mr');
// const bottomLeft = document.getElementById('bl');
// const bottom = document.getElementById('bm');
// const bottomRight = document.getElementById('br');

window.onload = () => {
	// middle.onkeypress = event => {
	// 	if (event.key == 'x') {
    //         middle.classList.add("backgroundColor")
    //         middle.disabled = true;
	// 	} else if (event.key == 'o') {
    //         middle.classList.add("backgroundColor2");
    //         middle.disabled = true;
	// 	}
    // };

    const allInputs = document.getElementsByTagName("input");
        // console.log(allInputs);

        for (let i = 0; i < allInputs.length; i++) {
            // console.log(allInputs[i]);
            allInputs[i].onkeypress = event => {
                console.log(allInputs[i])
                if(event.key == 'x') {
                    allInputs[i].classList.add('backgroundColor')
                    allInputs[i].disabled = true;
                } else if (event.key == 'o') {
                    allInputs[i].classList.add('backgroundColor2')
                    allInputs[i].disabled = true;
                }
            }
        }
};
    
