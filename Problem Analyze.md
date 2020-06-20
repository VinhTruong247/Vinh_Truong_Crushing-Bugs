<h2>Problem Analyze</h2>
<p>This md file was created for showing what bugs we are having here and how are we going to fix it</p>  
<h4>Bugs:</h4>
<p>1) Limit drop zones to one puzzle-piece</p>
<p>2) Need a reset add-on to refresh the game board</p>
<h4>Solutions:</h4>
<p>1) Add in "if (this.children.length >= 1) {return;}" this will max the drop box to 1, each puzzle-piece becomes a child of the dropzone in DOM and send the other back to the puzzle holder</p>
<p>2) appendChild takes a paremeter in it's ()'s  that parameter is the specific img that we want to return to the side area (original area)</p>
<h4>Research Links</h4>
<p>https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children</p>
<p>https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild</p>
<p>https://stackoverflow.com/questions/40413395/limit-number-of-droppable-dragged-items-inside-a-container</p>
