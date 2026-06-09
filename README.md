# 🤖 Unified Data Intelligence System

A WhatsApp-based AI assistant that connects to your organization's data and answers natural language questions in real time — no app, no dashboard, just WhatsApp.

Built as a production prototype for **Fayz e Husayni**, a community organization in Karachi, Pakistan. Designed to be reusable for any organization that wants to query their data through WhatsApp.

---

## 📱 Demo

| User asks | Bot responds |
|---|---|
| "How many confirmed tickets are there?" | "There are 4 confirmed tickets: Ahmed Hussain, Mohammed Ali, Hassan Raza, Mustafa Ezzi ✅" |
| "Which properties need attention?" | "Properties with open issues: • Guest Rooms (5 issues) • Library (3 issues) • Office Block (2 issues) ⚠️" |
| "Send me finance report" | Full formatted finance report delivered in chat 📊 |
| "What is the total income received?" | "Total income received: PKR 510,000 (Batch A) 📊" |

---

## 🏗️ Architecture

```
WhatsApp Message
      ↓
   WAHA (WhatsApp HTTP API)
      ↓
   n8n Webhook Trigger
      ↓
   Group Filter (IF node)
      ↓
   Google Sheets / Database Fetch
      ↓
   Report Request? (IF node)
      ↓ Yes                    ↓ No
   Format Report         Groq AI (LLaMA)
      ↓                        ↓
   Send Text Report      Send AI Answer
      ↓                        ↓
   WAHA → WhatsApp Group Reply
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [n8n](https://n8n.io) | Workflow automation and middleware |
| [WAHA](https://waha.devlike.pro) | WhatsApp HTTP API (self-hosted) |
| [Groq](https://groq.com) | AI inference (LLaMA 3.1 — free tier) |
| [Google Sheets](https://sheets.google.com) | Mock database / data source |
| [Docker](https://docker.com) | Container orchestration |
| Google Sheets API | Direct sheet data fetching |

---

## ✨ Features

- **Natural language queries** — ask anything in plain English
- **Multi-department data** — Ticketing, Finance, Properties, IT
- **On-demand reports** — "send me finance report" delivers a formatted report instantly
- **Group-based access** — only responds in a designated WhatsApp group
- **Error handling** — friendly error messages if AI or data source fails
- **Live data** — always reads from the latest database state
- **Extensible** — swap Google Sheets for MySQL, PostgreSQL, or any REST API

---

## 📋 Prerequisites

- Windows/Mac/Linux with Docker installed
- Google Cloud account (for Sheets API)
- Groq API key (free at [console.groq.com](https://console.groq.com))
- A WhatsApp number for the bot (personal or business)

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/rajjcreationss-hub/unified-data-intelligence-system.git
cd unified-data-intelligence-system
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

```env
# n8n
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_password

# WAHA
WAHA_DASHBOARD_USERNAME=admin
WAHA_DASHBOARD_PASSWORD=your_password
WAHA_API_KEY=your_waha_api_key

# Groq
GROQ_API_KEY=your_groq_api_key

# Google Sheets
GOOGLE_SHEETS_API_KEY=your_sheets_api_key
SPREADSHEET_ID=your_spreadsheet_id
```

### 3. Start the services

```bash
docker compose up -d
```

### 4. Access the dashboards

| Service | URL |
|---|---|
| n8n | http://localhost:5678 |
| WAHA Dashboard | http://localhost:3000/dashboard |

### 5. Connect WhatsApp

1. Open WAHA dashboard at `http://localhost:3000/dashboard`
2. Start a new session named `default`
3. Scan the QR code with your WhatsApp number

### 6. Import the n8n workflow

1. Open n8n at `http://localhost:5678`
2. Create new workflow → Import from file
3. Upload `workflow.json` from this repository
4. Update the Google Sheets credentials and group chat ID
5. Publish the workflow

### 7. Set WAHA webhook

In WAHA dashboard → default session → settings → set webhook URL to:
```
http://host.docker.internal:5678/webhook/whatsapp-incoming
```

---

## 📁 Project Structure

```
unified-data-intelligence-system/
├── docker-compose.yml       # Docker services config
├── .env.example             # Environment variables template
├── workflow.json            # n8n workflow export
├── scripts/
│   └── mock-data.gs         # Google Apps Script to generate mock data
└── README.md
```

---

## 🔧 Customizing the Data Source

The system fetches data from Google Sheets by default. To connect a different database, update the **"Code in JavaScript"** node in n8n:

**For MySQL:**
Replace the Google Sheets API calls with n8n's MySQL node.

**For REST API:**
Replace with an HTTP Request node pointing to your API endpoint.

**For PostgreSQL/Supabase:**
Use n8n's Postgres node with your connection string.

The AI prompt and response formatting remain unchanged — only the data fetch node needs updating.

---

## 💬 Example Queries

```
Natural language questions:
"How many confirmed tickets are there?"
"Which properties have open issues?"
"Who is responsible for Guest Rooms?"
"How many IT systems are live?"
"What is the total budget for Events?"

Report generation:
"Send me finance report"
"Send me ticketing report"
"Send me properties report"
"Send me IT report"
```

---

## 🗺️ Roadmap

- [ ] MySQL / PostgreSQL direct connection
- [ ] Excel/PDF file delivery via WhatsApp (requires WAHA Plus)
- [ ] Dedicated WhatsApp Business number
- [ ] Cloud deployment (VPS)
- [ ] Access control — member whitelist
- [ ] Multi-language support (Urdu/Arabic)
- [ ] Voice message query support

---

## 🏢 Production Requirements

| Item | Cost |
|---|---|
| VPS Server (DigitalOcean/Contabo) | ~$5-10/month |
| WAHA Plus | $19/month |
| Dedicated WhatsApp number | Varies |

---

## 👤 Author

**Hussain Mirza**
Freelance Automation Developer — Raj Creations
Karachi, Pakistan

- GitHub: [@rajjcreationss-hub](https://github.com/rajjcreationss-hub)
- Upwork: [Hussain Mirza — Raj Creations](https://www.upwork.com/freelancers/~014b46dd466f24c337)

---

## 📄 License

MIT License — free to use, modify and deploy for your organization.

---

## 🙏 Acknowledgements

Built for **Fayz e Husayni** community organization as a prototype for their unified data intelligence initiative.
