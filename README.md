# Gemini Gem and NotebookLM Catalog

A Google Apps Script web application for cataloging and sharing Gemini Gems and NotebookLM notebooks within your organization.

## Features

- **Dual Entry Types**: Support for both Gemini Gems and NotebookLM notebooks
- **Rich Metadata**: Track versions, descriptions, prompts, and associated files
- **User Authentication**: Tracks who created and edited each entry
- **Admin Permissions**: Role-based access control for delete operations
- **File Attachments**: Link up to 10 files per entry
- **Export Options**: Export catalog as CSV or JSON
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Create a Google Sheet

1. Create a new Google Sheet
2. Add these column headers in row 1:
   - A1: Title
   - B1: Short Description
   - C1: Version
   - D1: Full Prompt
   - E1: Shared URL
   - F1: Created By
   - G1: Created Date
   - H1: Last Edited By
   - I1: Last Edited Date
   - J1: Files
   - K1: Entry Type

3. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

### 2. Create the Apps Script Project

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default `Code.gs` content
3. Create the following files with their corresponding content from this directory:
   - `Code.gs`
   - `AuthService.gs`
   - `SheetService.gs`
   - `Index.html`
   - `Script.html`
   - `Styles.html`

4. In `SheetService.gs`, replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID

### 3. Initialize Admin Users

1. In the Apps Script editor, select `setupInitialAdmin` from the function dropdown
2. Click the Run button (▶️)
3. Authorize the script when prompted
4. Check the execution log to verify your email was added

### 4. Deploy as Web App

1. Click **Deploy > New deployment**
2. Select type: **Web app**
3. Configure settings:
   - Description: "Gem and Notebook Catalog"
   - Execute as: **Me**
   - Who has access: **Anyone with Google account** (or your organization)
4. Click **Deploy**
5. Copy the web app URL

### 5. Share with Your Team

Share the web app URL with your team members. The first time they access it, they'll need to authorize the app.

## Admin Management

### Initial Admin Setup

The person who runs `setupInitialAdmin()` becomes the first admin.

### Adding More Admins

1. Login as an admin
2. Click **⚙ Admin Settings** in the header
3. Enter the email address of the user you want to add
4. Click **Add**

### Removing Admins

1. Open **⚙ Admin Settings**
2. Click **Remove** next to the user you want to remove
3. Note: You cannot remove the last admin (prevents lockout)

## Usage

### Adding a Gem

1. Click **+ Add New Item**
2. Select **Gemini Gem** as the entry type
3. Fill in:
   - Title
   - Short Description (max 200 chars)
   - Version (e.g., "1.0", "v2.1")
   - Full Prompt (the complete system prompt)
   - Shared Gem URL (from Gemini)
4. Optionally add related files (max 10)
5. Click **Save Gem**

### Adding a NotebookLM Entry

1. Click **+ Add New Item**
2. Select **NotebookLM** as the entry type
3. Fill in:
   - Title
   - Short Description (max 200 chars)
   - NotebookLM URL
4. Optionally add related files
5. Click **Save Gem**

### Editing Entries

1. Find the entry you want to edit
2. Click the **Edit** button
3. Make your changes
4. Click **Save Gem**

### Deleting Entries (Admin Only)

1. Find the entry you want to delete
2. Click the **Delete** button (only visible to admins)
3. Confirm the deletion

## Customization

### Branding

Edit the following in `Styles.html` to match your brand:

```css
:root {
  --primary-color: #009596;        /* Main brand color */
  --primary-dark: #007a7b;         /* Darker shade for hover states */
  --secondary-color: #EC7A08;      /* Accent/warning color */
  --accent-color: #7551A6;         /* Badge color */
  /* ... */
}
```

### Application Title

Edit `Code.gs` to change the app title:

```javascript
.setTitle('Your Custom Title Here')
```

Edit `Index.html` to change the header:

```html
<h1>Your Custom Title Here</h1>
```

## Security Features

- **Backend Validation**: Delete permission checked server-side (cannot be bypassed)
- **Frontend UI**: Delete buttons hidden from non-admins
- **Audit Trail**: All entries track who created and last edited them
- **Admin List Protection**: Stored in Script Properties (not accessible to users)
- **Last Admin Protection**: Cannot remove the final admin user

## File Structure

```
├── Code.gs            # Entry point and setup
├── AuthService.gs     # User authentication and admin management
├── SheetService.gs    # Data layer (CRUD operations)
├── Index.html         # Main HTML structure
├── Script.html        # Client-side JavaScript
├── Styles.html        # CSS styles
└── README.md          # This file
```

## Troubleshooting

### "Script function not found" error

Make sure all files are created in the Apps Script project and saved.

### Admin Settings button not showing

1. Verify you ran `setupInitialAdmin()` in the Apps Script editor
2. Check Script Properties (**Project Settings > Script Properties**) for `ADMIN_USERS`
3. Redeploy the web app with a **New version**
4. Clear browser cache or open in incognito mode

### Cannot delete entries

Only admin users can delete entries. Check admin list in **Admin Settings**.

### Changes not appearing

After editing code in Apps Script:
1. Click **Deploy > Manage deployments**
2. Click **Edit** on your deployment
3. Select **New version**
4. Click **Deploy**
5. Refresh the web app (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)

## License

This code is provided as-is for use within your organization.
