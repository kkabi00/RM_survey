const SHEET_NAME = 'responses';

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  const sheet = getResponseSheet_();
  ensureHeader_(sheet);

  const base = [
    payload.submittedAt || new Date().toISOString(),
    payload.scenario || '',
    payload.scenarioLabel || '',
    payload.condition || '',
    payload.conditionLabel || '',
    payload.nickname || ''
  ];

  (payload.rows || []).forEach(function(row) {
    sheet.appendRow(base.concat([
      row[0] || '',
      row[1] || '',
      row[2] || ''
    ]));
  });

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
  const seen = {};

  for (var i = 1; i < values.length; i++) {
    const key = [values[i][0], values[i][3], values[i][5]].join('|');
    if (!seen[key] && values[i][1] === scenario && counts.hasOwnProperty(values[i][3])) {
      seen[key] = true;
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
    'nickname',
    'question',
    'section',
    'value'
  ]);
}
