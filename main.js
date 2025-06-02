const containerFaq = document.querySelectorAll('.container-faq');

containerFaq.forEach(faq => {
    faq.addEventListener('click', () => {
        console.log('click');

        //solo uno de ellos debe estar abierto, se pregunta cual tiene el atributo Open en details, ver por console
        //ya que details al darle click, agrega un atributo open, ahi iria la logica


        // Cierro los otros
        containerFaq.forEach(item => {
            if (item !== faq) {
                item.removeAttribute('open');
                const img = item.querySelector('.img-btn');
                if (img) img.src = "./assets/images/icon-plus.svg"; 
            }
        });

        // Cambia la imagen del acordeón actual
        const img = faq.querySelector('.img-btn');
        if (img) {
            img.src = faq.getAttribute('open') === null 
                ? "./assets/images/icon-minus.svg" 
                : "./assets/images/icon-plus.svg";
        }
    });
});