let url =
  "https://api.open-meteo.com/v1/forecast?latitude=45.439695&longitude=4.3871779&hourly=temperature_2m";
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    document.querySelector("#datameteo").innerHTML =
      data.hourly.temperature_2m[0];
  })
);
