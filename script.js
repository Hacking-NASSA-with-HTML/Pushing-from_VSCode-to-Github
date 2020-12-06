function setDate() {
  const NOW = new Date();
  const SECONDS = NOW.getSeconds();
  console.log(SECONDS);
}

setInterval(setDate, 1000);