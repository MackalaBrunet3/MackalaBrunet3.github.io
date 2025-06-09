$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 700, 100, 20, "pink");
    createPlatform(250, 650, 100, 20, "pink");
    createPlatform(400, 600, 100, 20, "pink");
    createPlatform(550, 550, 100, 20, "pink");
    createPlatform(450, 450, 100, 20, "pink");
    createPlatform(200, 500, 100, 20, "pink");
    createPlatform(700, 450, 100, 20, "pink");
    createPlatform(850, 550, 100, 20, "pink");
    createPlatform(950, 550, 100, 20, "pink");
    createPlatform(1100, 450, 100, 20, "pink");
    createPlatform(1250, 350, 100, 20, "pink");
    createPlatform(550, 350, 100, 20, "pink");
    createPlatform(350, 250, 100, 20, "pink");
    createPlatform(200, 350, 100, 20, "pink");
    createPlatform(100, 350, 100, 20, "pink");
    createPlatform(1300, 250, 100, 20, "pink");
    createPlatform(1150, 150, 100, 20, "pink");
    createPlatform(1000, 250, 100, 20, "pink");
    createPlatform(900, 250, 100, 20, "pink");
    createPlatform(750, 150, 100, 20, "pink");


    



    // TODO 3 - Create Collectables
    createCollectable("diamond", 600, 500, 0.5, 0.7);
    createCollectable("diamond", 1250, 300, 0.5, 0.7);
    createCollectable("diamond", 150, 100, 0.5, 0.7);
    createCollectable("diamond", 750, 100, 0.5, 0.7);
    


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 300, 1000);
    createCannon("bottom", 750, 1000);
    createCannon("bottom", 1000, 1000);
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
