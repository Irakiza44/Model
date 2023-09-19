'use strict';

const model = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')
const btnOpenModel = document.querySelectorAll('.show-modal')

for (let i = 0; i < btnOpenModel.length; i++) {

    const openModel = function () {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }

    const closeModel = function () {
        model.classList.add('hidden');
        overlay.classList.add('hidden')
    }

    btnOpenModel[i].addEventListener('click', openModel);
    btnClose.addEventListener('click', closeModel)
    overlay.addEventListener('click', closeModel)

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !model.classList.contains('hidden')) {
            closeModel()
        }
    })
}