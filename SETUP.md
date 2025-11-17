# Citizenship Daily - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `citizenship-daily-ef3e3`
3. Go to Project Settings (gear icon) > Your apps
4. If you don't have a web app, click "Add app" and select Web (</>)
5. Copy the Firebase configuration values
6. Update `src/environments/environment.ts` with your actual values:
   - `apiKey`
   - `appId`

### 3. Set Up Firestore

1. In Firebase Console, go to Firestore Database
2. Click "Start collection" (if you haven't created it yet)
3. Collection ID: `citizenshipDaily`
4. Add documents following the format in `scripts/populate-firestore-simple.md`

**Important**: Document IDs must be in `YYYY-MM-DD` format (e.g., `2025-01-15`)

Each document should have this structure:
```json
{
  "questions": [
    {
      "questionText": "Your question here?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswerIndex": 0
    },
    // ... 4 more questions
  ]
}
```

### 4. Set Firestore Rules

The app includes `firestore.rules` that allow read access to all users. Deploy these rules:

```bash
firebase deploy --only firestore:rules
```

### 5. Run the App

```bash
npm start
```

Navigate to `http://localhost:4200/`

## Testing

To test the app with today's quiz:
1. Create a Firestore document with today's date as the ID (e.g., `2025-01-20`)
2. Add 5 questions following the structure above
3. The app will automatically load questions for the current UTC date

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
firebase deploy
```

Make sure you're logged in:
```bash
firebase login
```

## Project Structure

```
citizenship-daily/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── quiz/          # Main quiz component
│   │   │   ├── results/       # Results screen
│   │   │   ├── stats-modal/   # Statistics modal
│   │   │   └── settings-modal/ # Settings modal
│   │   ├── services/
│   │   │   ├── quiz.service.ts    # Firestore quiz data
│   │   │   └── storage.service.ts # Local storage
│   │   └── app.ts             # Main app component
│   └── environments/
│       └── environment.ts     # Firebase config
├── scripts/
│   └── populate-firestore-simple.md # Manual setup guide
├── firebase.json              # Firebase hosting config
├── firestore.rules            # Firestore security rules
└── .firebaserc                # Firebase project config
```

## Features

✅ Daily quiz with 5 questions (same for all users)  
✅ Resume from where you left off  
✅ Statistics tracking (streaks, score distribution)  
✅ Dark mode toggle  
✅ Share results functionality  
✅ Mobile-first responsive design  
✅ Local storage for user data  

## Troubleshooting

### App shows "No quiz available for today"
- Make sure you've created a Firestore document with today's date (YYYY-MM-DD format)
- Check that the document has a `questions` array with 5 questions
- Verify Firestore rules allow read access

### Firebase connection errors
- Verify your Firebase config in `environment.ts`
- Check that your Firebase project is active
- Ensure Firestore is enabled in your Firebase project

### Icons not showing
- Make sure `lucide-angular` is installed: `npm install lucide-angular`
- Check that `LucideAngularModule` is imported in components using icons

