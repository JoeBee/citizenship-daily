# Simple Firestore Population Guide

Since the Node.js script requires a service account key, here's an alternative way to populate Firestore:

## Option 1: Using Firebase Console (Easiest)

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project: `citizenship-daily-ef3e3`
3. Navigate to Firestore Database
4. Click "Start collection"
5. Collection ID: `citizenshipDaily`
6. Add documents with the following structure:

### Document 1: ID = `2025-01-15`
```json
{
  "questions": [
    {
      "questionText": "How many U.S. Senators are there?",
      "options": ["50", "100", "435", "200"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "Who is the Chief Justice of the United States now?",
      "options": ["John Roberts", "Ruth Bader Ginsburg", "Sonia Sotomayor", "Clarence Thomas"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "What is the supreme law of the land?",
      "options": ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What do we call the first ten amendments to the Constitution?",
      "options": ["The Preamble", "The Bill of Rights", "The Articles", "The Amendments"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "How many amendments does the Constitution have?",
      "options": ["25", "27", "30", "35"],
      "correctAnswerIndex": 1
    }
  ]
}
```

### Document 2: ID = `2025-01-16`
```json
{
  "questions": [
    {
      "questionText": "Who wrote the Declaration of Independence?",
      "options": ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "When was the Declaration of Independence adopted?",
      "options": ["July 4, 1776", "July 4, 1787", "April 19, 1775", "September 17, 1787"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "There were 13 original states. Name three.",
      "options": ["New York, California, Texas", "Virginia, Massachusetts, New York", "Florida, Georgia, Alabama", "Ohio, Michigan, Illinois"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What happened at the Constitutional Convention?",
      "options": ["The Constitution was written", "The Declaration of Independence was signed", "The Revolutionary War began", "The Bill of Rights was added"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "When was the Constitution written?",
      "options": ["1776", "1787", "1791", "1800"],
      "correctAnswerIndex": 1
    }
  ]
}
```

### Document 3: ID = `2025-01-17`
```json
{
  "questions": [
    {
      "questionText": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      "options": ["Thomas Jefferson", "John Adams", "James Madison", "Benjamin Franklin"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "What is one thing Benjamin Franklin is famous for?",
      "options": ["First President", "U.S. diplomat", "Invented the telephone", "Wrote the Constitution"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "Who is the 'Father of Our Country'?",
      "options": ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "Who was the first President?",
      "options": ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What territory did the United States buy from France in 1803?",
      "options": ["Florida", "Texas", "The Louisiana Territory", "Alaska"],
      "correctAnswerIndex": 2
    }
  ]
}
```

### Document 4: ID = `2025-01-18`
```json
{
  "questions": [
    {
      "questionText": "Name one war fought by the United States in the 1800s.",
      "options": ["World War I", "World War II", "The Civil War", "The Korean War"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Name the U.S. war between the North and the South.",
      "options": ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Name one problem that led to the Civil War.",
      "options": ["Taxation", "Slavery", "Immigration", "Trade"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What was one important thing that Abraham Lincoln did?",
      "options": ["Freed the slaves", "Wrote the Constitution", "Invented the light bulb", "Built the transcontinental railroad"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "What did the Emancipation Proclamation do?",
      "options": ["Ended the Civil War", "Freed the slaves", "Established the Constitution", "Created the Bill of Rights"],
      "correctAnswerIndex": 1
    }
  ]
}
```

## Option 2: Update Dates to Current Date

To test with today's date, create documents with IDs matching today's date in `YYYY-MM-DD` format. For example, if today is January 20, 2025, use `2025-01-20` as the document ID.

## Notes

- Each document ID must be in `YYYY-MM-DD` format
- Each document must have a `questions` array with exactly 5 question objects
- Each question must have `questionText` (string), `options` (array of 4 strings), and `correctAnswerIndex` (number 0-3)

