const SHEET_NAME = 'responses_wide';

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  const sheet = getResponseSheet_();
  ensureHeader_(sheet, payload.header || []);

  const answers = payload.answers || rowsToAnswers_(payload.rows || []);
  const scenarioMeta = payload.scenarioMeta || {};
  const rowMap = {
    submitted_at: payload.submittedAt || new Date().toISOString(),
    language: payload.language || '',
    scenario: payload.scenario || '',
    scenario_label: payload.scenarioLabel || '',
    condition: payload.condition || '',
    condition_label: payload.conditionLabel || '',
    participant_id: payload.participantId || payload.nickname || ''
  };

  getScenarioMetaKeys_().forEach(function(key) {
    rowMap[key] = scenarioMeta[key] || '';
  });

  getAnswerKeys_().forEach(function(key) {
    rowMap[key] = answers[key] || '';
  });

  const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = header.map(function(key) {
    return rowMap.hasOwnProperty(key) ? rowMap[key] : '';
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
  const header = values[0] || [];
  const scenarioIndex = header.indexOf('scenario');
  const conditionIndex = header.indexOf('condition');
  const counts = {c1: 0, c2: 0, c3: 0, c4: 0};

  for (var i = 1; i < values.length; i++) {
    const rowScenario = scenarioIndex >= 0 ? values[i][scenarioIndex] : '';
    const rowCondition = conditionIndex >= 0 ? values[i][conditionIndex] : '';
    if (rowScenario === scenario && counts.hasOwnProperty(rowCondition)) {
      counts[rowCondition]++;
    }
  }

  const body = JSON.stringify(counts);
  if (params.callback) {
    return ContentService
      .createTextOutput(params.callback + '(' + body + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(body)
    .setMimeType(ContentService.MimeType.JSON);
}

function getResponseSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet, extraHeader) {
  const header = [
    'submitted_at',
    'language',
    'scenario',
    'scenario_label',
    'condition',
    'condition_label',
    'participant_id'
  ].concat(getScenarioMetaKeys_()).concat(getAnswerKeys_());
  const seen = {};
  header.forEach(function(key) {
    seen[key] = true;
  });
  (extraHeader || []).forEach(function(key) {
    if (key && !seen[key]) {
      header.push(key);
      seen[key] = true;
    }
  });
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(header);
    return;
  }
  const current = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
  const currentSet = {};
  current.forEach(function(key) {
    currentSet[key] = true;
  });
  const missing = header.filter(function(key) {
    return !currentSet[key];
  });
  if (missing.length) {
    sheet.getRange(1, current.length + 1, 1, missing.length).setValues([missing]);
  }
}

function getScenarioMetaKeys_() {
  return [
    'aa_level',
    'pts_level',
    'guilt_level',
    'scenario_type',
    'title_text',
    'caption_text',
    'visibility_setting',
    'views',
    'likes',
    'comments',
    'shares',
    'follower_gain',
    'start_image_asset',
    'video_asset',
    'selected_direction_id',
    'selected_direction_label',
    'direction_intensity',
    'direction_expected_views',
    'direction_expected_followers',
    'selected_editing_id',
    'selected_editing_label',
    'editing_intensity',
    'editing_expected_views',
    'editing_expected_followers',
    'selected_title_id',
    'selected_title_label',
    'title_intensity',
    'title_expected_views',
    'title_expected_followers',
    'selected_caption_id',
    'selected_caption_label',
    'caption_intensity',
    'caption_expected_views',
    'caption_expected_followers',
    'selected_visibility_id',
    'selected_visibility_label',
    'visibility_intensity',
    'visibility_expected_views',
    'visibility_expected_followers',
    'stimulation_score',
    'total_expected_views',
    'total_expected_followers'
  ];
}

function getAnswerKeys_() {
  const keys = [];
  for (var i = 1; i <= 43; i++) keys.push('Q' + i);
  for (var d = 1; d <= 12; d++) keys.push('D-' + d);
  keys.push('result_email');
  keys.push('researcher_code');
  return keys;
}

function rowsToAnswers_(rows) {
  const answers = {};
  rows.forEach(function(row) {
    if (row && row.length >= 3) answers[row[0]] = row[2];
  });
  return answers;
}
