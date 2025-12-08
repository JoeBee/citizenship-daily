// Question bank for US Citizenship test
// Based on the official USCIS 100 Civics Questions for the Naturalization Test
// Source: USCIS Official Study Materials (uscis.gov)
// 
// NOTE: Questions with location-specific or time-sensitive answers have been removed
// to ensure consistent quiz experiences for all users.

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  category: string;
}

export const questionBank: Question[] = [
  // AMERICAN GOVERNMENT - A: Principles of American Democracy (1-12)
  {
    questionText: "What is the supreme law of the land?",
    options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What does the Constitution do?",
    options: ["Sets up the government", "Declares independence from Britain", "Establishes the military", "Provides for free education"],
    correctAnswerIndex: 0,
    category: "Principles of American Democracy"
  },
  {
    questionText: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: ["We the Citizens", "We the People", "We the Americans", "We the Government"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What is an amendment?",
    options: ["A preamble", "A change (to the Constitution)", "An article", "A clause"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What do we call the first ten amendments to the Constitution?",
    options: ["The Articles of Confederation", "The Bill of Rights", "The Federalist Papers", "The Declaration of Independence"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What is one right or freedom from the First Amendment?",
    options: ["Trial by jury", "Speech", "Bear arms", "Vote"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "How many amendments does the Constitution have?",
    options: ["25", "26", "27", "28"],
    correctAnswerIndex: 2,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What did the Declaration of Independence do?",
    options: ["Declared our independence from France", "Declared our independence from Great Britain", "Established the Constitution", "Created the Bill of Rights"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What are two rights in the Declaration of Independence?",
    options: ["Property and happiness", "Life and liberty", "Education and employment", "Privacy and security"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What is freedom of religion?",
    options: ["You must practice a religion", "You can practice any religion, or not practice a religion", "You can practice any religion, but not change religions", "You can practice any religion, but only in private"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What is the economic system in the United States?",
    options: ["Socialist economy", "Capitalist economy", "Communist economy", "Mixed economy"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },
  {
    questionText: "What is the \"rule of law\"?",
    options: ["Only government officials must follow the law", "Everyone must follow the law", "Only citizens must follow the law", "The president is above the law"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy"
  },

  // AMERICAN GOVERNMENT - B: System of Government (13-47)
  {
    questionText: "Name one branch or part of the government.",
    options: ["The military", "Congress", "The press", "The United Nations"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "What stops one branch of government from becoming too powerful?",
    options: ["The president", "Checks and balances", "The Constitution", "The Supreme Court"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Who is in charge of the executive branch?",
    options: ["The Speaker of the House", "The President", "The Chief Justice", "The Vice President"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Who makes federal laws?",
    options: ["The President", "Congress", "The Supreme Court", "The States"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "What are the two parts of the U.S. Congress?",
    options: ["The Senate and House of Representatives", "The Senate and the Cabinet", "The House of Lords and the House of Commons", "The Supreme Court and the Lower Courts"],
    correctAnswerIndex: 0,
    category: "System of Government"
  },
  {
    questionText: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "200"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "We elect a U.S. Senator for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "The House of Representatives has how many voting members?",
    options: ["100", "200", "435", "500"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "We elect a U.S. Representative for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 0,
    category: "System of Government"
  },
  {
    questionText: "Who does a U.S. Senator represent?",
    options: ["Only the people in the senator's district", "All people of the state", "Only the people who voted for the senator", "Only the people of the senator's political party"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Why do some states have more Representatives than other states?",
    options: ["Because of the state's land area", "Because of the state's population", "Because of the state's wealth", "Because of the state's date of admission to the Union"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "We elect a President for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "In what month do we vote for President?",
    options: ["January", "July", "November", "October"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "If the President can no longer serve, who becomes President?",
    options: ["The Speaker of the House", "The Vice President", "The Chief Justice", "The Secretary of State"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "If both the President and the Vice President can no longer serve, who becomes President?",
    options: ["The Chief Justice", "The Speaker of the House", "The Secretary of State", "The President Pro Tempore of the Senate"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Who is the Commander in Chief of the military?",
    options: ["The Secretary of Defense", "The President", "The Chairman of the Joint Chiefs of Staff", "The Vice President"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Who signs bills to become laws?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "Who vetoes bills?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "What does the President's Cabinet do?",
    options: ["Elects the President", "Advises the President", "Makes laws", "Commands the military"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "What are two Cabinet-level positions?",
    options: ["Secretary of State and Secretary of Labor", "Secretary of Health and Secretary of Education", "Secretary of Defense and Secretary of Agriculture", "Secretary of Commerce and Secretary of Transportation"],
    correctAnswerIndex: 0,
    category: "System of Government"
  },
  {
    questionText: "What does the judicial branch do?",
    options: ["Makes laws", "Reviews laws", "Enforces laws", "Elects officials"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "What is the highest court in the United States?",
    options: ["The Court of Appeals", "The Supreme Court", "The District Court", "The Circuit Court"],
    correctAnswerIndex: 1,
    category: "System of Government"
  },
  {
    questionText: "How many justices are on the Supreme Court?",
    options: ["7", "8", "9", "10"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    options: ["To provide police protection", "To provide schooling and education", "To print money", "To issue driver's licenses"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    options: ["To print money", "To declare war", "To provide schooling and education", "To make treaties"],
    correctAnswerIndex: 2,
    category: "System of Government"
  },
  {
    questionText: "What are the two major political parties in the United States?",
    options: ["Democrats and Republicans", "Republicans and Libertarians", "Democrats and Independents", "Republicans and Socialists"],
    correctAnswerIndex: 0,
    category: "System of Government"
  },

  // AMERICAN GOVERNMENT - C: Rights and Responsibilities (48-57)
  {
    questionText: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    options: ["Citizens eighteen (18) and older can vote", "Only property owners can vote", "Only men can vote", "Only citizens over 21 can vote"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "What is one responsibility that is only for United States citizens?",
    options: ["Pay taxes", "Serve on a jury", "Obey laws", "Get an education"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "Name one right only for United States citizens.",
    options: ["Freedom of speech", "Vote in a federal election", "Freedom of religion", "Right to bear arms"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "What are two rights of everyone living in the United States?",
    options: ["Freedom of speech and freedom of religion", "Vote and bear arms", "Serve on a jury and pay taxes", "Run for office and vote"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "What do we show loyalty to when we say the Pledge of Allegiance?",
    options: ["The President", "The United States", "The Congress", "The Supreme Court"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "What is one promise you make when you become a United States citizen?",
    options: ["To vote in all elections", "To serve in the military", "To give up loyalty to other countries", "To pay higher taxes"],
    correctAnswerIndex: 2,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "How old do citizens have to be to vote for President?",
    options: ["16", "18", "21", "25"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "What are two ways that Americans can participate in their democracy?",
    options: ["Vote and join a civic group", "Pay taxes and serve in the military", "Work and go to school", "Drive and own property"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "When is the last day you can send in federal income tax forms?",
    options: ["April 15", "March 15", "May 15", "June 15"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities"
  },
  {
    questionText: "When must all men register for the Selective Service?",
    options: ["At age 16", "At age 18", "At age 21", "At age 25"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities"
  },

  // AMERICAN HISTORY - A: Colonial Period and Independence (58-70)
  {
    questionText: "What is one reason colonists came to America?",
    options: ["For better weather", "For freedom", "To find gold", "To escape taxes"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "Who lived in America before the Europeans arrived?",
    options: ["The British", "American Indians (Native Americans)", "The Spanish", "The French"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "What group of people was taken to America and sold as slaves?",
    options: ["Indians", "Africans", "Asians", "Europeans"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "Why did the colonists fight the British?",
    options: ["Because of high taxes", "Because the British invaded", "Because they wanted more land", "Because they wanted to join France"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "Who wrote the Declaration of Independence?",
    options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "When was the Declaration of Independence adopted?",
    options: ["July 4, 1776", "July 4, 1787", "April 19, 1775", "September 17, 1787"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "There were 13 original states. Name three.",
    options: ["New York, California, Texas", "Virginia, Massachusetts, New York", "Florida, Georgia, Alabama", "Ohio, Michigan, Illinois"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "What happened at the Constitutional Convention?",
    options: ["The Constitution was written", "The Declaration of Independence was signed", "The Revolutionary War began", "The Bill of Rights was added"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "When was the Constitution written?",
    options: ["1776", "1787", "1791", "1800"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    options: ["Thomas Jefferson", "John Adams", "James Madison", "Benjamin Franklin"],
    correctAnswerIndex: 2,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "What is one thing Benjamin Franklin is famous for?",
    options: ["First President", "U.S. diplomat", "Invented the telephone", "Wrote the Constitution"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "Who is the \"Father of Our Country\"?",
    options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },
  {
    questionText: "Who was the first President?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence"
  },

  // AMERICAN HISTORY - B: 1800s (71-77)
  {
    questionText: "What territory did the United States buy from France in 1803?",
    options: ["Florida", "Texas", "The Louisiana Territory", "Alaska"],
    correctAnswerIndex: 2,
    category: "1800s"
  },
  {
    questionText: "Name one war fought by the United States in the 1800s.",
    options: ["World War I", "World War II", "The Civil War", "The Korean War"],
    correctAnswerIndex: 2,
    category: "1800s"
  },
  {
    questionText: "Name the U.S. war between the North and the South.",
    options: ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"],
    correctAnswerIndex: 2,
    category: "1800s"
  },
  {
    questionText: "Name one problem that led to the Civil War.",
    options: ["Taxation", "Slavery", "Immigration", "Trade"],
    correctAnswerIndex: 1,
    category: "1800s"
  },
  {
    questionText: "What was one important thing that Abraham Lincoln did?",
    options: ["Freed the slaves (Emancipation Proclamation)", "Wrote the Constitution", "Invented the light bulb", "Built the transcontinental railroad"],
    correctAnswerIndex: 0,
    category: "1800s"
  },
  {
    questionText: "What did the Emancipation Proclamation do?",
    options: ["Ended the Civil War", "Freed the slaves", "Established the Constitution", "Created the Bill of Rights"],
    correctAnswerIndex: 1,
    category: "1800s"
  },
  {
    questionText: "What did Susan B. Anthony do?",
    options: ["Fought for women's rights", "Fought for civil rights", "Fought for workers' rights", "Fought for environmental rights"],
    correctAnswerIndex: 0,
    category: "1800s"
  },

  // AMERICAN HISTORY - C: Recent American History and Other Important Historical Information (78-87)
  {
    questionText: "Name one war fought by the United States in the 1900s.",
    options: ["The Revolutionary War", "The Civil War", "World War I", "The War of 1812"],
    correctAnswerIndex: 2,
    category: "Recent American History"
  },
  {
    questionText: "Who was President during World War I?",
    options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
    correctAnswerIndex: 0,
    category: "Recent American History"
  },
  {
    questionText: "Who was President during the Great Depression and World War II?",
    options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
    correctAnswerIndex: 1,
    category: "Recent American History"
  },
  {
    questionText: "Who did the United States fight in World War II?",
    options: ["Germany, Italy, and Japan", "Germany, Italy, and France", "Japan, China, and Russia", "Germany, Spain, and Japan"],
    correctAnswerIndex: 0,
    category: "Recent American History"
  },
  {
    questionText: "Before he was President, Eisenhower was a general. What war was he in?",
    options: ["World War I", "World War II", "The Korean War", "The Vietnam War"],
    correctAnswerIndex: 1,
    category: "Recent American History"
  },
  {
    questionText: "During the Cold War, what was the main concern of the United States?",
    options: ["Terrorism", "Communism", "Global warming", "Immigration"],
    correctAnswerIndex: 1,
    category: "Recent American History"
  },
  {
    questionText: "What movement tried to end racial discrimination?",
    options: ["The civil rights movement", "The women's rights movement", "The labor movement", "The environmental movement"],
    correctAnswerIndex: 0,
    category: "Recent American History"
  },
  {
    questionText: "What did Martin Luther King, Jr. do?",
    options: ["Fought for workers' rights", "Fought for civil rights", "Fought for women's rights", "Fought for environmental rights"],
    correctAnswerIndex: 1,
    category: "Recent American History"
  },
  {
    questionText: "What major event happened on September 11, 2001, in the United States?",
    options: ["The stock market crashed", "Terrorists attacked the United States", "The Vietnam War ended", "The Berlin Wall fell"],
    correctAnswerIndex: 1,
    category: "Recent American History"
  },
  {
    questionText: "Name one American Indian tribe in the United States.",
    options: ["Cherokee", "Apache", "Navajo", "All of the above"],
    correctAnswerIndex: 3,
    category: "Recent American History"
  },

  // INTEGRATED CIVICS - A: Geography (88-95)
  {
    questionText: "Name one of the two longest rivers in the United States.",
    options: ["The Mississippi River", "The Colorado River", "The Hudson River", "The Potomac River"],
    correctAnswerIndex: 0,
    category: "Geography"
  },
  {
    questionText: "What ocean is on the West Coast of the United States?",
    options: ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    correctAnswerIndex: 1,
    category: "Geography"
  },
  {
    questionText: "What ocean is on the East Coast of the United States?",
    options: ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    correctAnswerIndex: 0,
    category: "Geography"
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

  // INTEGRATED CIVICS - B: Symbols (96-98)
  {
    questionText: "Why does the flag have 13 stripes?",
    options: ["Because there were 13 original colonies", "Because there were 13 original states", "Because it looks good", "Because 13 is lucky"],
    correctAnswerIndex: 1,
    category: "Symbols"
  },
  {
    questionText: "Why does the flag have 50 stars?",
    options: ["Because there are 50 states", "Because it looks good", "Because 50 is round number", "Because of the original 50 colonies"],
    correctAnswerIndex: 0,
    category: "Symbols"
  },
  {
    questionText: "What is the name of the national anthem?",
    options: ["America the Beautiful", "The Star-Spangled Banner", "God Bless America", "My Country 'Tis of Thee"],
    correctAnswerIndex: 1,
    category: "Symbols"
  },

  // INTEGRATED CIVICS - C: Holidays (99-100)
  {
    questionText: "When do we celebrate Independence Day?",
    options: ["May 4", "July 4", "September 4", "December 4"],
    correctAnswerIndex: 1,
    category: "Holidays"
  },
  {
    questionText: "Name two national U.S. holidays.",
    options: ["Christmas and Easter", "Independence Day and Labor Day", "Halloween and Thanksgiving", "New Year's and Valentine's Day"],
    correctAnswerIndex: 1,
    category: "Holidays"
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
