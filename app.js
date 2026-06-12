const tasks = {
  task1: [
    {
      key: "context",
      english: "Context",
      chinese: "情境模拟",
      criteria: "贴近展演真实场景，准确理解非遗首饰展演主题",
    },
    {
      key: "communication",
      english: "Communication",
      chinese: "交流展示",
      criteria: "英文表述流畅清晰，逻辑框架完整，有条理介绍非遗首饰展品关键信息",
    },
    {
      key: "culture",
      english: "Culture",
      chinese: "文化理解",
      criteria: "精准传递非遗首饰背后传统文化内涵",
    },
    {
      key: "career",
      english: "Career",
      chinese: "职业素养",
      criteria: "展现首饰设计、工艺制作相关专业知识与实操素养，贴合首饰专业岗位能力要求",
    },
    {
      key: "creativity",
      english: "Creativity",
      chinese: "创新创思",
      criteria: "展演呈现形式新颖，多元化方式完成展演创新设计",
    },
  ],
  task2: [
    {
      key: "context",
      english: "Context",
      chinese: "情境模拟",
      criteria: "正确理解中外交流场景",
    },
    {
      key: "communication",
      english: "Communication",
      chinese: "交流展示",
      criteria: "英语口语表达流利规范，围绕非遗首饰话题互动问答，职业礼仪得体。",
    },
    {
      key: "culture",
      english: "Culture",
      chinese: "文化理解",
      criteria: "跨文化表述准确，兼顾差异，向外国友人通俗讲解非遗首饰文化。",
    },
    {
      key: "career",
      english: "Career",
      chinese: "职业素养",
      criteria: "践行跨文化交际礼仪，具备岗位服务意识。",
    },
    {
      key: "creativity",
      english: "Creativity",
      chinese: "创新创思",
      criteria: "互动新颖，灵活趣味答疑",
    },
  ],
};

const taskLabels = {
  task1: "任务一",
  task2: "任务二",
};

const ratings = {};
const lockedPages = new Set();

const advancedFeedback = {
  strength: "可独立完成展演，基础英文交流顺畅，有创意，礼仪规范，了解基础文化差异。",
  improvement: "勤练口语，完善展品解说，创新展演，独立思考，优化跨文化表达。",
  advice:
    "Finish tasks smoothly with basic English and communication. Improve oral English, enrich your show and think independently.",
};

const masterFeedback = {
  strength: "展演出色，英文交流流畅，创意足，善解难，沟通得体，理解中外文化差异。",
  improvement: "深耕非遗工艺，原创展演、自主设计英文涉外问答；参与非遗社会实践与公益，树立非遗对外传播意识。",
  advice:
    "You do well in show & English communication, creative and good at solving problems. Try original performance and deeper cross-culture research, take social practice to spread heritage culture.",
};

