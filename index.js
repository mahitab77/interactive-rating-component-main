
///////////////////////chosen rating////////////////////////////
var optionsr=document.getElementsByClassName("opti")
var resultsentence=document.getElementById("outtext")
var errorMessage = document.getElementById("error-message"); 


function chosen(e) {
    
    var ratebutton =  e.target.innerText
    
    // Reset background color for all buttons
    for (var i = 0; i < optionsr.length; i++) {
        optionsr[i].style.backgroundColor = 'hsl(213, 19%, 18%)'
    }
    
    resultsentence.innerText='You selected '+ ratebutton +  ' out of 5'
    e.target.style.backgroundColor='grey'
    
    //if a rating is chosen no error messages
    errorMessage.style.display = 'none'

}

for (x=0; x<5; x++) {
   
    optionsr[x].onclick = chosen
       
}

//////////////////////show thanks////////////////////
var sbmitbtn=document.getElementById("submitbutton")
var ratescreen=document.getElementById("rate")
var thanksscreen=document.getElementById("thank")

function showthanks() {
    var selectedRating = false
    
    for (var i = 0; i < optionsr.length; i++) {
        if (optionsr[i].style.backgroundColor === 'grey') {
            selectedRating = true;
            break;
        }
    }

    if (selectedRating) {
        ratescreen.style.display = 'none';
        thanksscreen.style.display = 'flex';
        errorMessage.style.display = 'none'; // Hide the error message if a rating is selected
    } else {
        errorMessage.style.display = 'block'; // Show the error message if no rating is selected
    }
}






////////////////////////////////////////////

//function showthanks ()
//{
   
//ratescreen.style.display='none'
//thanksscreen.style.display='flex'
//}

sbmitbtn.onclick = showthanks
var closeErrorButton = document.getElementById("close-error");
// Close the error message when the close button is clicked
function closeerrormsg(){
    errorMessage.style.display = 'none';
}
closeErrorButton.onclick= closeerrormsg