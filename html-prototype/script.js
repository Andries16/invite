document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const metaTheme = document.querySelector('meta[name="color-scheme"]');
  const themeIcon = themeBtn.querySelector("i");
  const chatHistory = document.getElementById("chat-history");
  const sendBtn = document.getElementById("send-btn");
  const promptInput = document.getElementById("prompt-input");
  const suggestionChips = document.querySelectorAll(".suggestion-chip");

  // Initialize Theme
  const updateThemeIcon = (theme) => {
    if (theme === "dark") {
      themeIcon.className = "fa-solid fa-sun";
    } else if (theme === "light") {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      // System default -> check matchMedia for icon
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  };

  const currentTheme = localStorage.getItem("color-scheme");
  if (currentTheme) {
    metaTheme.content = currentTheme;
    updateThemeIcon(currentTheme);
  } else {
    updateThemeIcon("light dark");
  }

  // Toggle Theme
  themeBtn.addEventListener("click", () => {
    let newTheme = "light";

    // Use a two-state control: system setting or opposite.
    const isCurrentlyDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (metaTheme.content === "light dark") {
      // It's on system. Pin it to the opposite.
      newTheme = isCurrentlyDark ? "light" : "dark";
    } else if (metaTheme.content === "light") {
      // It's pinned to light. Next state is dark.
      newTheme = "dark";
    } else {
      // It's pinned to dark. Next state is system.
      newTheme = "light dark";
      localStorage.removeItem("color-scheme");
    }

    if (newTheme !== "light dark") {
      localStorage.setItem("color-scheme", newTheme);
    }

    metaTheme.content = newTheme;
    updateThemeIcon(newTheme);
  });

  // Chat functionality (mock)
  const addMessage = (text, isUser = true) => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-message ${isUser ? "user-message" : "ai-message"}`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerHTML = `<i class="fa-solid fa-${isUser ? "user" : "robot"}"></i>`;

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);

    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  };

  const handleSend = () => {
    const text = promptInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    promptInput.value = "";

    // Mock AI response
    setTimeout(() => {
      addMessage(
        "I'm updating the design based on your request. Just a moment...",
        false,
      );
    }, 600);
  };

  sendBtn.addEventListener("click", handleSend);

  promptInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  suggestionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      promptInput.value = chip.textContent;
      handleSend();
    });
  });
});
