# 👗 Gen AI Virtual Try-On Clothes

he Virtual Dress Try-On System is an AI-powered application that allows users to visualize how different outfits look on them without physically wearing the clothes. The system uses deep learning, image processing, and virtual try-on models to generate realistic dress-fitting results on the user’s body.

---

## 🚀 Features

- Upload any **person image** and **clothing item**
- Generate **AI-based try-on images** with high fidelity
- Preserves facial identity and garment texture
- Automatically removes and replaces the background
- Responsive UI with **dark/light mode**
- View and save **previous try-on history** in session only

---

## 🖼️ Screenshots

![Screenshots](./screenshots/s1.png)
![Screenshots](./screenshots/s2.png)
![Screenshots](./screenshots/s3.png)
![Screenshots](./screenshots/s4.png)
![Screenshots](./screenshots/s5.png)
![Screenshots](./screenshots/s6.png)
<img width="1720" height="811" alt="image" src="https://github.com/user-attachments/assets/182cb070-8c80-41a0-8ab1-f636e9fe3962" />


---

## 🛠️ Tech Stack

| 🖥️ Frontend           | ⚙️ Backend       | 🤖 AI & Processing       |
|------------------------|------------------|--------------------------|
| React.js               | FastAPI          | Google Gemini API (Generative AI) |
| Ant Design (UI Library)| Uvicorn (ASGI)   | Image-to-Image Inference |
| Axios (API Calls)      | Python 3.12+     | Base64 Encoding/Decoding |
| React Toastify         | Pydantic         | Multimodal Content Handling |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/narender-rk10/Gen-AI-Virtual-Try-On-Clothes.git
cd Gen-AI-Virtual-Try-On-Clothes
```

### 2. Setup Backend

```bash
cd backend
poetry install
poetry shell
```

Create a `.env` file and add:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

Run the server:

```bash
uvicorn main:app --reload
```

### 3. Setup Frontend

```bash
cd frontend
npm install

```

---

## 📦 API Endpoint

```
POST /api/try-on
```

- `person_image`: UploadFile (image)
- `cloth_image`: UploadFile (image)
- `instructions`, `model_type`, `gender`, `style`, `garment_type`: FormData

---

## 📁 Project Structure

```
/frontend       # React + Ant Design UI
/backend        # FastAPI + Gemini AI API
```

---

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

