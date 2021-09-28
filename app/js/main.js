// menu
const logo = document.querySelector('.header__logo'),
      list = document.querySelector('.header__nav'),
      main = document.querySelector('main');

logo.addEventListener('click', () => {
    list.classList.add('active-list');
    logo.classList.add('opacity-logo');
})   

main.addEventListener('click', (event) => {
    if(!event.target.classList.contains('header__link')) {
        list.classList.remove('active-list');
        logo.classList.remove('opacity-logo');
    }
})



   //form
   const tellBox = document.querySelectorAll('.tell__box');
    
    const nam = document.getElementById("name"),
          gender = document.getElementById('gender'),
          country = document.getElementById('country'),
          city = document.getElementById('city'),
          birth = document.getElementById('birth'),
          file = document.getElementById('file'),
          img = document.querySelector('.tell__img'),
          text = document.querySelector('.tell__ok-text'),
          form = document.getElementById('form'),
          btn = document.querySelector('.tell__btn');


    tellBox.forEach(item => {

        item.addEventListener('input', () => {

            if(nam.value.length > 3 && gender.value.length < 7) {
                addActive([tellBox[1]]);
                addInput([nam, gender]);
                removeDis([country, birth, city]);
            } else {
                removeActive([tellBox[1]]);
                removeInput([nam, gender]);
                addDis([country, birth, city]);
            }
            
            if(country.value && birth.value && city.value) {
                    addActive([tellBox[2]]);
                    addInput([country, birth, city]);
                    removeDis([file]);
            } else {
                removeActive([tellBox[2]]);
                removeInput([country, birth, city]);
                addDis([file]);
            }
                    
            if (nam.value && gender.value && country.value && birth.value && city.value && file.value) {
                        addBtn(btn);
            } else {
                removeBtn(btn);
            }
        

        })
    })


        btn.addEventListener('click', () => {

            if(btn.classList.contains('active-btn')) {
                // setData();
                addActive([img, text]);
                setTimeout(wait, 3000);
            }
        })


    function addInput (data) {
        data.forEach(item => {
            item.classList.add('active-input');
        })
        
    }
    
    function removeInput (data) {
        data.forEach(item => {
            item.classList.remove('active-input');
        })
        
    }

    function addDis (data) {
        data.forEach(item => {
            item.setAttribute('disabled', 'disabled');
        })
    }


    function removeDis (data) {
        data.forEach(item => {
            item.removeAttribute('disabled');
        })
    }

    function addActive (data) {
        data.forEach(item => {
            item.classList.add('active');
        })
    }

    function removeActive (data) {
        data.forEach(item => {
            item.classList.remove('active');
        })
    }

    function addBtn (data) {
        data.classList.add('active-btn')
    }

    function removeBtn (data) {
        data.classList.remove('active-btn')
    }

    function wait () {
        console.log('wait...');
        removeActive([img, text]);
        removeBtn(btn);
        form.reset();
        removeInput([nam, gender, country, birth, city]);
        removeActive([tellBox[1], tellBox[2]]);
        addDis([country, birth, city, file]);
    }


    // отправка формы 

    /*
    let allInput = document.querySelectorAll('input');

    let data = {};

    
    async function setData() {
        data[0] = gender.value;
        allInput.forEach((item, i) => {
            data[i + 1] = item.value;
        })

        let dataForm = await fetch('someurl', {
            method: post,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(data)
        })
    
        let result = dataForm.json();
        console.log(result)
       
    }

    */

 