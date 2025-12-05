Quick Notes

Quick Notes is a minimal and fast note-taking application designed for quick thoughts, meeting notes, and temporary writing without the need to create an account or log in. It works entirely in the browser using localStorage, allowing users to type freely and optionally download their notes as a .txt file.
This makes it suitable for both online and offline use.

The goal of Quick Notes is to provide a distraction-free writing environment where users can jot down information instantly and save it only when they choose to.

Features

Clean and minimal note-taking interface

Notes automatically stored in the browser using localStorage

Download notes as a .txt file

Works without login or internet connection

Simple and lightweight React application

Technologies Used

React

Vite

TailwindCSS

localStorage for persistence

Installation

Follow the steps below to run the project locally.

1. Clone the repository
git clone https://github.com/Muksit86/Quick-Notes.git

2. Navigate into the client folder
cd Quick-Notes/Client

3. Install dependencies
npm install

4. Start the development server
npm run dev


The application will be available at:

http://localhost:5173/


(depending on your Vite configuration)

Project Structure
Client/
│── src/
│   ├── components/     Main UI components
│   ├── App.jsx         Application root
│   ├── main.jsx        Entry point
│── index.html
│── package.json

Usage

Start typing your notes in the main text area.

Notes are saved temporarily in localStorage.

Add a title if desired.

Use the save button to download your notes as a .txt file.

Use the delete button to clear both the notes and title.

Quick Notes does not sync or upload your content. All data stays inside your browser until you delete it.

License

This project is open-source and available under the MIT License.
