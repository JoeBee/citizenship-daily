// Client-side question generator (fallback when Cloud Function isn't available)
// This uses the same question bank and algorithm as the Cloud Function

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  category: string;
}

// Question bank (subset of the full bank from functions)
const questionBank: Question[] = [
  {
    questionText: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "200"],
    correctAnswerIndex: 1,
    category: "Government"
  },
  {
    questionText: "What is the supreme law of the land?",
    options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
    correctAnswerIndex: 1,
    category: "Constitution"
  },
  {
    questionText: "What do we call the first ten amendments to the Constitution?",
    options: ["The Preamble", "The Bill of Rights", "The Articles", "The Amendments"],
    correctAnswerIndex: 1,
    category: "Constitution"
  },
  {
    questionText: "How many amendments does the Constitution have?",
    options: ["25", "27", "30", "35"],
    correctAnswerIndex: 1,
    category: "Constitution"
  },
  {
    questionText: "How many U.S. Representatives are there?",
    options: ["50", "100", "435", "538"],
    correctAnswerIndex: 2,
    category: "Government"
  },
  {
    questionText: "We elect a U.S. Senator for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 2,
    category: "Government"
  },
  {
    questionText: "We elect a U.S. Representative for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 0,
    category: "Government"
  },
  {
    questionText: "Who wrote the Declaration of Independence?",
    options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "When was the Declaration of Independence adopted?",
    options: ["July 4, 1776", "July 4, 1787", "April 19, 1775", "September 17, 1787"],
    correctAnswerIndex: 0,
    category: "History"
  },
  {
    questionText: "There were 13 original states. Name three.",
    options: ["New York, California, Texas", "Virginia, Massachusetts, New York", "Florida, Georgia, Alabama", "Ohio, Michigan, Illinois"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "What happened at the Constitutional Convention?",
    options: ["The Constitution was written", "The Declaration of Independence was signed", "The Revolutionary War began", "The Bill of Rights was added"],
    correctAnswerIndex: 0,
    category: "History"
  },
  {
    questionText: "When was the Constitution written?",
    options: ["1776", "1787", "1791", "1800"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    options: ["Thomas Jefferson", "John Adams", "James Madison", "Benjamin Franklin"],
    correctAnswerIndex: 2,
    category: "History"
  },
  {
    questionText: "What is one thing Benjamin Franklin is famous for?",
    options: ["First President", "U.S. diplomat", "Invented the telephone", "Wrote the Constitution"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "Who is the 'Father of Our Country'?",
    options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "Who was the first President?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "What territory did the United States buy from France in 1803?",
    options: ["Florida", "Texas", "The Louisiana Territory", "Alaska"],
    correctAnswerIndex: 2,
    category: "History"
  },
  {
    questionText: "Name one war fought by the United States in the 1800s.",
    options: ["World War I", "World War II", "The Civil War", "The Korean War"],
    correctAnswerIndex: 2,
    category: "History"
  },
  {
    questionText: "Name the U.S. war between the North and the South.",
    options: ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"],
    correctAnswerIndex: 2,
    category: "History"
  },
  {
    questionText: "Name one problem that led to the Civil War.",
    options: ["Taxation", "Slavery", "Immigration", "Trade"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "What was one important thing that Abraham Lincoln did?",
    options: ["Freed the slaves", "Wrote the Constitution", "Invented the light bulb", "Built the transcontinental railroad"],
    correctAnswerIndex: 0,
    category: "History"
  },
  {
    questionText: "What did the Emancipation Proclamation do?",
    options: ["Ended the Civil War", "Freed the slaves", "Established the Constitution", "Created the Bill of Rights"],
    correctAnswerIndex: 1,
    category: "History"
  },
  {
    questionText: "What is one right or freedom from the First Amendment?",
    options: ["Trial by jury", "Vote", "Speech", "Bear arms"],
    correctAnswerIndex: 2,
    category: "Rights"
  },
  {
    questionText: "How old do citizens have to be to vote for President?",
    options: ["16", "18", "21", "25"],
    correctAnswerIndex: 1,
    category: "Rights"
  },
  {
    questionText: "What are two rights in the Declaration of Independence?",
    options: ["Life and liberty", "Vote and bear arms", "Speech and religion", "Trial and jury"],
    correctAnswerIndex: 0,
    category: "Rights"
  },
  {
    questionText: "What is one responsibility that is only for United States citizens?",
    options: ["Pay taxes", "Serve on a jury", "Obey laws", "Get an education"],
    correctAnswerIndex: 1,
    category: "Rights"
  },
  {
    questionText: "Name one right only for United States citizens.",
    options: ["Freedom of speech", "Vote in a federal election", "Freedom of religion", "Right to bear arms"],
    correctAnswerIndex: 1,
    category: "Rights"
  },
  {
    questionText: "Name one U.S. territory.",
    options: ["Hawaii", "Alaska", "Puerto Rico", "Texas"],
    correctAnswerIndex: 2,
    category: "Geography"
  },
  {
    questionText: "Name one state that borders Canada.",
    options: ["California", "Texas", "New York", "Florida"],
    correctAnswerIndex: 2,
    category: "Geography"
  },
  {
    questionText: "Name one state that borders Mexico.",
    options: ["California", "Nevada", "Arizona", "Both California and Arizona"],
    correctAnswerIndex: 3,
    category: "Geography"
  },
  {
    questionText: "What is the capital of the United States?",
    options: ["New York", "Philadelphia", "Washington, D.C.", "Boston"],
    correctAnswerIndex: 2,
    category: "Geography"
  },
  {
    questionText: "Where is the Statue of Liberty?",
    options: ["Boston", "Philadelphia", "New York", "Washington, D.C."],
    correctAnswerIndex: 2,
    category: "Geography"
  },
  {
    questionText: "Name two national U.S. holidays.",
    options: ["Christmas and Easter", "Independence Day and Labor Day", "Halloween and Thanksgiving", "New Year's and Valentine's Day"],
    correctAnswerIndex: 1,
    category: "Holidays"
  },
  {
    questionText: "When do we celebrate Independence Day?",
    options: ["May 4", "July 4", "September 4", "December 4"],
    correctAnswerIndex: 1,
    category: "Holidays"
  },
  {
    questionText: "Who signs bills to become laws?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "Government"
  },
  {
    questionText: "Who vetoes bills?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "Government"
  },
  {
    questionText: "What does the President's Cabinet do?",
    options: ["Makes laws", "Advises the President", "Interprets laws", "Enforces laws"],
    correctAnswerIndex: 1,
    category: "Government"
  },
  {
    questionText: "What are the two parts of the U.S. Congress?",
    options: ["The House and the Senate", "The President and the Vice President", "The Supreme Court and the Cabinet", "Democrats and Republicans"],
    correctAnswerIndex: 0,
    category: "Government"
  },
  {
    questionText: "We elect a President for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 1,
    category: "Government"
  },
  {
    questionText: "In what month do we vote for President?",
    options: ["September", "October", "November", "December"],
    correctAnswerIndex: 2,
    category: "Government"
  },
  {
    questionText: "What is the name of the national anthem?",
    options: ["America the Beautiful", "The Star-Spangled Banner", "God Bless America", "My Country 'Tis of Thee"],
    correctAnswerIndex: 1,
    category: "Symbols"
  }
];

/**
 * Selects 5 random questions from the question bank
 * Uses the date as a seed to ensure the same questions are selected for the same date
 * All questions have equal probability of being selected
 */
export function generateDailyQuestions(dateString: string): Question[] {
  // Use date string as seed for consistent selection
  const seed = dateString.split('-').map(Number).reduce((a, b) => a + b, 0);

  // Simple seeded random number generator
  let seedValue = seed;
  function seededRandom() {
    seedValue = (seedValue * 9301 + 49297) % 233280;
    return seedValue / 233280;
  }

  // Fisher-Yates shuffle algorithm for uniform distribution
  const shuffled = [...questionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Simply select the first 5 questions from the shuffled array
  // This ensures equal probability for all questions
  return shuffled.slice(0, 5);
}

