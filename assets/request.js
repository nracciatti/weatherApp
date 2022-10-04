const key = "1b396295a8481aee0447ad8318feee0c";

const requestCity = async (city) => {
  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const query = `?q=${city}&appid=${key}`;

  try {
    const response = await fetch(baseURL + query);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// requestCity("cordoba");
