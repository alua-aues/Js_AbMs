function test(){
    let name = prompt("Введите имя")
    document.getElementById('name').textContent = "Имя: " + name
   
    let surname = prompt("Введите фамилию")
    document.getElementById('surname').textContent = "Фамилия: " + surname
   
    let age = prompt("Введите возраст")
    document.getElementById('age').textContent = "Возраст: " + age
   
    let spec = prompt("Введите специальность")
    document.getElementById('spec').textContent = "Специальность: " + spec
   
    let date = prompt("Введите дату рождения")
    document.getElementById('date').textContent = "Дата рождения " + date
   
    let abms = prompt("Расскажите о себе")
    document.getElementById('abms').textContent = "О себе " + abms
   
   
   }