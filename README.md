# SnapGallery

A responsive image gallery built with **React**, **Tailwind CSS**, and the **Lorem Picsum API**. Browse image collections through a custom pagination interface, switch between light and dark themes, and open images in a separate tab.

## 🚀 Live Demo

**[View SnapGallery](https://snap-gallery-phi.vercel.app/)**

> Before publishing this README, replace `PASTE_YOUR_VERCEL_DEPLOYMENT_URL_HERE` with your actual Vercel deployment URL, for example `https://your-project.vercel.app`.

## ✨ Features

- **API-powered gallery:** Fetches image metadata from the Lorem Picsum API using Axios.
- **Paginated browsing:** Navigate between pages using Previous, Next, and numbered page controls.
- **Custom pagination UI:** Includes active-page styling and an ellipsis-style layout for navigating larger page ranges.
- **90 images per page:** Requests a batch of up to 90 images from the API for each page.
- **Light and dark themes:** Toggle between light and dark interface themes.
- **Responsive layout:** Uses Tailwind CSS responsive utilities to adapt the gallery layout to different screen sizes.
- **Image links:** Click an image to open its original image URL in a new browser tab.
- **Component-based structure:** Separates the main app, header/theme control, image gallery, and pagination into React components.

## 🛠️ Tech Stack

- **React** — UI components and state management
- **Vite** — development server and production build tooling
- **Tailwind CSS** — responsive styling
- **Axios** — HTTP requests to the image API
- **Lorem Picsum API** — image data and image URLs
- **Lucide React** — icon library dependency

## 🖥️ Run Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adityaingole1550/SnapGallery.git
   ```

2. Move into the project directory:

   ```bash
   cd SnapGallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal by Vite.

### Production build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

To run the configured lint checks:

```bash
npm run lint
```

## 🧭 How It Works

1. The app stores the selected page and fetched image data in React state.
2. When the selected page changes, a React effect triggers an Axios request to the Lorem Picsum API.
3. The returned image data is stored in state.
4. React renders the image cards from that data.
5. The pagination controls update the selected page, triggering a new request.
6. The theme toggle updates state to change the interface theme.

## 📁 Project Structure

```text
SnapGallery/
├── public/
│   ├── favicon.svg
│   ├── gallery-outline.png
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Div1.jsx       # Header and theme toggle
│   │   ├── Div2.jsx       # Gallery layout experiment/component
│   │   ├── Div3.jsx       # Pagination controls
│   │   └── Try.jsx        # API request and image gallery
│   ├── App.jsx            # App state and component composition
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 💡 What I Practiced

- Managing shared state with React's `useState`
- Running side effects when pagination state changes with `useEffect`
- Fetching remote data with Axios and rendering API results
- Building custom pagination controls with conditional UI
- Creating responsive layouts with Tailwind CSS
- Passing props and state setters between components
- Organizing a React project into reusable components
- Preparing a Vite application for deployment

## 🔮 Possible Future Improvements

- Add visible loading, empty, and API-error states.
- Add image search, filtering, or favorites.
- Improve image loading behavior and provide placeholders.
- Add accessibility improvements and keyboard-friendly pagination.
- Add automated tests for pagination and API states.

## 👨‍💻 Author

**Aditya Ingole**

- GitHub: [@adityaingole1550](https://github.com/adityaingole1550)

---

If you find this project useful, feel free to explore the repository and share feedback.
