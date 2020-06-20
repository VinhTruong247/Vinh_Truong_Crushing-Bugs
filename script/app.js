(() => {
    const buttons = document.querySelectorAll('#buttonHolder img'),
        pieces = document.querySelector('.puzzle-pieces'),
        dropbox = document.querySelectorAll('.drop-zone'),
        frame = document.querySelector(".puzzle-board"),
        puzzle = document.querySelectorAll('.puzzle-image');


    let imageNames = ['topLeft', 'topRight', 'BottomLeft', 'BottomRight'];

    function changeImageSet() {
        imageNames.forEach((piece, index) => {
                puzzle[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
            })
            
        frame.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

        dropbox.forEach((box) => {
            while (box.firstChild) {
                let currentChild = box.removeChild(box.firstChild);
                pieces.appendChild(currentChild);
            }
        })

    }
    debugger;
    function allowDrag(event) {
        console.log('dragging...', event.target.id);

        event.dataTransfer.setData('draggedImg', this.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('You can drag now');

    }

    function allowDrop(event) {
        console.log('You can drop now');
        let droppedImage = event.dataTransfer.getData("draggedImg", this.id);
        event.target.appendChild(document.querySelector(`#${droppedImage}`));
    }
}

    buttons.forEach(button => button.addEventListener('click', changeImageSet));
    puzzle.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    dropbox.forEach(zone => {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    });

    changeImageSet.call(buttons[0]);
})();