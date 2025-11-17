# Quick Add: Today's Quiz (2025-11-17)

## Steps to Add Questions via Firebase Console:

1. **Open Firebase Console**: https://console.firebase.google.com/project/citizenship-daily-ef3e3/firestore

2. **Go to Firestore Database**

3. **Create Collection** (if it doesn't exist):
   - Click "Start collection"
   - Collection ID: `citizenshipDaily`
   - Click "Next"

4. **Add Document**:
   - Document ID: `2025-11-17` (today's date)
   - Click "Add field"
   - Field name: `questions`
   - Field type: **array** (select from dropdown)
   - Click "Add item" 5 times

5. **Add Each Question** (click each array item and add these fields):

### Item 0 (First Question):
- Add field: `questionText` = `"How many U.S. Senators are there?"`
- Add field: `options` = array with: `"50"`, `"100"`, `"435"`, `"200"`
- Add field: `correctAnswerIndex` = `1` (number)

### Item 1 (Second Question):
- `questionText` = `"Who is the Chief Justice of the United States now?"`
- `options` = array: `"John Roberts"`, `"Ruth Bader Ginsburg"`, `"Sonia Sotomayor"`, `"Clarence Thomas"`
- `correctAnswerIndex` = `0`

### Item 2 (Third Question):
- `questionText` = `"What is the supreme law of the land?"`
- `options` = array: `"The Declaration of Independence"`, `"The Constitution"`, `"The Bill of Rights"`, `"The Articles of Confederation"`
- `correctAnswerIndex` = `1`

### Item 3 (Fourth Question):
- `questionText` = `"What do we call the first ten amendments to the Constitution?"`
- `options` = array: `"The Preamble"`, `"The Bill of Rights"`, `"The Articles"`, `"The Amendments"`
- `correctAnswerIndex` = `1`

### Item 4 (Fifth Question):
- `questionText` = `"How many amendments does the Constitution have?"`
- `options` = array: `"25"`, `"27"`, `"30"`, `"35"`
- `correctAnswerIndex` = `1`

6. **Click "Save"**

7. **Refresh your app** - the quiz should now load!

---

**Alternative**: If you prefer, you can copy-paste this JSON structure in Firebase Console's JSON view (if available) or use the Firebase CLI.

