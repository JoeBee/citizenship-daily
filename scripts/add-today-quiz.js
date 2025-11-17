// Simple script to add today's quiz to Firestore using Firebase Admin SDK
// Run with: node scripts/add-today-quiz.js

const admin = require('firebase-admin');

// Initialize Firebase Admin (you'll need to download service account key)
// For now, we'll use application default credentials or you can set GOOGLE_APPLICATION_CREDENTIALS
try {
  // Try to initialize with default credentials
  admin.initializeApp({
    projectId: 'citizenship-daily-ef3e3'
  });
} catch (error) {
  console.error('Firebase Admin initialization error:', error.message);
  console.log('\nTo use this script, you need to:');
  console.log('1. Download service account key from Firebase Console');
  console.log('2. Save it as serviceAccountKey.json in project root');
  console.log('3. Update this script to use: admin.credential.cert(require("../serviceAccountKey.json"))');
  process.exit(1);
}

const db = admin.firestore();

// Get today's date in YYYY-MM-DD format (UTC)
const today = new Date();
const year = today.getUTCFullYear();
const month = String(today.getUTCMonth() + 1).padStart(2, '0');
const day = String(today.getUTCDate()).padStart(2, '0');
const dateString = `${year}-${month}-${day}`;

// Sample questions for today (first 5 from question bank)
const questions = [
  {
    questionText: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "200"],
    correctAnswerIndex: 1
  },
  {
    questionText: "Who is the Chief Justice of the United States now?",
    options: ["John Roberts", "Ruth Bader Ginsburg", "Sonia Sotomayor", "Clarence Thomas"],
    correctAnswerIndex: 0
  },
  {
    questionText: "What is the supreme law of the land?",
    options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
    correctAnswerIndex: 1
  },
  {
    questionText: "What do we call the first ten amendments to the Constitution?",
    options: ["The Preamble", "The Bill of Rights", "The Articles", "The Amendments"],
    correctAnswerIndex: 1
  },
  {
    questionText: "How many amendments does the Constitution have?",
    options: ["25", "27", "30", "35"],
    correctAnswerIndex: 1
  }
];

async function addTodayQuiz() {
  try {
    const docRef = db.collection('citizenshipDaily').doc(dateString);
    
    // Check if already exists
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      console.log(`Quiz for ${dateString} already exists!`);
      console.log('Questions:', docSnapshot.data().questions.length);
      return;
    }
    
    // Add the quiz
    await docRef.set({
      questions: questions,
      date: dateString,
      generatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    console.log(`✅ Successfully added quiz for ${dateString}!`);
    console.log(`   Added ${questions.length} questions`);
  } catch (error) {
    console.error('❌ Error adding quiz:', error);
    process.exit(1);
  }
}

addTodayQuiz().then(() => {
  process.exit(0);
});

