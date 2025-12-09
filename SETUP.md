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

### 3. Deploy Cloud Functions

The app uses Firebase Cloud Functions to automatically generate daily quiz questions. Deploy the functions:

```bash
cd functions
npm install
npm run build
cd ..
firebase deploy --only functions
```

This will deploy:
- `generateDailyQuiz` - Scheduled function that runs daily at midnight NYC time
- `generateQuizManually` - HTTP function for manual quiz generation (useful for testing)

After deployment, questions will be automatically generated daily. You can also manually trigger generation using the HTTP function (see `functions/README.md` for details).

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
1. Deploy the Cloud Functions (see step 3 above)
2. Manually trigger quiz generation using the HTTP function:
   ```bash
   curl https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually
   ```
   Or generate for a specific date:
   ```bash
   curl "https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually?date=2025-01-20"
   ```
3. The app will automatically load questions for the current date

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
├── functions/                 # Firebase Cloud Functions for automatic question generation
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
- Make sure Cloud Functions are deployed: `firebase deploy --only functions`
- Check that the scheduled function has run (it runs daily at midnight NYC time)
- Manually trigger quiz generation using `generateQuizManually` HTTP function
- Verify Firestore rules allow read access
- Check Firestore for documents with date format `YYYY-MM-DD` in the `citizenshipDaily` collection

### Firebase connection errors
- Verify your Firebase config in `environment.ts`
- Check that your Firebase project is active
- Ensure Firestore is enabled in your Firebase project

### Icons not showing
- Make sure `lucide-angular` is installed: `npm install lucide-angular`
- Check that `LucideAngularModule` is imported in components using icons