const studentRecords = [
  { id: "20242501", task1Raw: 4.2, task1Weighted: 21.0, expert: 90, expertWeighted: 45.0, task2Raw: 4.3, task2Weighted: 21.5, total: 87.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242502", task1Raw: 4.5, task1Weighted: 22.5, expert: 90, expertWeighted: 45.0, task2Raw: 4.4, task2Weighted: 22.0, total: 89.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242503", task1Raw: 3.8, task1Weighted: 19.0, expert: 90, expertWeighted: 45.0, task2Raw: 4.0, task2Weighted: 20.0, total: 84.0, level: "进阶能手", ...advancedFeedback },
  { id: "20242504", task1Raw: 4.6, task1Weighted: 23.0, expert: 90, expertWeighted: 45.0, task2Raw: 4.5, task2Weighted: 22.5, total: 90.5, level: "匠心高手", ...masterFeedback },
  { id: "20242505", task1Raw: 4.0, task1Weighted: 20.0, expert: 90, expertWeighted: 45.0, task2Raw: 3.9, task2Weighted: 19.5, total: 84.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242506", task1Raw: 4.3, task1Weighted: 21.5, expert: 90, expertWeighted: 45.0, task2Raw: 4.2, task2Weighted: 21.0, total: 87.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242507", task1Raw: 4.7, task1Weighted: 23.5, expert: 91, expertWeighted: 45.5, task2Raw: 4.6, task2Weighted: 23.0, total: 92.0, level: "匠心高手", ...masterFeedback },
  { id: "20242508", task1Raw: 4.1, task1Weighted: 20.5, expert: 91, expertWeighted: 45.5, task2Raw: 4.2, task2Weighted: 21.0, total: 87.0, level: "进阶能手", ...advancedFeedback },
  { id: "20242509", task1Raw: 4.8, task1Weighted: 24.0, expert: 91, expertWeighted: 45.5, task2Raw: 4.7, task2Weighted: 23.5, total: 93.0, level: "匠心高手", ...masterFeedback },
  { id: "20242510", task1Raw: 3.9, task1Weighted: 19.5, expert: 91, expertWeighted: 45.5, task2Raw: 3.8, task2Weighted: 19.0, total: 84.0, level: "进阶能手", ...advancedFeedback },
  { id: "20242511", task1Raw: 4.4, task1Weighted: 22.0, expert: 91, expertWeighted: 45.5, task2Raw: 4.3, task2Weighted: 21.5, total: 89.0, level: "进阶能手", ...advancedFeedback },
  { id: "20242512", task1Raw: 4.0, task1Weighted: 20.0, expert: 92, expertWeighted: 46.0, task2Raw: 4.0, task2Weighted: 20.0, total: 86.0, level: "进阶能手", ...advancedFeedback },
  { id: "20242513", task1Raw: 4.9, task1Weighted: 24.5, expert: 92, expertWeighted: 46.0, task2Raw: 4.8, task2Weighted: 24.0, total: 94.5, level: "匠心高手", ...masterFeedback },
  { id: "20242514", task1Raw: 4.2, task1Weighted: 21.0, expert: 92, expertWeighted: 46.0, task2Raw: 4.1, task2Weighted: 20.5, total: 87.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242515", task1Raw: 4.7, task1Weighted: 23.5, expert: 92, expertWeighted: 46.0, task2Raw: 4.6, task2Weighted: 23.0, total: 92.5, level: "匠心高手", ...masterFeedback },
  { id: "20242516", task1Raw: 3.8, task1Weighted: 19.0, expert: 92, expertWeighted: 46.0, task2Raw: 3.9, task2Weighted: 19.5, total: 84.5, level: "进阶能手", ...advancedFeedback },
  { id: "20242517", task1Raw: 4.5, task1Weighted: 22.5, expert: 92, expertWeighted: 46.0, task2Raw: 4.4, task2Weighted: 22.0, total: 90.5, level: "匠心高手", ...masterFeedback },
];

const taskMenuButton = document.querySelector("#taskMenuButton");
const taskMenu = document.querySelector("#taskMenu");
const groupNameSelect = document.querySelector("#groupName");
const finalScoreInput = document.querySelector("#finalScoreInput");
const studentScore = document.querySelector("#studentScore");
const studentSummary = document.querySelector("#studentSummary");
const suggestionList = document.querySelector("#suggestionList");
const scoreBreakdownRows = document.querySelector("#scoreBreakdownRows");
const scoreChart = document.querySelector("#scoreChart");
const studentAdviceSelect = document.querySelector("#studentAdviceSelect");
const adviceRows = document.querySelector("#adviceRows");

function makeRatingKey(taskId, dimensionKey, type) {
  return `${taskId}:${dimensionKey}:${type}`;
}

function renderRows(taskId, targetId) {
  const target = document.querySelector(`#${targetId}`);
  target.innerHTML = "";

  tasks[taskId].forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="dimension">
          <strong>${item.english}</strong>
          <span>${item.chinese}</span>
        </div>
      </td>
      <td class="criteria">${item.criteria}</td>
      <td class="rating-cell"></td>
      <td class="rating-cell"></td>
    `;

    const cells = row.querySelectorAll(".rating-cell");
    cells[0].appendChild(createStarRating(taskId, item.key, "self", `${taskLabels[taskId]} ${item.chinese}学生自评`));
    cells[1].appendChild(createStarRating(taskId, item.key, "peer", `${taskLabels[taskId]} ${item.chinese}小组互评`));
    target.appendChild(row);
  });
}

function createStarRating(taskId, dimensionKey, type, label) {
  const key = makeRatingKey(taskId, dimensionKey, type);
  ratings[key] = ratings[key] || 0;

  const wrapper = document.createElement("div");
  wrapper.className = "star-rating";
  wrapper.dataset.ratingKey = key;
  wrapper.setAttribute("role", "radiogroup");
  wrapper.setAttribute("aria-label", label);

  for (let value = 1; value <= 5; value += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "star";
    button.textContent = "★";
    button.dataset.value = String(value);
    button.setAttribute("role", "radio");
    button.setAttribute("aria-label", `${value}星`);
    button.addEventListener("mouseenter", () => paintStars(wrapper, value));
    button.addEventListener("focus", () => paintStars(wrapper, value));
    button.addEventListener("mouseleave", () => paintStars(wrapper, ratings[key]));
    button.addEventListener("blur", () => paintStars(wrapper, ratings[key]));
    button.addEventListener("click", () => {
      if (lockedPages.has(taskId)) {
        return;
      }
      ratings[key] = value;
      paintStars(wrapper, value);
      updateSuggestions();
    });
    wrapper.appendChild(button);
  }

  paintStars(wrapper, ratings[key]);
  return wrapper;
}

function paintStars(wrapper, value) {
  wrapper.querySelectorAll(".star").forEach((button) => {
    const starValue = Number(button.dataset.value);
    const isActive = starValue <= value;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-checked", String(isActive && starValue === value));
  });
}

function syncNavState(pageId) {
  const isStudentPage = pageId === "task1" || pageId === "task2";

  document.querySelectorAll("[data-page]").forEach((button) => {
    let isActive = button.dataset.page === pageId;

    if (button.dataset.navRole === "student") {
      isActive = isStudentPage;
    }

    if (button.dataset.navRole === "teacher") {
      isActive = pageId === "summary";
    }

    button.classList.toggle("is-active", isActive);
  });
}

function lockPage(pageId) {
  const page = document.querySelector(`#${pageId}`);
  if (!page) {
    return;
  }

  lockedPages.add(pageId);
  page.classList.add("is-locked");

  page.querySelectorAll("button, input, select, textarea").forEach((control) => {
    control.disabled = true;
  });

  const submitButton = page.querySelector(`[data-submit-page="${pageId}"]`);
  if (submitButton) {
    submitButton.textContent = "已提交评价";
    submitButton.setAttribute("aria-disabled", "true");
  }
}

function toggleHighlightCard(card) {
  const isHighlighted = card.classList.toggle("is-highlighted");
  card.setAttribute("aria-pressed", String(isHighlighted));
}

function initHighlightCards() {
  document.querySelectorAll("[data-highlight-card]").forEach((card) => {
    card.dataset.highlightReady = "true";

    card.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleHighlightCard(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      toggleHighlightCard(card);
    });
  });
}

