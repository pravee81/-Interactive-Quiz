# 🎯 Quiz Web App

A simple, responsive quiz web application built using **HTML, CSS, and JavaScript**.  
This project includes a welcome page with instructions, a quiz with a timer, navigation controls, and a result page with a graphical summary.

---

## 🚀 Features:
- ✅ **Welcome page** with quiz instructions and Start button.
- ✅ 10 multiple-choice questions with 3 options each.
- ✅ Timer 15 minutes on the top-right corner.
- ✅ **Navigation flow:**
  - First question: Next button only.
  - Intermediate questions: Previous and Next buttons.
  - Last question: Submit button instead of Next.
- ✅ Pagination indicators at the bottom (horizontal numbering).
- ✅ Automatic time-out handling for unanswered questions.
- ✅ Result page displaying:
  - Number of correct, wrong, and unanswered questions.
  - Color-coded circular visualization (like a flowchart).
- ✅ Fully responsive and clean layout.

---

## 📂 Project Structure:
quiz-app/ │ ├─ index.html # Contains Welcome page, Quiz interface, and Result page containers ├─ style.css # Styling for all screens and components └─ script.js # All logic for question rendering, navigation, timer, and result display


---

## 💡 How to Run:
1. Download or clone the repository:
2. Open the `index.html` file in any modern browser.
3. Read the instructions on the welcome screen and click **Start Quiz**.
4. Answer questions, navigate using the Next/Previous buttons, and click **Submit** on the last question.
5. View the results with circular progress indicators for correct, wrong, and unanswered questions.

---

## 📈 Result Page Flowchart:
- The result screen shows three colored circles (like a doughnut chart):
- 🟢 **Answered Correct** (inside the circle: `7/10` if 7 correct)
- 🔴 **Wrong Answered**  
- ⚪ **Unanswered**  
- The colors and counts are shown below the circles with legends.

---

## 🛠️ Technologies Used:
- HTML5  
- CSS3  
- Vanilla JavaScript  

---

## 📷 Screens Included:
- Welcome Page with instructions  
- Quiz interface with timer, question, answers, pagination  
- Result page with circular graphical visualization  

---

## ✍️ Customization:
- You can edit the questions by modifying the `questions` array in `script.js`.
- The timer duration can be changed by adjusting the `timeLeft` value in the script.
- You can style the circles or other components by editing `style.css`.

---

## 👩‍💻 Author
Made with ❤️ by Praveena BN
- LinkedIn: [https://www.linkedin.com/in/praveena-bn/]
 

---


## ✅ Quick Preview Flow:
Welcome Page -> Start Quiz -> Questions (with Timer & Navigation) -> Submit -> Results (with Circular Visualization)

