// Select canvas elements by ID
const canvas1 = document.getElementById("riveCanvas1");
const canvas2 = document.getElementById("riveCanvas2");

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
//ChatGPT - "generate 10 concise (about 10 words) sentences about the Earth that 5-year-old exciting to learn about."
const sentences = [
    "Earth is a big ball where all of us live!",
    "It has land, water, mountains, forests, and colorful animals!",
    "Earth spins like a top, making day and night happen!",
    "Earth has invisible air we breathe to stay alive!",
    "There’s more water than land, making Earth a blue planet!",
    "Earth’s middle is super hot, like lava in volcanoes!",
    "We live on Earth’s crust, like frosting on a cake!",
    "Earth orbits the Sun, taking one whole year for one trip!",
    "Clouds and rainbows make Earth’s sky so magical and pretty!",
    "Earth has North and South Poles, covered with shiny white ice!",
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
// Create the custom cursor element
const customCursor = document.createElement('div');
customCursor.id = 'customCursor';
document.body.appendChild(customCursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (event) => {
  customCursor.style.left = `${event.pageX}px`;
  customCursor.style.top = `${event.pageY}px`;
});