const panles = document.querySelectorAll('.panel')

panles.forEach((item)=>{
    item.addEventListener('click',() => {
        panles.forEach((item) => {
           item.classList.remove('active');
        })
        item.classList.add('active')
    });
    
})

