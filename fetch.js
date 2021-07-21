class Fetch {
  async getCurrent(input) {
    var myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

    //make request to url

    var response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
    );

    var data = await response.json();

    console.log(data);

    return data;
  }
}

