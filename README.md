# 🌤️ Weather Now

## 🎯 Project Overview

**Weather Now** is a modern, responsive weather application built for **Jamie**, an outdoor enthusiast who loves to plan activities based on the weather.  
It uses the **Open-Meteo API** to fetch real-time weather details and dynamically updates the background video to match current conditions.

---

## 🔗 Live Demo

👉 [**View Live App Here**](https://stackblitz.com/github/MadhavAgrawal06/Weather-Now)  

---

## 🖼️ Screenshot

Here’s how **Weather Now** looks in action 👇  

![Weather Now Screenshot](https://raw.githubusercontent.com/MadhavAgrawal06/Weather-Now/main/public/screenshot.png)
 
---

## ⚙️ Core Features

✅ **City-based Weather Search** — Get instant weather updates for any city  
✅ **Real-Time Data** — Powered by [Open-Meteo API](https://open-meteo.com/)  
✅ **Dynamic Background Videos** — Weather visuals change based on conditions  
✅ **Clean UI** — Styled using **Bootstrap 5** and custom CSS  
✅ **Enter Key Search** — Press `Enter` to fetch weather instantly  
✅ **Responsive Design** — Works across all devices  
✅ **Error & Loading States** — Smooth user experience  

---

## 🧠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Bootstrap 5 + Custom CSS
- **API:** Open-Meteo Weather API
- **Language:** JavaScript (ES6+)
- **Deployment:** StackBlitz / Netlify

---

## 🌍 API Used

**Open-Meteo API**

- **Geocoding Endpoint:** Gets coordinates of the entered city  
- **Forecast Endpoint:** Fetches current temperature, humidity, precipitation, wind speed, and cloud cover  

Example API call:
https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current=temperature_2m,precipitation,cloud_cover,wind_speed_10m,relative_humidity_2m


## 🧭 User Flow

1. **Jamie opens Weather Now.**  
2. **Enters a city name** (e.g., *London* or *Delhi*).  
3. The app **fetches coordinates** using the **Open-Meteo Geocoding API**.  
4. Then it **retrieves real-time weather** for that location.  
5. A **dynamic weather video** plays in the background, matching the weather condition.  
6. **Weather stats** (temperature, humidity, wind speed, etc.) appear instantly.

---

## 🧑‍💻 Developer Notes

This app was developed as part of a **Frontend Developer assignment**, focusing on:

- ⚛️ **React fundamentals** — Hooks. 
- 🌦️ **API Integration** — Fetching live data from Open-Meteo.  
- 💅 **UI/UX Design** — Clean and responsive layout using Bootstrap.  
- 🎥 **Dynamic Media Integration** — Weather-driven background videos.  
- 💡 **Practical Use Case** — Built for Jamie’s real-world need to plan outdoor activities.

---

## 📜 License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

**Made with ❤️ for Jamie — because every outdoor adventure deserves perfect timing.**
