const form = document.forms.form;

// Массив объектов с марками, моделями и их базовыми ценами
const carsList = [
    {brand: "Mazda", model: "Mazda3", price:1600000},
    {brand: "Mazda", model: "Mazda6", price:1900000},
    {brand: "Mazda", model: "Mazda CX-5", price:2000000},
    {brand: "Mazda", model: "Mazda CX-9", price:2200000},
    {brand: "Jaguar", model: "XF", price:2000000},
    {brand: "Jaguar", model: "XJ", price:2200000},
    {brand: "Jaguar", model: "XE", price:2300000},
    {brand: "Renault", model: "Arkana", price:1500000},
    {brand: "Renault", model: "Duster", price:1600000},
    {brand: "Renault", model: "Sandero", price:1300000},
    {brand: "Renault", model: "Logan", price:1200000},
    {brand: "Opel", model: "Astra", price:170000},
    {brand: "Opel", model: "Insignia", price:1800000},
    {brand: "Opel", model: "Corsa", price:1300000}
  ];
  

  const carModel = document.querySelector(".car-model")

  const brandSelect = document.getElementById("car-brand-select");
  const modelSelect = document.getElementById("car-model-select");
  modelSelect.disabled = true;
 
 // создаем условие, при котором возможность выбора модели автомобиля появляется только после выбора марки
  brandSelect.addEventListener("change", (event) => {
   [event.target.value];
    modelSelect.innerHTML = "";
    if (event.target.value == "Select") {
        modelSelect.disabled = true;
      } else {
        modelSelect.disabled = false;
        
  // перебираем модели автомобилейб добавляем в опции
        const carsModels = carsList.filter(car => car.brand === event.target.value);
carsModels.forEach((car) => {
  const option = document.createElement("option");
  option.text = car.model;
  option.value = car.model;
  modelSelect.add(option);
});
      }

    carModel.append(modelSelect);
  });


  const fuelCheckboxes = document.querySelectorAll('.fueltype-checkbox input[type="checkbox"]');
      let fuelTypeSelected = form.elements.fuel;
  let fuelCoefficient = 0;

  // оставляем возможность выбора только одного чекбокса
  fuelCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
          fuelCheckboxes.forEach((otherCheckbox) => {
              if (otherCheckbox !== checkbox) {
                  otherCheckbox.checked = false;
              }
          });
      }
    

      // указываем коэффициенты, соответствующие разным видам топлива
      fuelTypeSelected = checkbox.value;
          if (fuelTypeSelected === "petrol") {
            fuelCoefficient = 0.7;
          } else if (fuelTypeSelected === "diesel") {
            fuelCoefficient = 0.8;
          } else if (fuelTypeSelected=== "gas"){
            fuelCoefficient = 0.5;
        }
        else if (fuelTypeSelected === "electricity"){
            fuelCoefficient = 0.9;
          }
          console.log (fuelCoefficient);
    });
});


const engineCapacityInput = document.querySelector(".capacity");

// указываем формулу расчета коэффициента объема двигателя
let engineCapacityCoefficient = 0;
engineCapacityInput.addEventListener("change", () => {
  const engineCapacity = parseFloat(engineCapacityInput.value);
  engineCapacityCoefficient = engineCapacity * 1.2;
  
  // при вводе пользователем значения менее 1.1л и более 3.5 выводим напоминание 
  // о необходимости ввода значения в указанных пределах
  if (engineCapacityInput.value < 1.1) {
    alert ('Введите объем двигателя от 1.1л')
}
if (engineCapacityInput.value > 3.5) {
    alert ('Введите объем двигателя до 3.5л')
}

  console.log(engineCapacityCoefficient);
});


// состояние автомобиля
const vehicleCondition = document.querySelector(".vehicle-condition");
const ownersSelect = document.getElementById("owners-select");
ownersSelect.disabled = true;

    const conditionCheckboxes = document.querySelectorAll('.vehicle-condition input[type="checkbox"]');
    let carsConditionSelected = document.querySelectorAll('.vehicle-condition input[name="condition"]')
    let conditionCoefficient = 0;

    conditionCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
              conditionCheckboxes.forEach((otherCheckbox) => {
                  if (otherCheckbox !== checkbox) {
                      otherCheckbox.checked = false;
                  }
              });
          }

          // расчет коэффициента в зависимости от выбора нового/подержанного автомобиля
          carsConditionSelected = checkbox.value;
          if (carsConditionSelected === "usedcar") {
            conditionCoefficient = 0.3;
          } else if (carsConditionSelected === "newcar") {
            conditionCoefficient = 1;
          };
          console.log (conditionCoefficient);
        });
      });
    
