function myFunction() {
    var myVar = "Коля";
    if (true) {
        var myVar = "Ваня";
        console.log(myVar); // -> "Ваня"
        /* На самом деле, область видимости myVar — функция,
        мы всего лишь удалили предыдущее значение переменной myVar "Коля"
        и заменили его на "Ваня". */
      }
      console.log(myVar); // -> "Ваня" — обратите внимание, как код в блоке if повлиял на это значение.
    }
    console.log(myVar); // ->  
    /* ReferenceError, переменная myVar недоступна
    за пределами функции, в которой определена. */
    function myFunction() {
        let myVar = "Коля";
        if (true) {
          let myVar = "Ваня";
          console.log(myVar); // -> "Ваня"
          /* Поскольку myVar имеет блочную область видимости,
          здесь мы только что создали новую переменную myVar.
          Эта переменная недоступна вне блока и никак не зависит
          от первой переменной myVar, которую мы создали до этого! */
        }
        console.log(myVar); // -> "Коля" — обратите внимание: инструкции в блоке if НЕ повлияли на значение переменной.
      }
      console.log(myVar); // -> ReferenceError, myVar недоступна за пределами функции.
      function myFunc() {
        this.myVar = 0;
        setTimeout(() => {
          this.myVar++;
          console.log(this.myVar); // -> 1
        }, 0);
      }
      function myFunc() {
        this.myVar = 0;
        var that = this; // Тот самый хак *that = this*
        setTimeout(
          function() { // В этой области видимости функции создается новый *this*.
            that.myVar++;
            console.log(that.myVar); // -> 1
            console.log(this.myVar); // -> undefined — см. объявление функции выше.
          },
          0
        );
      }
      function myFunc() {
        this.myVar = 0;
        setTimeout(
          () => { // this берется из окружения. В данном случае — из myFunc.
            this.myVar++;
            console.log(this.myVar); // -> 1
          },
          0
        );
      }