# Hello World Web App

A simple "Hello World" proof of concept built with plain HTML, CSS, and JavaScript.

## What it does

- Shows a clean page with the heading **Hello World**.
- Has a **Say Hello** button.
- When you click the button, a friendly message appears:
  *"Hello! Welcome to my first AI-built application."*
- Works on phones, tablets, and desktops (responsive layout).

## How to run it locally

No installation or build step is needed.

**Option 1 – Open the file directly**

1. Download or clone this repository.
2. Double-click `index.html` to open it in your web browser.

**Option 2 – Use a small local server (optional)**

If you have Python installed, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Leave the framework preset as **Other** and the build settings empty.
4. Click **Deploy**. Vercel serves `index.html` as the home page.

## Technologies used

- **HTML** – page structure
- **CSS** – styling and responsive layout
- **JavaScript** – button click behaviour

No frameworks, libraries, or dependencies.

## Project structure

```
hello-world-app/
├── index.html      # The page itself: heading, button, and message area
├── css/
│   └── style.css   # Colours, layout, button styles, and mobile tweaks
├── js/
│   └── script.js   # Shows the greeting when the button is clicked
└── README.md       # This file
```

### Main files explained

- **`index.html`** – Defines what is on the page. It links to the CSS file for styling and the JavaScript file for behaviour.
- **`css/style.css`** – Centres a white card on a soft gradient background, styles the button, and adjusts spacing on small screens.
- **`js/script.js`** – Finds the button and listens for clicks. On click, it puts the welcome message into the page and fades it in.
