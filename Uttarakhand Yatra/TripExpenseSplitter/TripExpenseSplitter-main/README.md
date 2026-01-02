<div align="center">
  <h1 align="center">Trip Expense Splitter</h1>
  <p align="center">
    A simple, fast, and private way to manage and split expenses for group trips, vacations, and events.
    <br />
    This tool runs entirely in your browser, ensuring your financial data stays on your device.
    <br />
    <br />
    <a href="https://hookstar1993.github.io/TripExpenseSplitter/"><strong>🚀 View Live Demo</strong></a>
    ·
    <a href="https://github.com/hookstar1993/TripExpenseSplitter/issues">Report Bug</a>
    ·
    <a href="https://github.com/hookstar1993/TripExpenseSplitter/issues">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License: MIT">
  <a href="https://github.com/hookstar1993/TripExpenseSplitter/issues">
    <img src="https://img.shields.io/github/issues/hookstar1993/TripExpenseSplitter" alt="Issues">
  </a>
  <a href="https://github.com/hookstar1993/TripExpenseSplitter/stargazers">
    <img src="https://img.shields.io/github/stars/hookstar1993/TripExpenseSplitter" alt="Stars">
  </a>
</div>

---

<details>
  <summary>📋 Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">🌟 About The Project</a></li>
    <li><a href="#-features">✨ Features</a></li>
    <li><a href="#-screenshots">📸 Screenshots</a></li>
    <li><a href="#-technologies-used">🛠️ Technologies Used</a></li>
    <li><a href="#-how-to-use">🚀 How to Use</a></li>
    <li><a href="#-contributing">🤝 Contributing</a></li>
    <li><a href="#-license">📜 License</a></li>
  </ol>
</details>

---

## 🌟 About The Project

<div align="center">
  <a href="https://hookstar1993.github.io/TripExpenseSplitter/">
    <img src="https://hookstar1993.github.io/TripExpenseSplitter/img/LightMode.png" alt="Project Demo">
  </a>
</div>
<br>

Trip Expense Splitter is a client-side web application designed to simplify expense management for groups. Say goodbye to complex spreadsheets and privacy-invading apps. With this tool, you can effortlessly track who paid for what and see a clear summary of who owes whom, all without ever creating an account or sending your data to a server.

---

## ✨ Features

-   🚀 **No Sign-Up Required**: Use the tool instantly without creating an account.
-   🔒 **Privacy Focused**: All data is stored locally in your browser's `localStorage`. Nothing is ever sent to a server.
-   👥 **Manage Participants**: Easily add, rename, or remove people from your group.
-   ✍️ **Detailed Expense Tracking**: Add expenses with descriptions, amounts, dates, and specify who paid.
-   🧮 **Flexible Splitting**: Split expenses equally among all participants or select specific people.
-   📊 **Instant Summary**: Get a real-time summary of who owes whom to settle debts easily.
-   📄 **PDF Reports**: Generate and download a professional PDF summary of all expenses and final settlements.
-   💾 **Data Portability**: Export your trip data to a JSON file for backup or import it on another device.
-   🎨 **Dark & Light Mode**: A sleek, modern interface with theme support for comfortable viewing.
-   📱 **Fully Responsive**: Works beautifully on desktops, tablets, and mobile devices.

---

## 📸 Screenshots

Here's a look at the application in both light and dark modes.

| Light Mode                                                                                | Dark Mode                                                                              |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ![Light Mode Screenshot](https://hookstar1993.github.io/TripExpenseSplitter/img/LightMode.png) | ![Dark Mode Screenshot](https://hookstar1993.github.io/TripExpenseSplitter/img/DarkMode.png) |

---

## 🛠️ Technologies Used

This project is built with a focus on simplicity and performance, using modern, client-side technologies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jsPDF](https://img.shields.io/badge/jsPDF-FF0000?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)

-   **HTML5**: For the core structure of the application.
-   **Tailwind CSS**: For modern and responsive utility-first styling.
-   **JavaScript (Vanilla)**: For all the application logic and interactivity.
-   **jsPDF & jsPDF-AutoTable**: For generating client-side PDF reports.

---

## 🚀 How to Use

Getting started is as simple as opening a web page. No installation required.

1.  **Open the website**: Navigate to [https://hookstar1993.github.io/TripExpenseSplitter](https://hookstar1993.github.io/TripExpenseSplitter).
2.  **Set Up Your Trip**:
    -   Enter a name for your tour or trip.
    -   Select the start and end dates.
3.  **Manage People**:
    -   The app starts with default names. Double-click a name to edit it.
    -   Click a name to select it, then click **- Remove Selected Person**. You can `Ctrl+Click` (or `Cmd+Click`) to select multiple people.
    -   Click **+ Add Person** to add new members to the group.
4.  **Add Expenses**:
    -   Fill in the "Add a New Expense" form with the description, amount, date, and who paid.
    -   By default, the expense is split among everyone. Click on names under "Split Among" to exclude them.
5.  **View Summary & Settle Up**:
    -   The "Summary" card automatically updates to show who owes money to whom.
    -   Once your trip is over, click **Generate PDF Report** for a complete breakdown.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is distributed under the MIT License. See `LICENSE.txt` for more information.

> **Copyright (c) 2025 Dwarkvyn. All Rights Reserved.**
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
