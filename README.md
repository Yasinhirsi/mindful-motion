# 🧠 Mindful Motion

A full-stack AI wellness platform that combines **text-based NLP sentiment analysis**, **facial emotion detection**, and **fitness goal tracking**, with optional **therapist consultations** — all in one web app.

---

## 🗂 Project Overview

**Mindful Motion** was built as my final year project for BSc Computer Science. The goal? To bridge the disconnect between mental and physical health tools by offering a *centralised*, *personalised*, and *emotionally intelligent* platform.

Unlike typical fitness or mood-tracking apps, Mindful Motion:
- Analyses **natural language reflections** to detect emotional tone.
- Uses **webcam facial recognition** to analyse expressions.
- Offers **goal setting** and **fitness logging** for self-tracking.
- Supports **therapist interaction** with mood history insights.

---

## 🎯 Key Features

### 📝 Emotion Check-In (Text-Based NLP)
- Users submit reflections (e.g. “I feel drained but hopeful about tomorrow”).
- Sentiment is analysed using a hybrid of:
  - Open-source NLP (sentiment library)
  - Custom modifiers for **negation**, **intensity**, **idioms** (e.g. “over the moon”).
- Visual breakdown + personalised suggestions shown instantly.

### 📸 Facial Expression Detection
- Real-time emotion inference using **face-api.js**.
- No data leaves the browser (privacy-first).
- Detects emotions like joy, sadness, anger, surprise with % confidence.

### 🏃‍♂️ Fitness Goal Tracking
- Set and monitor daily/weekly goals (e.g. 10k steps).
- Manual activity logging.
- Visual dashboard for progress.

### 🧑‍⚕️ Therapist Consultations
- Users can request 1-on-1 support.
- Therapists view mood trends and session history.
- Secure scheduling and role-based access.

---

## 🧠 Tech Stack

- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth)
- **NLP:** Sentiment.js + custom logic
- **Facial Analysis:** face-api.js
- **Auth & DB:** Supabase
- **Deployment:** Vercel

---

## 📊 Sample Screenshots



### 🧭 Dashboard Overview

<img width="793" height="436" alt="Screenshot 2025-07-30 at 19 25 28" src="https://github.com/user-attachments/assets/55814aab-333e-4a45-80e9-2073691ce47d" />


### 📝 Daily Check-In (Form)
<img width="804" height="351" alt="Screenshot 2025-07-30 at 19 25 46" src="https://github.com/user-attachments/assets/ea58d043-8017-4fb4-a156-18873d982c1e" />


### 📈 Emotion Analysis Result
<img width="809" height="413" alt="Screenshot 2025-07-30 at 19 26 07" src="https://github.com/user-attachments/assets/4d954d8c-d1e4-461f-81a7-55eebe2b7bf0" />


### 😐 Facial Expression Detection

<img width="850" height="396" alt="Screenshot 2025-07-30 at 19 26 58" src="https://github.com/user-attachments/assets/72b16679-42f7-4955-8f71-dbb6c66c51d3" />

### 👤 Therapist Insights View
<img width="850" height="472" alt="Screenshot 2025-07-30 at 19 27 07" src="https://github.com/user-attachments/assets/ebd36ada-c00d-46dc-8434-11ea96e8e8c4" />

### 🏃 Fitness Progress Tracking
<img width="1026" height="478" alt="Screenshot 2025-07-30 at 19 28 08" src="https://github.com/user-attachments/assets/b1184808-d849-4d12-b380-ea412679d3ce" />


### 🧑‍⚕️ Consultation Booking Flow

<img width="487" height="576" alt="Screenshot 2025-07-30 at 19 28 25" src="https://github.com/user-attachments/assets/1f84df6d-c8b2-4949-a04a-b07afa52df17" />


---

## 💡 Why This Project Matters

Modern wellness apps often feel disconnected — mental health tools exist in silos from physical ones. **Mindful Motion** takes a different approach:  
> 📍 A holistic wellness ecosystem that adapts to how you feel — not just what you do.

This project was developed with a real-world problem in mind, backed by user research, modular architecture, and ethical considerations.

---

## 🔮 Future Features (Post-Graduation Goals)
- Mobile app (React Native) + push notifications  
- Audio journaling support  
- Integration with Apple Health / Fitbit  
- Gamification (badges, streaks, wellness challenges)  
- Deeper NLP with Transformer models (e.g. BERT)  


