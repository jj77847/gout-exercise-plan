const workouts = {
  Monday: {
    focus: "Mobility + Light Cardio",
    routine: [
      "5-min warm-up walk",
      "10 min mobility drills",
      "15 min walk or light cycling + stretching"
    ]
  },
  Tuesday: {
    focus: "Full Body Strength (Bodyweight)",
    routine: [
      "10 chair squats",
      "10 wall push-ups",
      "10 seated knee raises",
      "10 step-ups",
      "30s plank",
      "2–5 min cooldown walk"
    ]
  },
  Wednesday: {
    focus: "Cardio + Stretch",
    routine: [
      "20–30 min brisk walk or bike",
      "5–10 min full-body stretching"
    ]
  },
  Thursday: {
    focus: "Strength + Balance",
    routine: [
      "10 squats",
      "10 leg lifts",
      "10 rows",
      "30s single-leg stand",
      "10 wall push-ups",
      "5 min stretch"
    ]
  },
  Friday: {
    focus: "Recovery Yoga + Walk",
    routine: [
      "15 min gentle yoga",
      "10–15 min walk"
    ]
  }
};

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weeks = 4;
const workoutTotals = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 };

const container = document.getElementById("weekly-container");

for (let w = 1; w <= weeks; w++) {
  weekDays.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card " + day.toLowerCase();
    card.innerHTML = `
      <h3>Week ${w} - ${day}</h3>
      <p><strong>Focus:</strong> ${workouts[day].focus}</p>
      <ul>${workouts[day].routine.map(r => `<li>${r}</li>`).join("")}</ul>
    `;
    workoutTotals[day] += workouts[day].routine.length;
    container.appendChild(card);
  });
}

// Render Pie Chart
const ctx = document.getElementById("exerciseChart").getContext("2d");
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: Object.keys(workoutTotals),
    datasets: [{
      label: 'Exercise Totals (4 Weeks)',
      data: Object.values(workoutTotals),
      backgroundColor: [
        '#f44336',
        '#ff9800',
        '#ffeb3b',
        '#4caf50',
        '#2196f3'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
