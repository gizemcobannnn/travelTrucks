🚐 Travel Trucks
A simple React project where users can browse a list of travel campers, favorite them, and view their details.

📌 Overview
Travel Trucks is a camper catalog web app built with React, Redux Toolkit, and Axios. It fetches camper data from an external API and allows users to filter, search, favorite, and explore detailed information about each camper.

🌐 Live Demo
https://travel-trucks-tan-eight.vercel.app/

📂 Features
🛻 View a catalog of campers
❤️ Favorite and unfavorite campers
🔍 Filter campers
      Location
      Vehicle Type (Van, Fully Integrated, Alcove)
      Vehicle Equipment (AC, Automatic, Kitchen, TV, Bathroom)
📖 View detailed information about each camper
🔄 Load more campers dynamically

⚙️ Project Structure
services/
fetchCampers and fetchCamper services use Axios to make GET requests to the API.
API base URL is configured in campersOps.js.
redux/camperSlice.js
Manages the camper state via Redux Toolkit.
Handles API call stages: pending, fulfilled, and rejected.

Pages:
Home — Introduction and welcome page.
Catalog — Camper listing page with filtering, favoriting, and details.

🚀 Technologies Used
React
Redux Toolkit
Axios
React Router
Tailwind CSS
Vite
Vercel (for deployment)

![image](https://github.com/user-attachments/assets/e069cec0-ae22-4b95-91f5-f7ed44748c48)

Figma Design: https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&p=f&t=IlZRlUevquVoQypG-0 
This project design was made according to this Figma design.

🛠️ How to Run Locally
bash
Kopyala
Düzenle
git clone https://github.com/yourusername/travel-trucks.git
cd travel-trucks
npm install
npm run dev

📧 Contact and Developed by:
Gizem Genç
[LinkedIn](https://www.linkedin.com/in/gizem-genc/)