document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const submitButton = document.querySelector("#submitButton");

    function collectFormData() {
        const formData = {};
        form.querySelectorAll("input, textarea").forEach(input => {
            formData[input.id] = input.value;
        });
        return formData;
    }

    function toggleErrorStyle(isError) {
        submitButton.innerText = isError ? "Заповніть усі обов'язкові поля *" : "Замовити демо";
        submitButton.classList.toggle("submit_error", isError);
        setTimeout(() => {
            submitButton.innerText = "Замовити демо";
            submitButton.classList.remove("submit_error");
        }, 5000);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const isAnyRequiredEmpty = ["name", "surname", "number"].some(fieldId => {
            const input = document.querySelector(`#${fieldId}`);
            return input.value.trim() === '';
        });

        if (isAnyRequiredEmpty) {
            toggleErrorStyle(true);
            return;
        }

        const formData = collectFormData();
        // Further processing of form data
        console.log(formData);

        form.reset(); // Очистить поля формы

        // Submit button animation
        submitButton.classList.add("submit_onclic");
        setTimeout(() => {
            submitButton.classList.remove("submit_onclic");
            submitButton.innerText = "✔";
            setTimeout(() => {
                submitButton.innerText = "Замовити демо";
            }, 1250);
        }, 2250);
    }

    // Event Listeners
    form.addEventListener("submit", handleFormSubmit);
    submitButton.addEventListener("click", handleFormSubmit);
    form.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            handleFormSubmit(event);
        }
    });
});
