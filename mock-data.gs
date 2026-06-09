/**
 * Unified Data Intelligence System
 * Mock Data Generator — Google Apps Script
 * 
 * Run this script in your Google Sheet to generate sample data
 * Extensions → Apps Script → paste this → Run → createMockData
 */

function createMockData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // ── TICKETING ──────────────────────────────────────────
  let sheet = ss.getSheetByName('Ticketing') || ss.insertSheet('Ticketing');
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 7).setValues([[
    'Ticket ID', 'Name', 'Batch', 'Travel Date', 'Status', 'Passport Status', 'Amount PKR'
  ]]);
  sheet.getRange(2, 1, 8, 7).setValues([
    ['TK001', 'Ahmed Hussain',   'Batch A', '15-Jul-2026', 'Confirmed', 'Submitted',   85000],
    ['TK002', 'Fatima Zahra',    'Batch A', '15-Jul-2026', 'Pending',   'Missing',     85000],
    ['TK003', 'Mohammed Ali',    'Batch B', '22-Jul-2026', 'Confirmed', 'Submitted',   90000],
    ['TK004', 'Zainab Mirza',    'Batch B', '22-Jul-2026', 'Cancelled', 'Returned',        0],
    ['TK005', 'Hassan Raza',     'Batch C', '01-Aug-2026', 'Confirmed', 'Submitted',   92000],
    ['TK006', 'Sakina Burhani',  'Batch A', '15-Jul-2026', 'Pending',   'In Process',  85000],
    ['TK007', 'Mustafa Ezzi',    'Batch C', '01-Aug-2026', 'Confirmed', 'Submitted',   92000],
    ['TK008', 'Ruqaiya Shah',    'Batch B', '22-Jul-2026', 'Pending',   'Missing',     90000],
  ]);

  // ── FINANCE ────────────────────────────────────────────
  sheet = ss.getSheetByName('Finance') || ss.insertSheet('Finance');
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 7).setValues([[
    'Transaction ID', 'Department', 'Type', 'Description', 'Amount PKR', 'Status', 'Date'
  ]]);
  sheet.getRange(2, 1, 8, 7).setValues([
    ['FN001', 'Ticketing',  'Income',  'Batch A Collections',    510000, 'Received', 'Jun-2026'],
    ['FN002', 'Ticketing',  'Income',  'Batch B Collections',    270000, 'Partial',  'Jun-2026'],
    ['FN003', 'Properties', 'Expense', 'Maintenance - Block A',   45000, 'Paid',     'Jun-2026'],
    ['FN004', 'IT',         'Expense', 'Server Hosting',          12000, 'Paid',     'Jun-2026'],
    ['FN005', 'Events',     'Expense', 'Muharram Preparation',   150000, 'Pending',  'Jun-2026'],
    ['FN006', 'Ticketing',  'Income',  'Batch C Collections',    184000, 'Partial',  'Jun-2026'],
    ['FN007', 'Properties', 'Expense', 'Maintenance - Block B',   38000, 'Pending',  'Jun-2026'],
    ['FN008', 'Admin',      'Expense', 'Office Supplies',          8500, 'Paid',     'Jun-2026'],
  ]);

  // ── PROPERTIES ─────────────────────────────────────────
  sheet = ss.getSheetByName('Properties') || ss.insertSheet('Properties');
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 8).setValues([[
    'Property ID', 'Name', 'Block', 'Type', 'Status', 'Last Maintenance', 'Responsible', 'Issues'
  ]]);
  sheet.getRange(2, 1, 6, 8).setValues([
    ['PR001', 'Main Hall',    'Block A', 'Event Space',    'Operational',        'Jun-2026', 'Ahmed Kapasi',  0],
    ['PR002', 'Office Block', 'Block A', 'Admin',          'Operational',        'May-2026', 'Hussain Ezzi',  2],
    ['PR003', 'Guest Rooms',  'Block B', 'Accommodation',  'Under Maintenance',  'Apr-2026', 'Taher Malik',   5],
    ['PR004', 'Kitchen',      'Block A', 'Utility',        'Operational',        'Jun-2026', 'Sajeda Hasan',  1],
    ['PR005', 'Parking Area', 'Block C', 'Utility',        'Operational',        'Mar-2026', 'Mustafa Rao',   0],
    ['PR006', 'Library',      'Block B', 'Education',      'Closed',             'Jan-2026', 'Fatima Ezzi',   3],
  ]);

  // ── IT ─────────────────────────────────────────────────
  sheet = ss.getSheetByName('IT') || ss.insertSheet('IT');
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 7).setValues([[
    'System ID', 'System Name', 'Type', 'Status', 'Last Updated', 'Responsible', 'Users'
  ]]);
  sheet.getRange(2, 1, 6, 7).setValues([
    ['IT001', 'Zuwwar Portal',        'Web App',       'Live',           'Jun-2026', 'Hussain Mirza',  150],
    ['IT002', 'Finance Tracker',      'Google Sheets', 'Live',           'Jun-2026', 'IT Core Team',     8],
    ['IT003', 'Property Management',  'Web App',       'Live',           'May-2026', 'Hussain Mirza',   12],
    ['IT004', 'WhatsApp AI Bot',      'n8n + WAHA',    'In Development', 'Jun-2026', 'Hussain Mirza',    0],
    ['IT005', 'Document Archive',     'Google Drive',  'Live',           'Jun-2026', 'IT Core Team',    25],
    ['IT006', 'Ticketing System',     'Web App',       'Planned',        '-',        'TBD',              0],
  ]);

  SpreadsheetApp.getUi().alert('✅ All 4 sheets created successfully!');
}
