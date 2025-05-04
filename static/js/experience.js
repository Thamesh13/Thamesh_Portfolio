function typeText(elementId, text, delay = 100, callback = null) {
    const el = document.getElementById(elementId);
    let index = 0;
    el.style.opacity = 1;

    function type() {
        if (index <= text.length) {
            el.textContent = text.substring(0, index++);
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function fadeInListItems() {
    const items = document.querySelectorAll('.experience-list li');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 400);
    });
}

window.onload = () => {
    typeText("exp-company", "SMART Q", 80, () => {
        typeText("exp-duration", "1 Year 7 Month's:", 80, () => {
            typeText("exp-role", "Operation Executive (Customer Engagement & Support):", 80, () => {
                fadeInListItems();
            });
        });
    });
};
