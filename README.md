# Shopping List App

A simple demonstration application that shows how FastAPI can work with React. This app lets you view and add items to a shopping list.

## Technologies

- **Backend:** FastAPI, Uvicorn, Pydantic
- **Frontend:** React (created with Vite), Axios

## Getting Started

### Backend Setup

1. **Install Python Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

2. **Start the Backend Server:**

   ```bash
   uvicorn main:app --reload
   ```

   The backend will run at [http://localhost:8000](http://localhost:8000).

### Frontend Setup

1. **Create the Frontend Application (if not already created):**

   ```bash
   npm create vite@latest frontend --template react
   ```

   - When prompted, choose **React**.
   - Then choose the **JavaScript** variant.

2. **Install Dependencies:**

   Navigate to your frontend folder and install dependencies:

   ```bash
   cd frontend
   npm install
   npm install axios
   ```

3. **Run the Frontend Development Server:**

   ```bash
   npm run dev
   ```

   Vite will start a development server and provide you with a URL (commonly [http://localhost:5173](http://localhost:5173)).

## Usage

- Open the frontend URL in your browser.
- View the current shopping list.
- Use the form to add new items.

## Note

This project is intended for demonstration purposes to illustrate how FastAPI and React can work together. It is not meant for production use.

## License

This project is licensed under the MIT License.

---
