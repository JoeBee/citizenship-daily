# Deployment Guide for Citizenship Daily

## Quick Start

### 1. Deploy Cloud Functions

The Cloud Functions will automatically generate questions daily. To deploy:

```bash
# Navigate to project root
cd citizenship-daily

# Deploy functions
firebase deploy --only functions
```

This will deploy:
- `generateDailyQuiz` - Scheduled function that runs daily at midnight UTC
- `generateQuizManually` - HTTP function for manual quiz generation

### 2. Test Manual Generation

After deployment, you can test the manual function to generate today's quiz:

```bash
# Get your function URL from Firebase Console or use:
curl https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually
```

Or generate for a specific date:
```bash
curl "https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually?date=2025-11-17"
```

### 3. Verify in Firebase Console

1. Go to Firebase Console > Firestore Database
2. Check the `citizenshipDaily` collection
3. You should see documents with dates as IDs (e.g., `2025-11-17`)
4. Each document should have a `questions` array with 5 questions

## Scheduled Function

The `generateDailyQuiz` function is automatically scheduled to run:
- **Time**: Every day at 00:00 UTC (midnight)
- **Location**: Cloud Scheduler (visible in Firebase Console > Functions > Schedules)

### First Run

The scheduled function will start running automatically after deployment. However, you may want to:
1. Manually trigger it for today using `generateQuizManually`
2. Or wait until midnight UTC for it to run automatically

## Manual Generation

Use the `generateQuizManually` function to:
- Generate today's quiz immediately
- Generate quizzes for past dates (for testing)
- Generate quizzes for future dates (to prepare ahead)

### Usage Examples

```bash
# Generate for today
curl https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually

# Generate for specific date
curl "https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually?date=2025-11-20"

# Using POST (also works)
curl -X POST "https://us-central1-citizenship-daily-ef3e3.cloudfunctions.net/generateQuizManually?date=2025-11-20"
```

## Monitoring

### View Function Logs

```bash
firebase functions:log
```

Or in Firebase Console:
- Go to Functions > Logs
- Filter by function name

### Check Cloud Scheduler

1. Go to Firebase Console > Functions
2. Click on "Schedules" tab
3. You should see `generateDailyQuiz` scheduled for "every day 00:00 UTC"

## Troubleshooting

### Function Not Running

1. Check Cloud Scheduler in Firebase Console
2. Verify the function was deployed: `firebase functions:list`
3. Check logs: `firebase functions:log --only generateDailyQuiz`

### Permission Errors

Ensure Firestore security rules allow writes (functions use Admin SDK, so they bypass rules, but check if there are any issues)

### Questions Not Appearing

1. Check Firestore for documents with date format `YYYY-MM-DD`
2. Verify the document has a `questions` array
3. Check function logs for errors

## Updating Questions

To add more questions to the bank:
1. Edit `functions/src/question-bank.ts`
2. Add questions to the `questionBank` array
3. Rebuild: `cd functions && npm run build`
4. Redeploy: `firebase deploy --only functions`

## Cost Considerations

- **Cloud Functions**: Free tier includes 2 million invocations/month
- **Cloud Scheduler**: Free tier includes 3 jobs
- **Firestore**: Free tier includes 1 GB storage, 50K reads/day

For a daily quiz app, you should stay well within free tier limits.

