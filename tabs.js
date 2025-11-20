document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Hide all sections
            contents.forEach(c => c.classList.remove("active"));

            // Show selected section
            const selected = tab.getAttribute("data-tab");
            document.getElementById(selected).classList.add("active");
        });
    });
});
