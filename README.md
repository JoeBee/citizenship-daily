# Citizenship Daily

A daily US Citizenship quiz app similar to Wordle and Connections, built with Angular and Firebase.

## Features

- **Daily Quiz**: 5 questions per day, same for all users
- **Automatic Question Generation**: Cloud Function generates new questions daily at midnight NYC time
- **Progress Tracking**: Resume where you left off if you close the app
- **Statistics**: Track your games played, streaks, and score distribution
- **Dark Mode**: Toggle between light and dark themes
- **Share Results**: Copy your results to share with others
- **Mobile-First**: Responsive design that works on all devices

## Setup

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI
- Firebase account and project

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Update `src/environments/environment.ts` with your Firebase configuration
   - You'll need to get your Firebase config from the Firebase Console

3. Deploy Cloud Functions (for automatic daily question generation):
   ```bash
   cd functions
   npm install
   npm run build
   cd ..
   firebase deploy --only functions
   ```
   
   Questions are automatically generated daily, but you can manually trigger generation via the HTTP function (see `functions/README.md`)

### Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

Build for production:
```bash
npm run build
```

### Deploy to Firebase

1. Install Firebase CLI if you haven't:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Deploy:
```bash
firebase deploy
```

## Project Structure

- `src/app/components/` - Angular components (quiz, results, stats, settings)
- `src/app/services/` - Services for quiz data and local storage
- `functions/` - Firebase Cloud Functions for automatic question generation
- `firebase.json` - Firebase hosting and functions configuration

## Firestore Structure

The app uses a Firestore collection named `citizenshipDaily` with documents formatted as `YYYY-MM-DD` (e.g., `2025-11-17`). Each document contains an array of 5 question objects with the following structure:

```typescript
{
  questions: [
    {
      questionText: string,
      options: [string, string, string, string],
      correctAnswerIndex: number (0-3)
    },
    // ... 4 more questions
  ],
  generatedAt: timestamp,
  date: string
}
```

## Automatic Question Generation

A Firebase Cloud Function (`generateDailyQuiz`) runs daily at midnight UTC to automatically generate questions for the current day. The function:
- Uses a seeded random algorithm (same date = same questions for all users)
- Selects 5 questions from a bank of 50+ US Citizenship test questions
- Saves them to Firestore with the date as the document ID
- Skips generation if a quiz already exists for the day

You can also manually trigger question generation using the `generateQuizManually` HTTP function. See `functions/README.md` for details.

## Local Storage

The app uses local storage to save:
- Current quiz state (date, question index, answers)
- Statistics (games played, streaks, score distribution)
- Settings (dark mode preference)
