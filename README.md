🧠 Mindful Motion
A full-stack AI wellness platform that combines text-based NLP sentiment analysis, facial emotion detection, and fitness goal tracking, with optional therapist consultations — all in one web app.

🗂 Project Overview
Mindful Motion was built as my final year project for BSc Computer Science. The goal? To bridge the disconnect between mental and physical health tools by offering a centralised, personalised, and emotionally intelligent platform.

Unlike typical fitness or mood-tracking apps, Mindful Motion:

Analyses natural language reflections to detect emotional tone.

Uses webcam facial recognition to analyse expressions.

Offers goal setting and fitness logging for self-tracking.

Supports therapist interaction with mood history insights.

🎯 Key Features
📝 Emotion Check-In (Text-Based NLP)
Users submit reflections (e.g. “I feel drained but hopeful about tomorrow”).

Sentiment is analysed using a hybrid of:

Open-source NLP (sentiment library)

Custom modifiers for negation, intensity, idioms (e.g. “over the moon”).

Visual breakdown + personalised suggestions shown instantly.

📸 Facial Expression Detection
Real-time emotion inference using face-api.js.

No data leaves the browser (privacy-first).

Detects emotions like joy, sadness, anger, surprise with % confidence.

🏃‍♂️ Fitness Goal Tracking
Set and monitor daily/weekly goals (e.g. 10k steps).

Manual activity logging.

Visual dashboard for progress.

🧑‍⚕️ Therapist Consultations
Users can request 1-on-1 support.

Therapists view mood trends and session history.

Secure scheduling and role-based access.

🧠 Tech Stack
Frontend: Next.js + Tailwind CSS

Backend: Supabase (PostgreSQL + Auth)

NLP: Sentiment.js + custom logic

Facial Analysis: face-api.js

Auth & DB: Supabase

Deployment: Vercel

📊 Sample Screenshots
(Insert your favourite visuals from the report here: e.g. NLP check-in results, emotion detection camera interface, fitness dashboard, therapist portal view, ERD)

💡 Why This Project Matters
Modern wellness apps often feel disconnected — mental health tools exist in silos from physical ones. Mindful Motion takes a different approach:

📍 A holistic wellness ecosystem that adapts to how you feel — not just what you do.

This project was developed with a real-world problem in mind, backed by user research, modular architecture, and ethical considerations.