// создаем условие, при котором выбор количества владельцев разблокируется только после выбора пункта "подержанный автомобиль"
vehicleCondition.addEventListener("change", (event) => {
    if (event.target.value === 'newcar') {
         ownersSelect.disabled = true;
       } 
         else if (event.target.value === 'usedcar')  {
            ownersSelect.disabled = false;
         }
     });

// чекбокс с методом оплаты
      const paymentCheckboxes = document.querySelectorAll('.paymentmethod-checkbox input[type="checkbox"]');
      let paymentMethodSelected = document.querySelectorAll('.paymentmethod-checkbox input[name="payment"]:checked');
      let paymentMethodCoefficient = 0;


      paymentCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {

          if (checkbox.checked) {
              paymentCheckboxes.forEach((otherCheckbox) => {
                  if (otherCheckbox !== checkbox) {
                      otherCheckbox.checked = false;
                  }
              });
          }

          // расчет коэффициента в зависимости от выбора типа оплаты
          paymentMethodSelected = checkbox.value;
          if (paymentMethodSelected === "card") {
            paymentMethodCoefficient = 0.82;
          } else if (paymentMethodSelected === "cash") {
            paymentMethodCoefficient = 0.85;
          } else if (paymentMethodSelected === "account"){
          paymentMethodCoefficient = 0.89;
        }
        if (paymentMethodCoefficient === 0){
            alert ("Выберите способ оплаты");
        }
          console.log (paymentMethodCoefficient);
        });
    });


    // год выпуска
    const yearOfIssueInput = document.querySelector(".issue-year");

    let yearofIssueCoefficient = 0;
yearOfIssueInput.addEventListener("change", () => {
  const yearOfIssue = parseFloat(yearOfIssueInput.value);
  
    // при вводе пользователем года до 2018 и после 2023 выводим напоминание 
  // о необходимости ввода года в указанных пределах
  if (yearOfIssueInput.value < 2018) {
    alert ('Укажите год в промежутке между 2018 и 2023 включительно')
}
if (yearOfIssueInput.value > 2023) {
    alert ('Укажите год в промежутке между 2018 и 2023 включительно')
}

// расчет коэффициента стоимости в зависимости от выбранного года
  if (yearOfIssue === 2018) {
    yearofIssueCoefficient= 0.5;
  } else if (yearOfIssue === 2019) {
    yearofIssueCoefficient = 0.6;
  } else if (yearOfIssue === 2020) {
    yearofIssueCoefficient = 0.7;
  } else if (yearOfIssue === 2021) {
    yearofIssueCoefficient = 0.8;
  } else if (yearOfIssue === 2022) {
    yearofIssueCoefficient = 0.9;
  } else if (yearOfIssue === 2023) {
    yearofIssueCoefficient = 1;
  } 
  console.log(yearofIssueCoefficient);
});

// определение базовой цены каждой марки и модели автомобилей
const basePrice = () => {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const selectedCar = carsList.find(car => car.brand === brand && car.model === model);
    const price = selectedCar ? selectedCar.price : 0;
    return price;
  }
 
  // определение условий для соответствия количества владельцев определенным коэффициентам
let ownersNumberCoefficient = 1;
let ownersSelected = 0;

ownersSelect.addEventListener('change', (event) => {
    ownersSelected = event.target.value;
    if (ownersSelected === '1') {
        ownersNumberCoefficient = 0.9;
    } else if (ownersSelected === "2") {
        ownersNumberCoefficient = 0.7;
} else if (ownersSelected === "3") {
        ownersNumberCoefficient = 0.5;
}
console.log (ownersNumberCoefficient);
    });
 
// Подсчет итоговой цены и его выведение в div
let showResult = document.createElement("div");
showResult.classList.add("result");
const output = document.querySelector(".output");

// отправляем форму
form.addEventListener("submit", (event) => {
  event.preventDefault()

// выводим alert при нажатии на кнопку отправки формы, если пользователь не отметил нужные чекбоксы
  if (fuelTypeSelected.value === "") {
    alert("Выберите тип топлива");
  };

  if (paymentMethodCoefficient === 0){
    alert ("Выберите способ оплаты");
}
if (conditionCoefficient === 0) {
  alert ("Выберите состояние автомобиля");
}

  const finalPriceCount = () => {
      const finalPrice = Math.round(basePrice()*fuelCoefficient*engineCapacityCoefficient*conditionCoefficient*ownersNumberCoefficient* paymentMethodCoefficient
      * yearofIssueCoefficient);
      return finalPrice;
  };

  showResult.textContent = `Расчетная стоимость автомобиля:${finalPriceCount()} рублей`;
  output.appendChild(showResult);

  // сбрасываем все поля
  form.reset();
  modelSelect.disabled = true;
});

