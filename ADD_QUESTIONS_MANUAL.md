# Quick Guide: Add Today's Questions Manually

Since Cloud Functions require the Blaze plan, here's how to add questions manually to Firestore.

## Option 1: Using Firebase Console (Easiest - No Code)

1. Go to [Firebase Console](https://console.firebase.google.com/project/citizenship-daily-ef3e3/firestore)
2. Click on **Firestore Database**
3. If the `citizenshipDaily` collection doesn't exist, click **Start collection**
   - Collection ID: `citizenshipDaily`
4. Click **Add document**
   - Document ID: **Today's date in YYYY-MM-DD format** (e.g., `2025-11-17`)
5. Add a field:
   - Field name: `questions`
   - Field type: **array**
6. Click **Add item** 5 times to add 5 question objects. For each question, add these fields:

### Question 1:
```json
{
  "questionText": "How many U.S. Senators are there?",
  "options": ["50", "100", "435", "200"],
  "correctAnswerIndex": 1
}
```

### Question 2:
```json
{
  "questionText": "Who is the Chief Justice of the United States now?",
  "options": ["John Roberts", "Ruth Bader Ginsburg", "Sonia Sotomayor", "Clarence Thomas"],
  "correctAnswerIndex": 0
}
```

### Question 3:
```json
{
  "questionText": "What is the supreme law of the land?",
  "options": ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
  "correctAnswerIndex": 1
}
```

### Question 4:
```json
{
  "questionText": "What do we call the first ten amendments to the Constitution?",
  "options": ["The Preamble", "The Bill of Rights", "The Articles", "The Amendments"],
  "correctAnswerIndex": 1
}
```

### Question 5:
```json
{
  "questionText": "How many amendments does the Constitution have?",
  "options": ["25", "27", "30", "35"],
  "correctAnswerIndex": 1
}
```

7. Click **Save**

## Option 2: Using Firebase CLI (Faster)

If you have Firebase CLI installed and authenticated:

```bash
# Get today's date
node -p "new Date().toISOString().split('T')[0]"

# Then use firebase firestore:set command
# (You'll need to format the data as JSON)
```

## Option 3: Using Node Script (Requires Service Account)

1. Download service account key from Firebase Console:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Save as `serviceAccountKey.json` in project root

2. Run the script:
```bash
node scripts/add-today-quiz.js
```

## Verify

After adding, refresh your app - it should load the questions!

## Note

The document ID **must** be in `YYYY-MM-DD` format (e.g., `2025-11-17`) for the app to find it.

