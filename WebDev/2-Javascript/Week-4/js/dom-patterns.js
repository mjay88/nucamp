function showPattern(){
  const colorsArr = [
        "saddlebrown",
        "sienna",
        "peru",
        "chocolate",
        "darkred",
        "maroon",
        "darkorange",
        "goldenrod",
        "darkgoldenrod",
        "firebrick",
        "forestgreen",
        "olive",
        "darkolivegreen",
        "burlywood",
        "tan",
        "#993333",
        "#996633",
        "#FFCC66",
        "#663300",
        "#FF9933",
    ];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;
    
    const fragment = document.createDocumentFragment();
    while (width > 50){
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement("div");

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];
        newDiv.style.borderRadius = "20%"
        
        fragment.appendChild(newDiv);
        topPosition += 10;
        leftPosition += 10; 
        width -= 20;
        height -= 20;
    }
    document.body.appendChild(fragment);
}