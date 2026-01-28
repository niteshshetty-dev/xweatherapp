Application Requirements
Create a weather application that provides real-time weather information based on user-searched city names, ensuring a seamless user experience.

API Endpoint: https://api.weatherapi.com/v1/current.json

Params:

Key: "Your_API_KEY"

q: "city_name"

Upon searching a city, you must display the weather data for that city. For example, when we search for "Pune": The search must take place only after we click on the Search button.
The message "Loading data…" must appear just below the search bar while the data is being fetched.
We must get an alert stating "Failed to fetch weather data" if we try to search for an invalid city name

NOTE:

You must use an **input **element to create the search bar.
You must use a button element to create the Search button.
You must mention "weather-cards" as the class name for the div containing all the cards.
You must mention "weather-card" as the class name for the cards that you show for displaying the Temperature, Humidity, Condition, Wind Speed.
You must use a p element to display the loading message "Loading data…"
