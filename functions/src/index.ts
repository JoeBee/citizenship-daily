import { onSchedule } from "firebase-functions/v2/scheduler";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { generateDailyQuestions } from "./question-bank";

// Initialize Firebase Admin
if (!getApps().length) {
  initializeApp();
}
const db = getFirestore();

/**
 * Scheduled Cloud Function that runs daily at midnight NYC time (America/New_York)
 * Generates 5 questions for the current day and saves them to Firestore
 * Document ID format: YYYY-MM-DD (e.g., 2025-11-17)
 */
export const generateDailyQuiz = onSchedule(
  {
    schedule: "every day 00:00",
    timeZone: "America/New_York",
  },
  async () => {
    
    // Get today's date in YYYY-MM-DD format (NYC timezone)
    const today = new Date();
    // Convert to NYC timezone
    const nycTime = new Date(today.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const year = nycTime.getFullYear();
    const month = String(nycTime.getMonth() + 1).padStart(2, "0");
    const day = String(nycTime.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;
    
    logger.info(`Generating daily quiz for ${dateString} (NYC time)`);
    
    try {
      // Check if quiz already exists for today
      const docRef = db.collection("citizenshipDaily").doc(dateString);
      const docSnapshot = await docRef.get();
      
      if (docSnapshot.exists) {
        logger.info(`Quiz for ${dateString} already exists, skipping generation`);
        return;
      }
      
      // Generate 5 questions for today
      const questions = generateDailyQuestions(dateString);
      
      // Determine the primary category (most common category in today's questions)
      const categoryCounts = new Map<string, number>();
      questions.forEach(q => {
        categoryCounts.set(q.category, (categoryCounts.get(q.category) || 0) + 1);
      });
      let primaryCategory = "";
      let maxCount = 0;
      categoryCounts.forEach((count, category) => {
        if (count > maxCount) {
          maxCount = count;
          primaryCategory = category;
        }
      });
      
      // Save to Firestore
      await docRef.set({
        questions: questions.map(q => ({
          questionText: q.questionText,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex,
          category: q.category,
          explanation: q.explanation
        })),
        generatedAt: FieldValue.serverTimestamp(),
        date: dateString,
        category: primaryCategory
      });
      
      logger.info(`Successfully generated quiz for ${dateString} with ${questions.length} questions`);
    } catch (error) {
      logger.error(`Error generating quiz for ${dateString}:`, error);
      throw error;
    }
  }
);

/**
 * HTTP-triggered function to manually generate a quiz for a specific date
 * Useful for testing or generating quizzes for past/future dates
 * 
 * Usage: 
 * GET/POST /generateQuizManually?date=2025-11-17
 * or
 * GET/POST /generateQuizManually (generates for today)
 */
export const generateQuizManually = onRequest(
  {
    cors: true, // Enable CORS for browser requests
  },
  async (req, res) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).send("");
      return;
    }

    // Set CORS headers
    res.set("Access-Control-Allow-Origin", "*");

    // Get date from query parameter or use today
    let dateString: string;
    if (req.query.date && typeof req.query.date === "string") {
      dateString = req.query.date;
      // Validate date format
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD" });
        return;
      }
    } else {
      const today = new Date();
      // Convert to NYC timezone for consistency
      const nycTime = new Date(today.toLocaleString("en-US", { timeZone: "America/New_York" }));
      const year = nycTime.getFullYear();
      const month = String(nycTime.getMonth() + 1).padStart(2, "0");
      const day = String(nycTime.getDate()).padStart(2, "0");
      dateString = `${year}-${month}-${day}`;
    }
    
    logger.info(`Manually generating quiz for ${dateString}`);
    
    try {
      const docRef = db.collection("citizenshipDaily").doc(dateString);
      
      // Check if quiz already exists
      const docSnapshot = await docRef.get();
      const overwrite = req.query.overwrite === 'true';
      if (docSnapshot.exists && !overwrite) {
        logger.info(`Quiz for ${dateString} already exists`);
        res.json({
          success: true,
          date: dateString,
          questionCount: docSnapshot.data()?.questions?.length || 0,
          message: `Quiz already exists for ${dateString}. Add ?overwrite=true to regenerate.`,
          alreadyExists: true
        });
        return;
      }
      
      if (docSnapshot.exists && overwrite) {
        logger.info(`Overwriting existing quiz for ${dateString}`);
      }
      
      // Generate questions
      const questions = generateDailyQuestions(dateString);
      
      // Determine the primary category (most common category in today's questions)
      const categoryCounts = new Map<string, number>();
      questions.forEach(q => {
        categoryCounts.set(q.category, (categoryCounts.get(q.category) || 0) + 1);
      });
      let primaryCategory = "";
      let maxCount = 0;
      categoryCounts.forEach((count, category) => {
        if (count > maxCount) {
          maxCount = count;
          primaryCategory = category;
        }
      });
      
      // Save to Firestore
      await docRef.set({
        questions: questions.map(q => ({
          questionText: q.questionText,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex,
          category: q.category,
          explanation: q.explanation
        })),
        generatedAt: FieldValue.serverTimestamp(),
        date: dateString,
        category: primaryCategory,
        manuallyGenerated: true
      });
      
      logger.info(`Successfully generated quiz for ${dateString}`);
      
      res.json({
        success: true,
        date: dateString,
        questionCount: questions.length,
        message: `Quiz generated for ${dateString}`
      });
    } catch (error: any) {
      logger.error(`Error generating quiz for ${dateString}:`, error);
      res.status(500).json({
        error: "Failed to generate quiz",
        message: error.message
      });
    }
  }
);

