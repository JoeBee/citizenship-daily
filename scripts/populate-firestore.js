// Script to populate Firestore with sample citizenship questions
// Run with: node scripts/populate-firestore.js

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // You'll need to download this from Firebase Console

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Sample questions for US Citizenship test
const sampleQuestions = [
  // Day 1 - 2025-01-15
  [
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
  ],
  // Day 2 - 2025-01-16
  [
    {
      questionText: "Who wrote the Declaration of Independence?",
      options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
      correctAnswerIndex: 1
    },
    {
      questionText: "When was the Declaration of Independence adopted?",
      options: ["July 4, 1776", "July 4, 1787", "April 19, 1775", "September 17, 1787"],
      correctAnswerIndex: 0
    },
    {
      questionText: "There were 13 original states. Name three.",
      options: ["New York, California, Texas", "Virginia, Massachusetts, New York", "Florida, Georgia, Alabama", "Ohio, Michigan, Illinois"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What happened at the Constitutional Convention?",
      options: ["The Constitution was written", "The Declaration of Independence was signed", "The Revolutionary War began", "The Bill of Rights was added"],
      correctAnswerIndex: 0
    },
    {
      questionText: "When was the Constitution written?",
      options: ["1776", "1787", "1791", "1800"],
      correctAnswerIndex: 1
    }
  ],
  // Day 3 - 2025-01-17
  [
    {
      questionText: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      options: ["Thomas Jefferson", "John Adams", "James Madison", "Benjamin Franklin"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is one thing Benjamin Franklin is famous for?",
      options: ["First President", "U.S. diplomat", "Invented the telephone", "Wrote the Constitution"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Who is the 'Father of Our Country'?",
      options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Who was the first President?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What territory did the United States buy from France in 1803?",
      options: ["Florida", "Texas", "The Louisiana Territory", "Alaska"],
      correctAnswerIndex: 2
    }
  ],
  // Day 4 - 2025-01-18
  [
    {
      questionText: "Name one war fought by the United States in the 1800s.",
      options: ["World War I", "World War II", "The Civil War", "The Korean War"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Name the U.S. war between the North and the South.",
      options: ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Name one problem that led to the Civil War.",
      options: ["Taxation", "Slavery", "Immigration", "Trade"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What was one important thing that Abraham Lincoln did?",
      options: ["Freed the slaves", "Wrote the Constitution", "Invented the light bulb", "Built the transcontinental railroad"],
      correctAnswerIndex: 0
    },
    {
      questionText: "What did the Emancipation Proclamation do?",
      options: ["Ended the Civil War", "Freed the slaves", "Established the Constitution", "Created the Bill of Rights"],
      correctAnswerIndex: 1
    }
  ]
];

// Dates for the sample questions (starting from today or a specific date)
const startDate = new Date('2025-01-15');
const dates = [];

for (let i = 0; i < sampleQuestions.length; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  dates.push(date.toISOString().split('T')[0]);
}

async function populateFirestore() {
  try {
    console.log('Starting to populate Firestore...');
    
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const questions = sampleQuestions[i];
      
      await db.collection('citizenshipDaily').doc(date).set({
        questions: questions
      });
      
      console.log(`✓ Added questions for ${date}`);
    }
    
    console.log('\n✅ Successfully populated Firestore with sample questions!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error populating Firestore:', error);
    process.exit(1);
  }
}

populateFirestore();

