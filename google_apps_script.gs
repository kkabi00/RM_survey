const SHEET_NAME = 'responses_wide';

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  const sheet = getResponseSheet_();
  ensureHeader_(sheet);

  const answers = payload.answers || rowsToAnswers_(payload.rows || []);
  const row = [
    payload.submittedAt || new Date().toISOString(),
    payload.scenario || '',
    payload.scenarioLabel || '',
    payload.condition || '',
    payload.conditionLabel || '',
    payload.nickname || ''
  ];

  getAnswerKeys_().forEach(function(key) {
    row.push(answers[key] || '');
  });
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ok: true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const params = e.parameter || {};
  if (params.mode !== 'counts') {
    return ContentService
      .createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const scenario = params.scenario || '';
  const sheet = getResponseSheet_();
  ensureHeader_(sheet);
  const values = sheet.getDataRange().getValues();
  const counts = {c1: 0, c2: 0, c3: 0, c4: 0};

  for (var i = 1; i < values.length; i++) {
    if (values[i][1] === scenario && counts.hasOwnProperty(values[i][3])) {
      counts[values[i][3]]++;
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify(counts))
    .setMimeType(ContentService.MimeType.JSON);
}

function getResponseSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'submitted_at',
    'scenario',
    'scenario_label',
    'condition',
    'condition_label',
    'nickname'
  ].concat(getAnswerKeys_()));
}

function getAnswerKeys_() {
  const keys = [];
  for (var i = 1; i <= 27; i++) keys.push('Q' + i);
  for (var d = 1; d <= 12; d++) keys.push('D-' + d);
  keys.push('result_email');
  return keys;
}

function rowsToAnswers_(rows) {
  const answers = {};
  rows.forEach(function(row) {
    if (row && row.length >= 3) answers[row[0]] = row[2];
  });
  return answers;
}
