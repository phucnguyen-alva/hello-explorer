// Select canvas elements by ID
const canvas1 = document.getElementById("riveCanvas1");
const canvas2 = document.getElementById("riveCanvas2");
const canvas3 = document.getElementById("riveCanvas3");
const canvas4 = document.getElementById("riveCanvas4");

// Initialize Rive animations for each canvas
const riveInstance1 = new rive.Rive({
  src: "planet.riv",
  canvas: canvas1,
  autoplay: true,
  artboard: "Artboard",
  stateMachines: ["State Machine 1"],
  fit: rive.Fit.CONTAIN,
  alignment: rive.Alignment.CENTER,
  onLoad: () => {
    resizeCanvas(canvas1, riveInstance1);
  },
});

const riveInstance2 = new rive.Rive({
  src: "planet.riv",
  canvas: canvas2,
  autoplay: true,
  artboard: "Artboard 3",
  stateMachines: ["State Machine 1"],
  fit: rive.Fit.CONTAIN,
  alignment: rive.Alignment.CENTER,
  onLoad: () => {
    resizeCanvas(canvas2, riveInstance2);
  },
});

// Function to resize canvas and Rive instances
function resizeCanvas(canvas, riveInstance) {
  if (canvas.parentElement) {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
}

// Listen for window resize events to resize all canvases
window.addEventListener("resize", () => {
  resizeCanvas(canvas1, riveInstance1);
  resizeCanvas(canvas2, riveInstance2);
});
// Array of sentences to cycle through
const sentences = [
    "Earth is home to millions of species, including humans.",
    "The planet's rotation causes day and night.",
    "Earth's atmosphere contains 21% oxygen.",
    "The Moon is Earth's only natural satellite.",
    "Earth has a magnetic field that protects it from solar wind."
  ];
  
  let currentSentenceIndex = 0;
  
  // Get the paragraph element
  const infoText = document.getElementById("infoText");
  
  // Add a click event listener to the paragraph
  infoText.addEventListener("click", () => {
    // Update the sentence index
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
  
    // Update the text content of the paragraph
    infoText.textContent = sentences[currentSentenceIndex];
  });
