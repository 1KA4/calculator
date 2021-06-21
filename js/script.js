"use strict"; // Created by 1KA4

let input = document.getElementById('input'),
    division = '/',
    seven = '7',
    eight = '8',
    nine = '9',
    multiply = '*',
    four = '4',
    five = '5',
    six = '6',
    minus = '-',
    one = '1',
    two = '2',
    three = '3',
    plus = '+',
    nol = '0',
    dot = '.',
    kwadrat = '**',
    arr = [];

    function numberInInput(method) {
        if(arr[arr.length-1] == '+' || arr[arr.length-1] == '-' || arr[arr.length-1] == '/' || arr[arr.length-1] == '*' || arr[arr.length-1] == '**' || arr[arr.length-1] == '.'){
            if(method != '+' && method != '-' && method != '/' && method != '*' && method != '**' && method != '.') {
                arr.push(method);
                input.textContent = arr.join('');
            }
        }else {
            arr.push(method);
            input.textContent = arr.join('');
        }
    }

    function noob() {
        arr.pop();
        input.textContent = arr.join('');
        console.log(arr);
    } 

    function noobAll() {
        arr = [];
        input.textContent = arr.join('');
    }

    function liczenie() {
        let licz = eval(arr.join(''));
        input.textContent = licz;
        arr = [licz];
    }