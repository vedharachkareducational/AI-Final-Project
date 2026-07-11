# VertexSoft Proposal Generator URL: https://ai-final-project-dusky.vercel.app/ 🚀

<img width="1899" height="967" alt="image" src="https://github.com/user-attachments/assets/0e3999cf-121f-4621-80ed-27ea5a4ba708" />


An autonomous B2B SaaS automation pipeline designed for the **Lenovo Next Gen AI Internship**. This project allows potential clients to input their requirements into a Next.js web application deployed on **Vercel**, which triggers an `n8n` workflow that uses AI to generate, format, and email a professional PDF project proposal seamlessly.

## 🏗️ Architecture Flow
1. **Vercel Frontend (Next.js):** A dark-mode optimized React form captures `schoolName`, `email`, and `requirements`, hosted live on Vercel.
2. **n8n Webhook:** Receives the POST request instantly (Production mode/Published).
3. **OpenAI (Basic LLM Chain):** Acts as a senior tech consultant and drafts a customized 300-word pitch.
4. **Google Drive Node:** Duplicates the master `VertexSoft Proposal Template`.
5. **Google Docs Node:** Executes a dynamic Find & Replace for `{{School_Name}}`, `{{Current_Date}}`, and `{{Proposal_Text}}`.
6. **Google Drive Node (Download):** Converts the populated document to PDF format.
7. **Gmail Node:** Dispatches the final PDF directly to the client's inbox.

## 💻 Tech Stack
* **Frontend Hosting:** Vercel
* **Frontend Framework:** Next.js (App Router), React, Tailwind CSS
* **Backend / Orchestration:** n8n Workflow Automation
* **AI Engine:** OpenAI via Basic LLM Chain 
* **Integrations:** Google Docs API, Google Drive API, Gmail API

## ⚙️ Setup & Deployment Instructions

### Frontend (Next.js & Vercel)
1. Ensure the `fetch()` URL in your source code points to your **Active n8n Production Webhook URL** (the URL without `-test`).
2. Deploy the Next.js repository directly to **Vercel** via the GitHub Integration.
3. Use the generated live Vercel URL to access your production deployment interface.

### Backend (n8n) ( For working you can see the proposal mailed to respective mail )
<img width="1771" height="651" alt="image" src="https://github.com/user-attachments/assets/19e42f15-51c8-48ce-8436-0d20be4bc99c" />

1. Import the workflow JSON into your n8n instance.
2. Ensure your Google and Gmail API credentials are connected and authenticated.
3. Update the `$('Google Drive')` file ID references if you use a newly created Google Doc template.
4. Click **Publish** in the top right corner of the n8n canvas to ensure it runs autonomously.

## 📝 Document Templating Notes
* Keep expression mapping strictly to plain text to prevent rendering errors.
* To ensure background watermarks survive the PDF export process, anchor the watermark image inside the document **Header** using the 'Behind text' layout option.

---
*Created by Ved Harachkar for VertexSoft Labs/ Lenovo Next Gen AI Internship*
