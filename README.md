# 💬 Contact Form with Validation & UX Enhancements

This is a simple yet fully functional **HTML + CSS + JavaScript** contact form designed with **client-side validation**, **beautiful styling**, and an auto-dismissing **success message**.
---

🔗 Live Demo: https://pegasus-x.github.io/contact-form/
 
## 🚀 Features

- 🧾 Input fields: Name, Email, Message
- ✅ JavaScript validation for required fields and email format
- ❌ Shows inline error messages if validation fails
- 🎉 Shows success message on valid submission (no backend)
- ⏳ Success message disappears after 3 seconds
- 💻 Responsive and clean UI design
- 📜 Pure HTML, CSS, and vanilla JavaScript — no libraries

---

## 🧰 Tech Stack

- HTML5
- CSS3 (Flexbox, transitions)
- JavaScript (Regex, DOM manipulation)

---

## 📦 Files Overview

/contact-form/
├── index.html # Main form markup
├── style.css # Form styling and layout
├── script.js # Validation logic
└── README.md # Project description

---

## ✅ Validation Details

- **Name**: Required, non-empty
- **Email**: Required, must match regex:
- **Message**: Required, non-empty

---

## 🧪 Test Scenarios

- Submit with empty fields ➜ errors appear
- Enter invalid email (e.g. `test@`, `test@com`) ➜ email error
- Submit valid input ➜ form resets + success message
- Special characters tested: `!@#$%^&*()_+{}[]<>`

---

## 🧠 Future Enhancements (Suggestions)

- Dark mode toggle 🌗
- Store inputs in localStorage 🧠
- Send data to a backend (Node.js, PHP, Firebase)
- Add reCAPTCHA or form security


## 📄 License

MIT License – free to use, modify, and share.

---

## 🙌 Author

Built with ❤️ by Pegasus X

