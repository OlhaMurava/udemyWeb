var buttonColours = ["red", "blue", "green", "yellow"]; 
var gamePattern = []; // Масив для збереження послідовності кольорів гри
var userClickedPattern = []; // Масив для збереження послідовності кольорів, які вибрав користувач

var hasPressedKey = false; 
var level = 0; 

function nextSequence() {
  userClickedPattern = []; // Очищаємо послідовність користувача
  level++; 
  $("#level-title").text("Level " + level); 
  var randomNumber = Math.floor(Math.random() * 4); 
  var randomChosenColour = buttonColours[randomNumber]; 
  gamePattern.push(randomChosenColour); 

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 
  playSound(randomChosenColour); 
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3"); 
  audio.play(); 
}

// Обробник кліку по кнопці
$(".btn").click(function() {
  var userChosenColour = $(this).attr('id'); // Отримуємо id кнопки, яку натиснув користувач
  userClickedPattern.push(userChosenColour); // Додаємо вибір користувача до масиву userClickedPattern
  playSound(userChosenColour); // Відтворюємо звук для вибраного кольору

  // Викликаємо функцію checkAnswer і передаємо індекс останнього вибору користувача
  checkAnswer(userClickedPattern.length - 1);

  animatePress(userChosenColour); // Анімація натискання кнопки
});

// Функція для анімації натискання кнопки
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"); // Додаємо клас pressed для натиснутої кнопки
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed"); // Видаляємо клас pressed через 100 мс
  }, 100);
}

// Обробник натискання клавіші
$(document).keydown(function() {
  if (!hasPressedKey) { 
    nextSequence(); 
    $("#level-title").text("Level " + level); 
    hasPressedKey = true; 
  }
});

// Функція для перевірки відповіді користувача
function checkAnswer(currentLevel) {
  // Перевіряємо, чи відповідає вибір користувача послідовності гри
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Якщо відповідь правильна, перевіряємо, чи всі кольори вибрані
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Генеруємо нову послідовність після правильної відповіді
      }, 1000);
    }
  } else {
    playSound("wrong"); 
    $("body").addClass("game-over"); 
    $("#level-title").text("Game Over, Press Any Key to Restart"); 

    setTimeout(function () {
      $("body").removeClass("game-over"); 
    }, 200);

    startOver(); // Перезапускаємо гру
  }
}

// Функція для перезапуску гри
function startOver() {
  level = 0; 
  gamePattern = []; 
  hasPressedKey = false;
}
