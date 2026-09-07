// คลังคำถาม
const quizData = [
  {
    question: "1. หักภาษี ณ ที่จ่าย บุคคลธรรมดาหักนิติบุคคลใช้แบบใด?",
    options: ["ภ.ง.ด.1", "ภ.ง.ด.3", "ภ.ง.ด.53", "ภ.ง.ด.90"],
    answer: 2, // ตัวเลือกที่ 3 (นับเริ่มจาก 0)
    explanation: "💡 ภ.ง.ด.53 ใช้สำหรับนิติบุคคลเป็นผู้ถูกหักภาษี ณ ที่จ่าย"
  },
  {
    question: "2. อัตราภาษีมูลค่าเพิ่ม (VAT) ในปัจจุบันคือเท่าใด?",
    options: ["5%", "7%", "9%", "10%"],
    answer: 1,
    explanation: "💡 ปัจจุบันประเทศไทยคงอัตราภาษีมูลค่าเพิ่มไว้ที่ 7%"
  }
];

let currentIdx = 0;

function loadQuestion() {
  const q = quizData[currentIdx];
  document.getElementById("question").innerText = q.question;
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => selectOption(btn, idx);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(btn, selectedIdx) {
  const q = quizData[currentIdx];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.disabled = true);

  if (selectedIdx === q.answer) {
    btn.classList.add("correct");
    document.getElementById("feedback").innerText = "✨ ถูกต้อง! " + q.explanation;
  } else {
    btn.classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    document.getElementById("feedback").innerText = "❌ ยังไม่ถูกต้อง " + q.explanation;
  }
  
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-card").innerHTML = "<h2>🎉 ทำข้อสอบครบเรียบร้อยแล้ว!</h2>";
  }
}

loadQuestion();