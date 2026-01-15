# 🚀 IOCL Project – Team Collaboration Guide

This repository contains the **IOCL project**, developed collaboratively by a frontend team and an ML/backend team. To ensure smooth development, safe deployments, and zero conflicts, **all contributors must strictly follow this workflow**.

---

## 📁 Project Structure

```
iocl-website/
├── frontend/          # React + Vite frontend (deployed on Vercel)
├── ml-model/          # ML / YOLO / Flask backend
└── README.md
```

---

## 🌿 Branch Strategy (VERY IMPORTANT)

| Branch Name            | Purpose                                        | Who Should Use It     |
| ---------------------- | ---------------------------------------------- | --------------------- |
| `main`                 | 🚀 Production branch (auto-deployed on Vercel) | ❌ No direct commits   |
| `frontend-development` | Frontend integration branch                    | Frontend team         |
| `ml-model-development` | ML / backend integration branch                | ML team               |
| `frontend-feature-*`   | Individual frontend features                   | Frontend contributors |

---

## 🚫 Mandatory Rules (Read Carefully)

❌ **Do NOT push directly to `main`**
❌ **Do NOT change Vercel settings**
❌ **Do NOT mix frontend and ML changes in one PR**

✅ Always create a feature branch
✅ Always raise a Pull Request (PR)

---

## 👩‍💻 Frontend Team Workflow

### 1️⃣ Create a feature branch

```bash
git checkout frontend-development
git pull origin frontend-development
git checkout -b frontend-feature-<feature-name>
```

Example:

```bash
frontend-feature-navbar
```

---

### 2️⃣ Work only inside the `frontend/` folder

```bash
cd frontend
npm install
npm run dev
```

---

### 3️⃣ Commit & push your changes

```bash
git add .
git commit -m "Add <feature-name>"
git push origin frontend-feature-<feature-name>
```

---

### 4️⃣ Open a Pull Request

* **FROM:** `frontend-feature-<feature-name>`
* **TO:** `frontend-development`

After review, the project maintainer will merge it into `main`.

---

## 🤖 ML / Backend Team Workflow

### 1️⃣ Create ML development branch

```bash
git checkout main
git pull origin main
git checkout -b ml-model-development
git push -u origin ml-model-development
```

---

### 2️⃣ Work only inside `ml-model/`

Expected structure:

```
ml-model/
├── model/
├── detection/
├── api/
│   └── app.py   # Flask API
└── requirements.txt
```

---

### 3️⃣ Commit & push ML changes

```bash
git add .
git commit -m "Add ML model / Flask API"
git push origin ml-model-development
```

---

### 4️⃣ Open a Pull Request

* **FROM:** `ml-model-development`
* **TO:** `main`

⚠️ Do NOT include frontend changes in this PR.

---

## 🚀 Deployment Behavior (Automatic)

* Every Pull Request gets a **Preview Deployment**
* Merging into `main` triggers **Production Deployment**
* ML-only changes do **not** affect frontend UI

---

## 🧠 Quick Summary 

> 🔹 Frontend PR → `frontend-development`
> 🔹 ML PR → `ml-model-development`

