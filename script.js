document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.screen');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const value = e.target.value;

            switch (value) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DE':
                    display.value = display.value.toString().slice(0, -1);
                    break;
                case '=':
                    try {
                        // Use Function constructor for safer evaluation than eval()
                        const result = new Function('return ' + display.value)();
                        if (isNaN(result) || !isFinite(result)) {
                            display.value = 'Error';
                        } else {
                            display.value = result;
                        }
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    // If last result was an error, start fresh
                    if (display.value === 'Error') {
                        display.value = '';
                    }
                    display.value += value;
                    break;
            }
        });
    });
});
