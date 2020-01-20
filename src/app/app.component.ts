import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  pwLength = 0;
  includeLetters = false;
  includeNums = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.pwLength = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNums = !this.includeNums;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    console.log(`
    length: ${this.pwLength},
    letters: ${this.includeLetters},
    numbers: ${this.includeNums},
    symbols: ${this.includeSymbols}`);
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNums) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPw = '';

    for (let i = 0; i < this.pwLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPw += validChars[index];
    }

    this.password = generatedPw;
  }
}
