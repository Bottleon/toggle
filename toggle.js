const animalToggle = document.getElementById("animalToggle"),
  plantToggle = document.getElementById("plantToggle"),
  lionImage = document.getElementById("jsLionImage"),
  tigerImage = document.getElementById("jsTigerImage"),
  elephantImage = document.getElementById("jsElephantImage"),
  lilyImage = document.getElementById("jsLilyImage"),
  cosmosImage = document.getElementById("jsCosmosImage"),
  roseImage = document.getElementById("jsRoseImage");

function roseShowImage() {
  if (roseImage.style.display === "none") {
    roseImage.style.display = "block";
  } else {
    roseImage.style.display = "none";
  }
}

function cosmosShowImage() {
  if (cosmosImage.style.display === "none") {
    cosmosImage.style.display = "block";
  } else {
    cosmosImage.style.display = "none";
  }
}

function lilyShowImage() {
  if (lilyImage.style.display === "none") {
    lilyImage.style.display = "block";
  } else {
    lilyImage.style.display = "none";
  }
}

function elephantShowImage() {
  if (elephantImage.style.display === "none") {
    elephantImage.style.display = "block";
  } else {
    elephantImage.style.display = "none";
  }
}

function tigerShowImage() {
  if (tigerImage.style.display === "none") {
    tigerImage.style.display = "block";
  } else {
    tigerImage.style.display = "none";
  }
}

function lionShowImage() {
  if (lionImage.style.display === "none") {
    lionImage.style.display = "block";
  } else {
    lionImage.style.display = "none";
  }
}

function handleAnimalClick() {
  if (animalToggle.style.display === "none") {
    animalToggle.style.display = "block";
  } else {
    animalToggle.style.display = "none";
  }
}

function handlePlantClick() {
  if (plantToggle.style.display === "none") {
    plantToggle.style.display = "block";
  } else {
    plantToggle.style.display = "none";
  }
}
