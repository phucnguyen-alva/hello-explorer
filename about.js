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

      // Array of Moon facts
      const moonFacts = [
        "The Moon is Earth's only natural satellite.",
        "The Moon is about 1/6th the size of Earth.",
        "It takes 27.3 days for the Moon to orbit the Earth.",
        "The Moon has no atmosphere, which means no sound can be heard.",
        "The Moon's surface is covered with craters from meteor impacts.",
        "Humans first landed on the Moon in 1969 during the Apollo 11 mission.",
        "The Moon influences Earth's tides due to its gravitational pull.",
        "The far side of the Moon was first photographed in 1959 by the Soviet Luna 3 probe."
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