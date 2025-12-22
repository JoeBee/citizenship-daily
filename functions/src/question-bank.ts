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
  explanation?: string;
}

export const questionBank: Question[] = [
  // AMERICAN GOVERNMENT - A: Principles of American Democracy (1-12)
  {
    questionText: "What is the supreme law of the land?",
    options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The Constitution is the supreme law because it establishes the framework for the federal government and defines the relationship between the federal government and the states, as well as the rights of citizens. All other laws must conform to the Constitution."
  },
  {
    questionText: "What does the Constitution do?",
    options: ["Sets up the government", "Declares independence from Britain", "Establishes the military", "Provides for free education"],
    correctAnswerIndex: 0,
    category: "Principles of American Democracy",
    explanation: "The Constitution establishes the structure of the federal government, defines the powers of each branch (legislative, executive, and judicial), and outlines the relationship between the federal government and the states."
  },
  {
    questionText: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: ["We the Citizens", "We the People", "We the Americans", "We the Government"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "\"We the People\" emphasizes that the government's power comes from the people, not from a monarch or ruling class. This phrase establishes the principle of popular sovereignty, meaning the people are the source of political power."
  },
  {
    questionText: "What is an amendment?",
    options: ["A preamble", "A change (to the Constitution)", "An article", "A clause"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "An amendment is a formal change or addition to the Constitution. The Constitution can be amended through a process that requires approval by Congress and ratification by the states, ensuring it can adapt to changing times while maintaining stability."
  },
  {
    questionText: "What do we call the first ten amendments to the Constitution?",
    options: ["The Articles of Confederation", "The Bill of Rights", "The Federalist Papers", "The Declaration of Independence"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The Bill of Rights was added to the Constitution in 1791 to protect individual liberties and limit the power of the federal government. These amendments guarantee fundamental rights such as freedom of speech, religion, and the right to a fair trial."
  },
  {
    questionText: "What is one right or freedom from the First Amendment?",
    options: ["Trial by jury", "Speech", "Bear arms", "Vote"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The First Amendment protects freedom of speech, allowing Americans to express their opinions without government censorship. It also protects freedom of religion, press, assembly, and the right to petition the government."
  },
  {
    questionText: "How many amendments does the Constitution have?",
    options: ["25", "26", "27", "28"],
    correctAnswerIndex: 2,
    category: "Principles of American Democracy",
    explanation: "The Constitution has 27 amendments. The first 10 are the Bill of Rights, and 17 additional amendments have been added since 1791, addressing issues such as voting rights, presidential terms, and prohibition."
  },
  {
    questionText: "What did the Declaration of Independence do?",
    options: ["Declared our independence from France", "Declared our independence from Great Britain", "Established the Constitution", "Created the Bill of Rights"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The Declaration of Independence, adopted on July 4, 1776, announced that the thirteen American colonies were no longer subject to British rule. It explained the reasons for separation and established the principles of liberty and equality."
  },
  {
    questionText: "What are two rights in the Declaration of Independence?",
    options: ["Property and happiness", "Life and liberty", "Education and employment", "Privacy and security"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The Declaration of Independence states that all people have unalienable rights, including life and liberty. These rights cannot be taken away by any government, and governments are created to protect these rights."
  },
  {
    questionText: "What is freedom of religion?",
    options: ["You must practice a religion", "You can practice any religion, or not practice a religion", "You can practice any religion, but not change religions", "You can practice any religion, but only in private"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "Freedom of religion means you have the right to practice any religion you choose, change your religion, or practice no religion at all. The government cannot establish an official religion or interfere with religious practices."
  },
  {
    questionText: "What is the economic system in the United States?",
    options: ["Socialist economy", "Capitalist economy", "Communist economy", "Mixed economy"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The United States has a capitalist or market economy, where private individuals and businesses own most resources and make economic decisions. Prices are determined by supply and demand in free markets, though the government does regulate certain aspects."
  },
  {
    questionText: "What is the \"rule of law\"?",
    options: ["Only government officials must follow the law", "Everyone must follow the law", "Only citizens must follow the law", "The president is above the law"],
    correctAnswerIndex: 1,
    category: "Principles of American Democracy",
    explanation: "The rule of law means that everyone, including government officials and leaders, must follow the law. No one is above the law, ensuring fairness and preventing abuse of power."
  },

  // AMERICAN GOVERNMENT - B: System of Government (13-47)
  {
    questionText: "Name one branch or part of the government.",
    options: ["The military", "Congress", "The press", "The United Nations"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The U.S. government has three branches: Congress (legislative), the President (executive), and the courts (judicial). Congress makes laws, the President enforces them, and the courts interpret them."
  },
  {
    questionText: "What stops one branch of government from becoming too powerful?",
    options: ["The president", "Checks and balances", "The Constitution", "The Supreme Court"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "Checks and balances is a system where each branch of government can limit the power of the other branches. For example, the President can veto laws, Congress can override vetoes, and the courts can declare laws unconstitutional."
  },
  {
    questionText: "Who is in charge of the executive branch?",
    options: ["The Speaker of the House", "The President", "The Chief Justice", "The Vice President"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The President is the head of the executive branch, which is responsible for enforcing federal laws. The executive branch includes the President, Vice President, Cabinet, and federal agencies."
  },
  {
    questionText: "Who makes federal laws?",
    options: ["The President", "Congress", "The Supreme Court", "The States"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "Congress, which consists of the Senate and House of Representatives, makes federal laws. Both chambers must approve a bill before it can be sent to the President to sign into law."
  },
  {
    questionText: "What are the two parts of the U.S. Congress?",
    options: ["The Senate and House of Representatives", "The Senate and the Cabinet", "The House of Lords and the House of Commons", "The Supreme Court and the Lower Courts"],
    correctAnswerIndex: 0,
    category: "System of Government",
    explanation: "Congress is bicameral, meaning it has two chambers: the Senate (100 members, 2 per state) and the House of Representatives (435 members, based on population). Both must agree for a bill to become law."
  },
  {
    questionText: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "200"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "There are 100 U.S. Senators, with each state electing two senators regardless of population. This ensures equal representation for all states in the Senate."
  },
  {
    questionText: "We elect a U.S. Senator for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "U.S. Senators serve six-year terms, which is longer than Representatives' two-year terms. This longer term provides stability and allows senators to focus on long-term policy issues."
  },
  {
    questionText: "The House of Representatives has how many voting members?",
    options: ["100", "200", "435", "500"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "The House of Representatives has 435 voting members, with representation based on each state's population. States with larger populations have more representatives than smaller states."
  },
  {
    questionText: "We elect a U.S. Representative for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 0,
    category: "System of Government",
    explanation: "U.S. Representatives serve two-year terms, meaning all House seats are up for election every two years. This frequent election cycle keeps representatives closely connected to their constituents."
  },
  {
    questionText: "Who does a U.S. Senator represent?",
    options: ["Only the people in the senator's district", "All people of the state", "Only the people who voted for the senator", "Only the people of the senator's political party"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "A U.S. Senator represents all people of their state, regardless of political party, district, or whether they voted for the senator. Senators must consider the interests of all state residents."
  },
  {
    questionText: "Why do some states have more Representatives than other states?",
    options: ["Because of the state's land area", "Because of the state's population", "Because of the state's wealth", "Because of the state's date of admission to the Union"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "Representation in the House is based on population, so states with more people have more representatives. This ensures that larger states have proportionally more influence in the House."
  },
  {
    questionText: "We elect a President for how many years?",
    options: ["2", "4", "6", "8"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The President serves a four-year term and can be reelected once, for a maximum of eight years total. This term length balances the need for stability with accountability to voters."
  },
  {
    questionText: "In what month do we vote for President?",
    options: ["January", "July", "November", "October"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "Presidential elections are held on the first Tuesday after the first Monday in November. This date was chosen historically to allow farmers time to harvest crops before traveling to vote."
  },
  {
    questionText: "If the President can no longer serve, who becomes President?",
    options: ["The Speaker of the House", "The Vice President", "The Chief Justice", "The Secretary of State"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The Vice President is first in the line of presidential succession. If the President dies, resigns, or is removed from office, the Vice President immediately assumes the presidency."
  },
  {
    questionText: "If both the President and the Vice President can no longer serve, who becomes President?",
    options: ["The Chief Justice", "The Speaker of the House", "The Secretary of State", "The President Pro Tempore of the Senate"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The Speaker of the House is third in the line of succession after the President and Vice President. This ensures continuity of government leadership."
  },
  {
    questionText: "Who is the Commander in Chief of the military?",
    options: ["The Secretary of Defense", "The President", "The Chairman of the Joint Chiefs of Staff", "The Vice President"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The President serves as Commander in Chief of all U.S. armed forces, giving civilian control over the military. This ensures the military remains subordinate to elected civilian leadership."
  },
  {
    questionText: "Who signs bills to become laws?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "After Congress passes a bill, it goes to the President, who can sign it into law or veto it. The President's signature is required for most bills to become law."
  },
  {
    questionText: "Who vetoes bills?",
    options: ["The Vice President", "The President", "The Speaker of the House", "The Chief Justice"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The President has the power to veto (reject) bills passed by Congress. However, Congress can override a veto with a two-thirds majority vote in both chambers."
  },
  {
    questionText: "What does the President's Cabinet do?",
    options: ["Elects the President", "Advises the President", "Makes laws", "Commands the military"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The Cabinet consists of the heads of executive departments (like Secretary of State, Defense, etc.) who advise the President on policy matters. Cabinet members are appointed by the President and confirmed by the Senate."
  },
  {
    questionText: "What are two Cabinet-level positions?",
    options: ["Secretary of State and Secretary of Labor", "Secretary of Health and Speaker of the House", "Secretary of Defense and Chief Justice", "Secretary of Education and Governor"],
    correctAnswerIndex: 0,
    category: "System of Government",
    explanation: "The Cabinet includes positions like Secretary of State (foreign affairs), Secretary of Labor (workplace issues), Secretary of Defense (military), and others. Each oversees a major executive department."
  },
  {
    questionText: "What does the judicial branch do?",
    options: ["Makes laws", "Reviews laws", "Enforces laws", "Elects officials"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The judicial branch interprets laws and determines if they are constitutional. Courts review cases, apply the law, and can declare laws or executive actions unconstitutional."
  },
  {
    questionText: "What is the highest court in the United States?",
    options: ["The Court of Appeals", "The Supreme Court", "The District Court", "The Circuit Court"],
    correctAnswerIndex: 1,
    category: "System of Government",
    explanation: "The Supreme Court is the highest court in the federal judiciary. Its decisions are final and binding on all lower courts. The Court has the power of judicial review, meaning it can declare laws unconstitutional."
  },
  {
    questionText: "How many justices are on the Supreme Court?",
    options: ["7", "8", "9", "10"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "The Supreme Court has nine justices: one Chief Justice and eight Associate Justices. This number was set by Congress in 1869 and has remained constant since then."
  },
  {
    questionText: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    options: ["To provide police protection", "To provide schooling and education", "To print money", "To issue driver's licenses"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "The federal government has exclusive powers like printing money, declaring war, making treaties, and regulating interstate commerce. These powers are listed in the Constitution."
  },
  {
    questionText: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    options: ["To print money", "To declare war", "To provide schooling and education", "To make treaties"],
    correctAnswerIndex: 2,
    category: "System of Government",
    explanation: "States have powers like providing public education, issuing driver's licenses, conducting elections, and maintaining state police forces. This division of power is called federalism."
  },
  {
    questionText: "What are the two major political parties in the United States?",
    options: ["Democrats and Republicans", "Republicans and Libertarians", "Democrats and Independents", "Republicans and Socialists"],
    correctAnswerIndex: 0,
    category: "System of Government",
    explanation: "The Democratic Party and Republican Party are the two major political parties that dominate American politics. While other parties exist, these two have controlled the presidency and Congress for over 150 years."
  },

  // AMERICAN GOVERNMENT - C: Rights and Responsibilities (48-57)
  {
    questionText: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    options: ["Citizens eighteen (18) and older can vote", "Only property owners can vote", "Only men can vote", "Only citizens over 21 can vote"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities",
    explanation: "The 26th Amendment (1971) lowered the voting age from 21 to 18. Other voting amendments include the 15th (race), 19th (gender), and 24th (poll taxes)."
  },
  {
    questionText: "What is one responsibility that is only for United States citizens?",
    options: ["Pay taxes", "Serve on a jury", "Obey laws", "Get an education"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities",
    explanation: "Only U.S. citizens can serve on juries. This is an important civic duty that ensures citizens participate directly in the justice system. Non-citizens cannot serve on federal juries."
  },
  {
    questionText: "Name one right only for United States citizens.",
    options: ["Freedom of speech", "Vote in a federal election", "Freedom of religion", "Right to bear arms"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities",
    explanation: "Only U.S. citizens can vote in federal elections. While many rights apply to everyone in the U.S., voting in federal elections is reserved for citizens as a fundamental right of citizenship."
  },
  {
    questionText: "What are two rights of everyone living in the United States?",
    options: ["Freedom of speech and freedom of religion", "Vote and bear arms", "Serve on a jury and pay taxes", "Run for office and vote"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities",
    explanation: "The First Amendment protects freedom of speech and religion for everyone in the United States, regardless of citizenship status. These fundamental rights apply to all people within U.S. borders."
  },
  {
    questionText: "What do we show loyalty to when we say the Pledge of Allegiance?",
    options: ["The President", "The United States", "The Congress", "The Supreme Court"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities",
    explanation: "The Pledge of Allegiance expresses loyalty to the United States and its flag, representing the nation as a whole rather than any individual leader or branch of government."
  },
  {
    questionText: "What is one promise you make when you become a United States citizen?",
    options: ["To vote in all elections", "To serve in the military", "To give up loyalty to other countries", "To pay higher taxes"],
    correctAnswerIndex: 2,
    category: "Rights and Responsibilities",
    explanation: "New citizens promise to give up loyalty to other countries and be loyal only to the United States. They also promise to support and defend the Constitution and laws of the United States."
  },
  {
    questionText: "How old do citizens have to be to vote for President?",
    options: ["16", "18", "21", "25"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities",
    explanation: "Citizens must be 18 years old to vote in federal elections, including presidential elections. This was established by the 26th Amendment in 1971."
  },
  {
    questionText: "What are two ways that Americans can participate in their democracy?",
    options: ["Vote and join a civic group", "Pay taxes and serve in the military", "Work and go to school", "Drive and own property"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities",
    explanation: "Americans participate in democracy by voting in elections and joining civic groups, political parties, or community organizations. Other ways include contacting elected officials, running for office, and peaceful protest."
  },
  {
    questionText: "When is the last day you can send in federal income tax forms?",
    options: ["April 15", "March 15", "May 15", "June 15"],
    correctAnswerIndex: 0,
    category: "Rights and Responsibilities",
    explanation: "Federal income tax returns are due on April 15 each year (or the next business day if April 15 falls on a weekend or holiday). This deadline applies to most individual taxpayers."
  },
  {
    questionText: "When must all men register for the Selective Service?",
    options: ["At age 16", "At age 18", "At age 21", "At age 25"],
    correctAnswerIndex: 1,
    category: "Rights and Responsibilities",
    explanation: "Men must register with the Selective Service within 30 days of turning 18. This registration ensures the government can maintain a list of potential draftees if a military draft becomes necessary."
  },

  // AMERICAN HISTORY - A: Colonial Period and Independence (58-70)
  {
    questionText: "What is one reason colonists came to America?",
    options: ["For better weather", "For freedom", "To find gold", "To escape taxes"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "Colonists came to America seeking freedom, including religious freedom, economic opportunity, and escape from political oppression. Many sought a new start and the chance to build a better life."
  },
  {
    questionText: "Who lived in America before the Europeans arrived?",
    options: ["The British", "American Indians (Native Americans)", "The Spanish", "The French"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "Native American tribes had lived in North America for thousands of years before European colonization. They had diverse cultures, languages, and societies across the continent."
  },
  {
    questionText: "What group of people was taken to America and sold as slaves?",
    options: ["Indians", "Africans", "Asians", "Europeans"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "Africans were forcibly brought to America through the transatlantic slave trade and sold into slavery. This tragic system existed from the colonial period until the Civil War."
  },
  {
    questionText: "Why did the colonists fight the British?",
    options: ["Because of high taxes", "Because the British invaded", "Because they wanted more land", "Because they wanted to join France"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence",
    explanation: "Colonists fought the British due to high taxes without representation, restrictions on trade, and British attempts to control colonial governments. The phrase \"no taxation without representation\" captured their main grievance."
  },
  {
    questionText: "Who wrote the Declaration of Independence?",
    options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "Thomas Jefferson wrote the Declaration of Independence, though it was reviewed and edited by a committee including Benjamin Franklin and John Adams before being adopted by the Continental Congress."
  },
  {
    questionText: "When was the Declaration of Independence adopted?",
    options: ["July 4, 1776", "July 4, 1787", "April 19, 1775", "September 17, 1787"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence",
    explanation: "The Declaration of Independence was adopted on July 4, 1776, by the Continental Congress. This date is now celebrated as Independence Day, America's national holiday."
  },
  {
    questionText: "There were 13 original states. Name three.",
    options: ["New York, California, Texas", "Virginia, Massachusetts, New York", "Florida, Georgia, Alabama", "Ohio, Michigan, Illinois"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "The 13 original states were: New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia."
  },
  {
    questionText: "What happened at the Constitutional Convention?",
    options: ["The Constitution was written", "The Declaration of Independence was signed", "The Revolutionary War began", "The Bill of Rights was added"],
    correctAnswerIndex: 0,
    category: "Colonial Period and Independence",
    explanation: "The Constitutional Convention met in Philadelphia in 1787 to revise the Articles of Confederation but instead wrote an entirely new Constitution, creating the framework for the U.S. government."
  },
  {
    questionText: "When was the Constitution written?",
    options: ["1776", "1787", "1791", "1800"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "The Constitution was written in 1787 during the Constitutional Convention in Philadelphia. It was ratified in 1788 and went into effect in 1789."
  },
  {
    questionText: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    options: ["Thomas Jefferson", "John Adams", "James Madison", "Benjamin Franklin"],
    correctAnswerIndex: 2,
    category: "Colonial Period and Independence",
    explanation: "James Madison, Alexander Hamilton, and John Jay wrote the Federalist Papers to persuade New Yorkers to ratify the Constitution. These essays explained the benefits of the new government structure."
  },
  {
    questionText: "What is one thing Benjamin Franklin is famous for?",
    options: ["First President", "U.S. diplomat", "Invented the telephone", "Wrote the Constitution"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "Benjamin Franklin was a U.S. diplomat who helped secure French support during the Revolutionary War. He was also a scientist, inventor, writer, and one of the Founding Fathers."
  },
  {
    questionText: "Who is the \"Father of Our Country\"?",
    options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "George Washington is called the \"Father of Our Country\" because he led the Continental Army to victory in the Revolutionary War and served as the first President, setting important precedents for the office."
  },
  {
    questionText: "Who was the first President?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    correctAnswerIndex: 1,
    category: "Colonial Period and Independence",
    explanation: "George Washington was the first President of the United States, serving from 1789 to 1797. He was unanimously elected and established many traditions that presidents still follow today."
  },

  // AMERICAN HISTORY - B: 1800s (71-77)
  {
    questionText: "What territory did the United States buy from France in 1803?",
    options: ["Florida", "Texas", "The Louisiana Territory", "Alaska"],
    correctAnswerIndex: 2,
    category: "1800s",
    explanation: "The Louisiana Purchase doubled the size of the United States, adding territory west of the Mississippi River. President Thomas Jefferson negotiated the purchase from France for $15 million."
  },
  {
    questionText: "Name one war fought by the United States in the 1800s.",
    options: ["World War I", "World War II", "The Civil War", "The Korean War"],
    correctAnswerIndex: 2,
    category: "1800s",
    explanation: "The Civil War (1861-1865) was the deadliest war in American history, fought between the Union (North) and Confederacy (South) over issues including slavery and states' rights."
  },
  {
    questionText: "Name the U.S. war between the North and the South.",
    options: ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"],
    correctAnswerIndex: 2,
    category: "1800s",
    explanation: "The Civil War was fought from 1861 to 1865 between the Northern states (Union) and Southern states (Confederacy). The Union victory preserved the United States and led to the end of slavery."
  },
  {
    questionText: "Name one problem that led to the Civil War.",
    options: ["Taxation", "Slavery", "Immigration", "Trade"],
    correctAnswerIndex: 1,
    category: "1800s",
    explanation: "Slavery was the central issue that led to the Civil War. Disagreements over whether slavery should expand into new territories and states created deep divisions between North and South."
  },
  {
    questionText: "What was one important thing that Abraham Lincoln did?",
    options: ["Freed the slaves (Emancipation Proclamation)", "Wrote the Constitution", "Invented the light bulb", "Built the transcontinental railroad"],
    correctAnswerIndex: 0,
    category: "1800s",
    explanation: "Abraham Lincoln issued the Emancipation Proclamation in 1863, declaring that all slaves in Confederate states were free. He also led the Union during the Civil War and preserved the United States."
  },
  {
    questionText: "What did the Emancipation Proclamation do?",
    options: ["Ended the Civil War", "Freed the slaves", "Established the Constitution", "Created the Bill of Rights"],
    correctAnswerIndex: 1,
    category: "1800s",
    explanation: "The Emancipation Proclamation declared that all slaves in Confederate states were free as of January 1, 1863. While it didn't immediately free all slaves, it changed the war's purpose and led to the 13th Amendment."
  },
  {
    questionText: "What did Susan B. Anthony do?",
    options: ["Fought for women's rights", "Fought for civil rights", "Fought for workers' rights", "Fought for environmental rights"],
    correctAnswerIndex: 0,
    category: "1800s",
    explanation: "Susan B. Anthony was a leader in the women's suffrage movement, fighting for women's right to vote. Her work helped lead to the 19th Amendment, which granted women suffrage in 1920."
  },

  // AMERICAN HISTORY - C: Recent American History and Other Important Historical Information (78-87)
  {
    questionText: "Name one war fought by the United States in the 1900s.",
    options: ["The Revolutionary War", "The Civil War", "World War I", "The War of 1812"],
    correctAnswerIndex: 2,
    category: "Recent American History",
    explanation: "The United States fought in World War I (1917-1918) and World War II (1941-1945) in the 1900s. The U.S. also fought in the Korean War (1950-1953) and Vietnam War (1955-1975)."
  },
  {
    questionText: "Who was President during World War I?",
    options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
    correctAnswerIndex: 0,
    category: "Recent American History",
    explanation: "Woodrow Wilson was President from 1913 to 1921 and led the United States into World War I in 1917. He also proposed the League of Nations as part of his Fourteen Points peace plan."
  },
  {
    questionText: "Who was President during the Great Depression and World War II?",
    options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
    correctAnswerIndex: 1,
    category: "Recent American History",
    explanation: "Franklin D. Roosevelt (FDR) was President from 1933 to 1945, leading the country through both the Great Depression and most of World War II. He created the New Deal programs to combat the Depression."
  },
  {
    questionText: "Who did the United States fight in World War II?",
    options: ["Germany, Italy, and Japan", "Germany, Italy, and France", "Japan, China, and Russia", "Germany, Spain, and Japan"],
    correctAnswerIndex: 0,
    category: "Recent American History",
    explanation: "The United States fought against Germany, Italy, and Japan (the Axis powers) in World War II. The U.S. was part of the Allied powers, which also included Great Britain, the Soviet Union, and others."
  },
  {
    questionText: "Before he was President, Eisenhower was a general. What war was he in?",
    options: ["World War I", "World War II", "The Korean War", "The Vietnam War"],
    correctAnswerIndex: 1,
    category: "Recent American History",
    explanation: "Dwight D. Eisenhower was a five-star general who served as Supreme Commander of Allied forces in Europe during World War II. He planned and led the D-Day invasion of Normandy in 1944."
  },
  {
    questionText: "During the Cold War, what was the main concern of the United States?",
    options: ["Terrorism", "Communism", "Global warming", "Immigration"],
    correctAnswerIndex: 1,
    category: "Recent American History",
    explanation: "During the Cold War (1947-1991), the main concern was the spread of communism, particularly from the Soviet Union. The U.S. and Soviet Union engaged in a long period of political and military tension."
  },
  {
    questionText: "What movement tried to end racial discrimination?",
    options: ["The civil rights movement", "The women's rights movement", "The labor movement", "The environmental movement"],
    correctAnswerIndex: 0,
    category: "Recent American History",
    explanation: "The civil rights movement (1950s-1960s) worked to end racial segregation and discrimination against African Americans. It led to landmark legislation like the Civil Rights Act of 1964 and Voting Rights Act of 1965."
  },
  {
    questionText: "What did Martin Luther King, Jr. do?",
    options: ["Fought for workers' rights", "Fought for civil rights", "Fought for women's rights", "Fought for environmental rights"],
    correctAnswerIndex: 1,
    category: "Recent American History",
    explanation: "Martin Luther King, Jr. was a leader of the civil rights movement who advocated for racial equality through nonviolent protest. He delivered the famous \"I Have a Dream\" speech and won the Nobel Peace Prize."
  },
  {
    questionText: "What major event happened on September 11, 2001, in the United States?",
    options: ["The stock market crashed", "Terrorists attacked the United States", "The Vietnam War ended", "The Berlin Wall fell"],
    correctAnswerIndex: 1,
    category: "Recent American History",
    explanation: "On September 11, 2001, terrorists hijacked airplanes and attacked the World Trade Center in New York and the Pentagon in Washington, D.C. This event led to major changes in U.S. security and foreign policy."
  },
  {
    questionText: "Name one American Indian tribe in the United States.",
    options: ["Cherokee", "Maya", "Inca", "Aztec"],
    correctAnswerIndex: 0,
    category: "Recent American History",
    explanation: "There are hundreds of federally recognized American Indian tribes in the United States, including the Cherokee, Navajo, Sioux, and many others. Each tribe has its own distinct culture, language, and history."
  },

  // INTEGRATED CIVICS - A: Geography (88-95)
  {
    questionText: "Name one of the two longest rivers in the United States.",
    options: ["The Mississippi River", "The Colorado River", "The Hudson River", "The Potomac River"],
    correctAnswerIndex: 0,
    category: "Geography",
    explanation: "The Mississippi River and the Missouri River are the two longest rivers in the United States. The Mississippi flows from Minnesota to the Gulf of Mexico and has been vital for transportation and commerce."
  },
  {
    questionText: "What ocean is on the West Coast of the United States?",
    options: ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    correctAnswerIndex: 1,
    category: "Geography",
    explanation: "The Pacific Ocean borders the West Coast of the United States, including states like California, Oregon, and Washington. It is the largest ocean in the world."
  },
  {
    questionText: "What ocean is on the East Coast of the United States?",
    options: ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    correctAnswerIndex: 0,
    category: "Geography",
    explanation: "The Atlantic Ocean borders the East Coast of the United States, including states like Maine, New York, Florida, and others. It separates North America from Europe and Africa."
  },
  {
    questionText: "Name one U.S. territory.",
    options: ["Hawaii", "Alaska", "Puerto Rico", "Texas"],
    correctAnswerIndex: 2,
    category: "Geography",
    explanation: "U.S. territories include Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands. Territories are under U.S. control but have different status than states."
  },
  {
    questionText: "Name one state that borders Canada.",
    options: ["California", "Texas", "New York", "Florida"],
    correctAnswerIndex: 2,
    category: "Geography",
    explanation: "Many states border Canada, including New York, Maine, Vermont, New Hampshire, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, and Alaska. The border is the longest international border in the world."
  },
  {
    questionText: "Name one state that borders Mexico.",
    options: ["California", "Nevada", "Florida", "Oregon"],
    correctAnswerIndex: 0,
    category: "Geography",
    explanation: "Four U.S. states border Mexico: California, Arizona, New Mexico, and Texas. This border stretches approximately 1,954 miles from the Pacific Ocean to the Gulf of Mexico."
  },
  {
    questionText: "What is the capital of the United States?",
    options: ["New York", "Philadelphia", "Washington, D.C.", "Boston"],
    correctAnswerIndex: 2,
    category: "Geography",
    explanation: "Washington, D.C. (District of Columbia) is the capital of the United States. It is not a state but a federal district created specifically to serve as the nation's capital."
  },
  {
    questionText: "Where is the Statue of Liberty?",
    options: ["Boston", "Philadelphia", "New York", "Washington, D.C."],
    correctAnswerIndex: 2,
    category: "Geography",
    explanation: "The Statue of Liberty is located in New York Harbor on Liberty Island. It was a gift from France in 1886 and has become a symbol of freedom and welcome to immigrants arriving in America."
  },

  // INTEGRATED CIVICS - B: Symbols (96-98)
  {
    questionText: "Why does the flag have 13 stripes?",
    options: ["Because there were 13 original colonies", "Because there were 13 original states", "Because it looks good", "Because 13 is lucky"],
    correctAnswerIndex: 0,
    category: "Symbols",
    explanation: "The 13 stripes on the American flag represent the 13 original colonies that declared independence from Great Britain: Connecticut, Delaware, Georgia, Maryland, Massachusetts, New Hampshire, New Jersey, New York, North Carolina, Pennsylvania, Rhode Island, South Carolina, and Virginia."
  },
  {
    questionText: "Why does the flag have 50 stars?",
    options: ["Because there are 50 states", "Because it looks good", "Because 50 is round number", "Because of the original 50 colonies"],
    correctAnswerIndex: 0,
    category: "Symbols",
    explanation: "The 50 stars on the American flag represent the 50 states of the United States. Each star represents one state. The current flag design with 50 stars was adopted in 1960 when Hawaii became the 50th state."
  },
  {
    questionText: "What is the name of the national anthem?",
    options: ["America the Beautiful", "The Star-Spangled Banner", "God Bless America", "My Country 'Tis of Thee"],
    correctAnswerIndex: 1,
    category: "Symbols",
    explanation: "\"The Star-Spangled Banner\" became the national anthem in 1931. The lyrics were written by Francis Scott Key during the War of 1812, inspired by seeing the American flag still flying after a battle at Fort McHenry."
  },

  // INTEGRATED CIVICS - C: Holidays (99-100)
  {
    questionText: "When do we celebrate Independence Day?",
    options: ["May 4", "July 4", "September 4", "December 4"],
    correctAnswerIndex: 1,
    category: "Holidays",
    explanation: "Independence Day is celebrated on July 4th, commemorating the adoption of the Declaration of Independence on July 4, 1776. It is a federal holiday marked by fireworks, parades, and celebrations of American freedom."
  },
  {
    questionText: "Name two national U.S. holidays.",
    options: ["Christmas and Easter", "Independence Day and Labor Day", "Halloween and Thanksgiving", "New Year's and Valentine's Day"],
    correctAnswerIndex: 1,
    category: "Holidays",
    explanation: "National U.S. holidays include Independence Day (July 4), Labor Day (first Monday in September), Thanksgiving (fourth Thursday in November), Christmas (December 25), New Year's Day (January 1), and others. These are federal holidays when government offices and many businesses are closed."
  }
];

/**
 * Selects 5 random questions from the question bank
 * Uses the date as a seed to ensure the same questions are selected for the same date
 * All questions have equal probability of being selected
 */
export function generateDailyQuestions(dateString: string): Question[] {
  // Use a simple hash of the date string as the seed
  // This ensures that consecutive dates (which have very similar strings)
  // produce very different seeds and therefore different shuffles
  let seed = 0;
  for (let i = 0; i < dateString.length; i++) {
    seed = ((seed << 5) - seed) + dateString.charCodeAt(i);
    seed |= 0; // Convert to 32bit integer
  }
  seed = Math.abs(seed);

  // Simple seeded random number generator (Linear Congruential Generator)
  let seedValue = seed;
  function seededRandom() {
    // These constants provide a better distribution than the previous ones
    // and help ensure "truly random" selection from the available questions
    seedValue = (seedValue * 1664525 + 1013904223) % 4294967296;
    return seedValue / 4294967296;
  }

  // Warm up the PRNG to further ensure randomness
  for (let i = 0; i < 10; i++) {
    seededRandom();
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
