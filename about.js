      // Initialize the first Rive animation
      const canvas1 = document.getElementById("riveCanvas1");
      const riveInstance1 = new rive.Rive({
        src: "planet.riv",
        canvas: canvas1,
        autoplay: true,
        artboard: "Artboard 4",
        stateMachines: ["State Machine 1"],
        fit: rive.Fit.CONTAIN,
        alignment: rive.Alignment.CENTER,
        onLoad: () => {
          resizeCanvas(canvas1, riveInstance1);
        },
      });

      // Initialize the second Rive animation
      const canvas2 = document.getElementById("riveCanvas2");
      const riveInstance2 = new rive.Rive({
        src: "planet.riv",
        canvas: canvas2,
        autoplay: true,
        artboard: "Artboard 2",
        stateMachines: ["State Machine 1"],
        fit: rive.Fit.CONTAIN,
        alignment: rive.Alignment.CENTER,
        onLoad: () => {
          resizeCanvas(canvas2, riveInstance2);
        },
      });

      // Function to resize a canvas and its Rive instance
      function resizeCanvas(canvas, riveInstance) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        riveInstance.resizeDrawingSurfaceToCanvas();
      }

      // Listen for window resize events to dynamically adjust both canvases
      window.addEventListener("resize", () => {
        resizeCanvas(canvas1, riveInstance1);
        resizeCanvas(canvas2, riveInstance2);
      });
      
      // Array of sentences to cycle through
      //ChatGPT - "generate 10 concise (about 10 words) sentences about the Moon that 5-year-old exciting to learn about."
      const moonFacts = [
        "The Moon is a glowing ball that lights up night skies!", 
        "It has craters like giant holes from space rock crashes.",  
        "The Moon's surface is dusty, like a big playground for astronauts.",
        "It changes shapes: full, half, and even tiny crescents!",
        "Wolves in stories love to howl at the bright Moon.", 
        "The Moon helps make ocean waves dance back and forth.", 
        "We only see one side of the Moon from Earth!",
        "Astronauts bounced like kangaroos on the Moon’s low gravity.",  
        "The Moon has no air, so spacesuits are a must!",  
        "It takes the Moon about a month to orbit Earth.",  
      ];

      let currentMoonFactIndex = 0;

      // Get the paragraph element
      const infoText2 = document.getElementById("infoText2");

      // Add a click event listener to the paragraph
      infoText2.addEventListener("click", () => {
        // Update the sentence index
        currentMoonFactIndex = (currentMoonFactIndex + 1) % moonFacts.length;

        // Update the text content of the paragraph
        infoText2.textContent = moonFacts[currentMoonFactIndex];
      });

      // Create the custom cursor element
const customCursor = document.createElement('div');
customCursor.id = 'customCursor';
document.body.appendChild(customCursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (event) => {
  customCursor.style.left = `${event.pageX}px`;
  customCursor.style.top = `${event.pageY}px`;
});