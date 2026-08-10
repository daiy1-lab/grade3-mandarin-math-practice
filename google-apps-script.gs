const SHEET_NAME = "Attempts";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const attempt = payload.attempt || payload;
    const sheet = getAttemptsSheet_();
    sheet.appendRow([
      new Date(),
      attempt.time || "",
      attempt.subject || "",
      attempt.student || "",
      attempt.unit || "",
      attempt.word || "",
      attempt.mode || "",
      attempt.operation || "",
      attempt.topic || "",
      attempt.problem || "",
      attempt.answer || "",
      attempt.correctAnswer || "",
      attempt.correct === true ? "TRUE" : "FALSE",
    ]);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message });
  }
}

function doGet() {
  return json_({ ok: true, message: "Grade 3 practice logger is running." });
}

function getAttemptsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Saved At",
      "Student Time",
      "Subject",
      "Student",
      "Unit",
      "Word",
      "Mode",
      "Math Operation",
      "Math Topic",
      "Math Problem",
      "Student Answer",
      "Correct Answer",
      "Correct",
    ]);
  }

  return sheet;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
