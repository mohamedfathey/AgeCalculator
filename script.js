function calaulateAge(){
    const today = new Date();
    const birthdateInput= document.getElementById("birthdate").value;
    const birthdateparts = birthdateInput.split("-");
    const birthDay = birthdateparts[0];
    const birthMonth = birthdateparts[1]-1 ;
    const birthYear = birthdateparts[2];
    const birthDate=new Date(birthYear,birthMonth,birthDay);


    console.log(birthdateInput);
    console.log(birthdateparts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) =>{
        return(
            Object.prototype.toString.call(date) === "[object Date]" &&!isNaN(date)
);
    };

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format ");
        return;
    }


    const ageInMilliseconds = today - birthDate ;
    const  ageInSeconds = Math.floor(ageInMilliseconds/1000);
    const  ageInMinutes = Math.floor(ageInSeconds/60);
    const  ageInHours = Math.floor(ageInMinutes/60);
    const  ageInDays = Math.floor(ageInHours/24);
    const  ageInWeekx = Math.floor(ageInDays/7);
    const  ageInMonuths = Math.floor(ageInDays/30.436875);
    const  ageInYears = Math.floor(ageInDays/365.25);


    const resultContainer = document.getElementById("reseltContainer");
    const result = document.getElementById("result");

result.innerHTML = `<div class="result-item"> 
<h3>Age:</h3>
<p>${ageInYears} Years ${ageInMonuths % 12} months ${ageInDays % 30} days </p>
</div>

<div class="result-item"> 
<h3>Months Passed:</h3>
<p>${ageInMonuths} Months  </p>
</div>

<div class="result-item"> 
<h3>Days Passed:</h3>
<p>${ageInDays} Days  </p>
</div>

<div class="result-item"> 
<h3>Hours Passed:</h3>
<p>${ageInHours} Hours  </p>
</div>


<div class="result-item"> 
<h3>Minutes Passed:</h3>
<p>${ageInMinutes} Minutes  </p>
</div>

<div class="result-item"> 
<h3>Seconds Passed:</h3>
<p>${ageInSeconds} Seconds  </p>
</div>

`;

    resultContainer.style.display="block";

}


const ageCalculatirForm = document.getElementById("ageCalculator");
ageCalculatirForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    calaulateAge();

});
