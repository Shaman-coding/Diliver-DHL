const block_button = document.querySelector('.block_button'),
      btnLearn = block_button.querySelector('.btnLearn'),
      descText = document.querySelector('.descText');

btnLearn.addEventListener('click', (stl) => {
    stl = prompt("Введите важную информацию!")

    
    if(stl != null && stl != "" && stl != Number && stl.length >= 20){
        descText.style.color = '#ffffff';
        descText.innerHTML = stl;
        
    } else {
        alert("Произошла ошибка, проверьте ваши данные");
        for(let i = 0; i < 5; i++){
            stl = prompt("Введите важную информацию!")
            if(stl == true){
                descText.style.color = 'red';
                descText.innerHTML = stl;
            }else{
                alert("Произошла ошибка");
            }

        }
    }
});



