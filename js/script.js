const controls = document.querySelectorAll('.control');
let currentModel = 0;
const models = document.querySelectorAll('.model-team');
const maxModels = models.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentModel -= 1;
        } else {
            currentModel += 1;
        }

        if (currentModel >= maxModels) {
            currentModel = 0;
        }

        if (currentModel < 0) {
            currentModel = maxModels -1;
        }

        models.forEach(model => model.classList.remove('current-model-team'));

        models[currentModel].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        models[currentModel].classList.add('current-model-team');
    });
});