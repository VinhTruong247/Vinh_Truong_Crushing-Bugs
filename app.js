(() => {
    const buttons = document.querySelectorAll('#buttonHolder img'),
    pieces = document.querySelectorAll('.puzzle-pieces'),
    puzzles = document.querySelectorAll('.puzzle-pieces img'),
    warZone = document.querySelectorAll('.drop-zone'),
    frame = document.querySelector(".puzzle-board");

let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

    function changeImageSet() {

        imageNames.forEach((piece, index) => {
            puzzles[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
        });

        frame.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
        
        debugger;
    }


    function allowDrag(event) {
        console.log('draging...', event.target.id);

        event.dataTransfer.setData("draggedImg", this.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('Image Is Here')
    }

    function allowDrop(event) {

        if (this.children.length >= 1) {return;}

        console.log('Give Me The Image');

        let droppedImage = event.dataTransfer.getData("draggedImg", this.id);

        event.target.appendChild(document.querySelector(`#${droppedImage}`));
    }

    buttons.forEach(button =>button.addEventListener('click', changeImageSet));
    puzzles.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    warZone.forEach(zone => {
         zone.addEventListener('dragover', allowDragOver);
         zone.addEventListener('drop', allowDrop);
    });

    changeImageSet.call(buttons[0]);

})();