# Firebase Cloud Functions for Citizenship Daily

This directory contains Firebase Cloud Functions that automatically generate daily quiz questions.

## Functions

### 1. `generateDailyQuiz` (Scheduled)
- **Schedule**: Runs daily at midnight UTC (00:00)
- **Purpose**: Automatically generates 5 questions for the current day
- **Document Format**: Creates documents in the `citizenshipDaily` collection with IDs in `YYYY-MM-DD` format (e.g., `2025-11-17`)
- **Behavior**: 
  - Checks if a quiz already exists for the day
  - If it exists, skips generation
  - If it doesn't exist, generates 5 questions using a seeded random algorithm (same date = same questions)
  - Saves questions to Firestore

### 2. `generateQuizManually` (HTTP)
- **Trigger**: HTTP request (GET or POST)
- **Purpose**: Manually generate a quiz for a specific date (useful for testing or generating past/future dates)
- **Usage**:
  - Generate for today: `GET https://[region]-[project-id].cloudfunctions.net/generateQuizManually`
  - Generate for specific date: `GET https://[region]-[project-id].cloudfunctions.net/generateQuizManually?date=2025-11-17`
- **Response**: JSON with success status, date, and question count

## Question Bank

The question bank (`question-bank.ts`) contains 50+ US Citizenship test questions covering:
- Constitution & Government
- History (Founding, Civil War, etc.)
- Rights & Responsibilities
- Geography & Symbols
- Holidays

Questions are selected using a seeded random algorithm based on the date, ensuring:
- Same date always generates the same questions
- Questions are randomized but consistent
- Variety across categories when possible

## Development

### Install Dependencies
```bash
cd functions
npm install
```

### Build
```bash
npm run build
```

### Deploy
```bash
# Deploy all functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:generateDailyQuiz
firebase deploy --only functions:generateQuizManually
```

### Test Locally
```bash
# Start Firebase emulators
firebase emulators:start --only functions

# In another terminal, test the manual function
curl http://localhost:5001/citizenship-daily-ef3e3/us-central1/generateQuizManually
```

## Deployment Notes

1. **First Deployment**: The scheduled function will be created in Cloud Scheduler
2. **Permissions**: Ensure Firebase Admin SDK has proper permissions to write to Firestore
3. **Billing**: Cloud Functions and Cloud Scheduler have usage-based billing (free tier available)
4. **Region**: Functions are deployed to `us-central1` by default (can be changed in function config)

## Adding More Questions

To add more questions to the bank:
1. Edit `src/question-bank.ts`
2. Add questions to the `questionBank` array
3. Follow the format:
   ```typescript
   {
     questionText: "Your question?",
     options: ["Option 1", "Option 2", "Option 3", "Option 4"],
     correctAnswerIndex: 0, // 0-3
     category: "Category Name"
   }
   ```
4. Rebuild and redeploy

