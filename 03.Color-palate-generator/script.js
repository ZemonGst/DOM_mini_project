const colorGeneratorBtn = document.querySelector("#colorGeneratorBtn");
const paletteSection = document.querySelector(".palette-section");
const colorMode = document.querySelector("#colorMode");
const colorCode = document.querySelector("#colorCode");

function toneSelector(tone) {
  let r, g, b;

  if (tone === "dark") {
    r = Math.floor(Math.random() * 145);
    g = Math.floor(Math.random() * 145);
    b = Math.floor(Math.random() * 145);
  } else if (tone === "light") {
    r = Math.floor(Math.random() * 145) + 135;
    g = Math.floor(Math.random() * 145) + 135;
    b = Math.floor(Math.random() * 145) + 135;
  } else {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }

  return { r, g, b };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}

colorGeneratorBtn.addEventListener("click", () => {
  paletteSection.innerHTML = "";

  const selectedTone = colorMode.value;
  const selectedCode = colorCode.value;

  for (let i = 0; i < 4; i++) {
    const { r, g, b } = toneSelector(selectedTone);

    let colorValue;

    if (selectedCode === "hex") {
      colorValue = rgbToHex(r, g, b);
    } else {
      colorValue = `rgb(${r}, ${g}, ${b})`;
    }

    const paletteCard = document.createElement("div");
    paletteCard.classList.add("palette-card");
    paletteCard.style.background = `rgb(${r}, ${g}, ${b})`;

    const colorCodeText = document.createElement("div");
    colorCodeText.classList.add("color-code");
    colorCodeText.innerText = colorValue;

    paletteCard.appendChild(colorCodeText);
    paletteSection.appendChild(paletteCard);
  }
});