function showPage(pageId, focusTarget) {
  document.querySelectorAll(".page").forEach((page) => {
    const isActive = page.id === pageId;
    page.hidden = !isActive;
    page.classList.toggle("is-active", isActive);
  });

  syncNavState(pageId);

  closeTaskMenu();

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (focusTarget) {
    window.setTimeout(() => {
      document.querySelector(`#${focusTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 160);
  }
}

function closeTaskMenu() {
  taskMenu.classList.remove("is-open");
  taskMenuButton.setAttribute("aria-expanded", "false");
}

function clamp(value, min, max) {
  if (Number.isNaN(value)) {
    return 0;
  }
  return Math.min(Math.max(value, min), max);
}

function calculateScore() {
  return clamp(Number(finalScoreInput.value), 0, 100);
}

function getLevel(score) {
  if (score >= 90) return "master";
  if (score >= 80) return "advanced";
  if (score >= 60) return "beginner";
  return "foundation";
}

function getLowestDimension() {
  const totals = {};
  const counts = {};

  Object.entries(ratings).forEach(([key, value]) => {
    if (!value) return;
    const dimension = key.split(":")[1];
    totals[dimension] = (totals[dimension] || 0) + value;
    counts[dimension] = (counts[dimension] || 0) + 1;
  });

  const averages = Object.keys(totals).map((dimension) => ({
    dimension,
    average: totals[dimension] / counts[dimension],
  }));

  averages.sort((a, b) => a.average - b.average);
  return averages[0]?.dimension || "communication";
}

function dimensionAdvice(dimension) {
  const advice = {
    context: "把展演或交流开场再贴近真实场景，先点明对象、身份和任务背景。",
    communication: "继续打磨英文介绍的逻辑顺序，重点练习展品关键信息、互动问答和衔接表达。",
    culture: "补充非遗首饰的文化寓意、工艺传承和跨文化解释，让外国友人更容易理解。",
    career: "把首饰设计、制作工艺、服务礼仪等岗位能力说得更具体，体现专业素养。",
    creativity: "尝试加入情景道具、角色分工或互动提问，让展示形式更有新意。",
  };

  return advice[dimension] || advice.communication;
}

function updateSuggestions() {
  if (!studentScore || !studentSummary || !suggestionList) {
    return;
  }

  const score = calculateScore();
  const level = getLevel(score);
  const groupName = groupNameSelect.value || "所在组别";
  const scoreText = score.toFixed(1);

  studentScore.textContent = scoreText;
  studentSummary.textContent = `${groupName}组当前得分 ${scoreText} 分。`;

  document.querySelectorAll(".level-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.level === level);
  });

  const suggestions = [];
  if (level === "master") {
    suggestions.push("表现稳定优秀，可以尝试担任双语讲解员角色，带领同伴完成更完整的展演流程。");
  } else if (level === "advanced") {
    suggestions.push("整体完成度较好，下一轮重点提升表达流畅度和文化信息的准确展开。");
  } else if (level === "beginner") {
    suggestions.push("已经具备基础展示能力，建议先固定介绍框架，再逐步加入互动问答。");
  } else {
    suggestions.push("先完成主题、展品、文化含义三个核心信息点，再练习简短英文输出。");
  }

  suggestions.push(dimensionAdvice(getLowestDimension()));
  suggestions.push("展示后整理一份英文关键词卡片，覆盖 Context、Communication、Culture、Career、Creativity 五个维度。");

  suggestionList.innerHTML = suggestions.map((item) => `<li>${item}</li>`).join("");
}

function formatScore(value) {
  return Number(value).toFixed(1);
}

function levelClass(level) {
  return level === "匠心高手" ? "is-master" : "is-advanced";
}

function renderScoreBreakdown() {
  if (!scoreBreakdownRows) {
    return;
  }

  scoreBreakdownRows.innerHTML = studentRecords
    .map(
      (item) => `
        <tr>
          <td>${item.id}</td>
          <td>${formatScore(item.task1Raw)}</td>
          <td>${formatScore(item.task1Weighted)}</td>
          <td>${item.expert}</td>
          <td>${formatScore(item.expertWeighted)}</td>
          <td>${formatScore(item.task2Raw)}</td>
          <td>${formatScore(item.task2Weighted)}</td>
          <td><strong>${formatScore(item.total)}</strong></td>
          <td><span class="level-pill ${levelClass(item.level)}">${item.level}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderScoreChart() {
  if (!scoreChart) {
    return;
  }

  const ticks = [100, 95, 90, 85, 80, 75, 70, 65];
  const bars = studentRecords
    .map((item) => {
      const height = Math.max(8, ((item.total - 65) / 35) * 100);
      const index = studentRecords.indexOf(item);
      return `
        <div class="chart-item">
          <div
            class="chart-bar ${levelClass(item.level)}"
            style="--bar-height: ${height}%; --bar-delay: ${index * 45}ms"
            data-value="${formatScore(item.total)}"
            data-tooltip="${item.id}｜${formatScore(item.total)}分｜${item.level}"
            tabindex="0"
            role="img"
            aria-label="${item.id} 综合总分 ${formatScore(item.total)} 分，${item.level}"
          ></div>
          <span>${item.id}</span>
        </div>
      `;
    })
    .join("");

  scoreChart.innerHTML = `
    <div class="y-axis-title">总分</div>
    <div class="y-axis" aria-hidden="true">
      ${ticks.map((tick) => `<span>${tick}</span>`).join("")}
    </div>
    <div class="chart-plot">${bars}</div>
    <div class="x-axis-title">学号</div>
  `;
}

function renderAdviceRow(studentId) {
  if (!adviceRows) {
    return;
  }

  const item = studentRecords.find((record) => record.id === studentId) || studentRecords[0];
  adviceRows.innerHTML = `
    <tr>
      <td>${item.id}</td>
      <td><strong>${formatScore(item.total)}</strong></td>
      <td><span class="level-pill ${levelClass(item.level)}">${item.level}</span></td>
      <td class="text-cell">${item.strength}</td>
      <td class="text-cell">${item.improvement}</td>
      <td class="text-cell">${item.advice}</td>
    </tr>
  `;
}

function renderAdviceOptions() {
  if (!studentAdviceSelect) {
    return;
  }

  studentAdviceSelect.innerHTML = studentRecords
    .map((item) => `<option value="${item.id}">${item.id}｜${formatScore(item.total)}分｜${item.level}</option>`)
    .join("");
  renderAdviceRow(studentAdviceSelect.value || studentRecords[0].id);
}

renderRows("task1", "task1Rows");
renderRows("task2", "task2Rows");
renderScoreBreakdown();
renderScoreChart();
renderAdviceOptions();
updateSuggestions();
initHighlightCards();
syncNavState("task1");

taskMenuButton.addEventListener("click", () => {
  const isOpen = taskMenu.classList.toggle("is-open");
  taskMenuButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  const submitButton = event.target.closest("[data-submit-page]");
  if (submitButton) {
    lockPage(submitButton.dataset.submitPage);
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  const clickedMenu = event.target.closest(".nav-group");

  if (pageButton) {
    showPage(pageButton.dataset.page, pageButton.dataset.focus);
  }

  if (!clickedMenu) {
    closeTaskMenu();
  }
});

[groupNameSelect, finalScoreInput].forEach((input) => {
  input.addEventListener("input", updateSuggestions);
  input.addEventListener("change", updateSuggestions);
});

if (studentAdviceSelect) {
  studentAdviceSelect.addEventListener("change", () => renderAdviceRow(studentAdviceSelect.value));
}
