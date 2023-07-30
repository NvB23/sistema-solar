const planetas = document.querySelectorAll(".planeta");

planetas.forEach((planeta) => {
    planeta.addEventListener('click', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 1500, left: 0, behavior: 'smooth'});
        }

        const planetaSelecionado = document.querySelector('.selecionado');
        planetaSelecionado.classList.remove('selecionado');
        planeta.classList.add('selecionado');
        
        const imagemPlanetaGrande = document.querySelector('.img-planeta-selecionado');

        const idPlaneta = planeta.attributes.id.value;
        imagemPlanetaGrande.src = `./fotos/${idPlaneta}.jpg`;

        const nomePlaneta = document.getElementById('nome-planeta');
        nomePlaneta.innerText = planeta.getAttribute('data-name');

        const descricaoPlaneta = document.getElementById('descricao-planeta');
        descricaoPlaneta.innerText = planeta.getAttribute('data-description');

        const areaPlaneta = document.getElementById('area');
        areaPlaneta.innerText = planeta.getAttribute('area');

        const periodoPlaneta = document.getElementById('periodo');
        periodoPlaneta.innerText = planeta.getAttribute('periodo');

        const gravidadePlaneta = document.getElementById('gravidade');
        gravidadePlaneta.innerText = planeta.getAttribute('gravidade');

        const idadePlaneta = document.getElementById('idade');
        idadePlaneta.innerText = planeta.getAttribute('idade');
    })
})
