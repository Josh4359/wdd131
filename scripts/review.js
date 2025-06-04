const params = new URLSearchParams(window.location.search);

const parameters = document.querySelector("#parameters");

params.forEach((value, key) => {
    parameters.innerHTML +=
`<div class="param">
    <div class="param_key">${key}</div>
    <div class="spacer"></div>
    <div class="param_value">${value.length > 0 ? value : "N/A"}</div>
</div>`
});

const submit_tracker = document.querySelector('#submit-tracker')

let review_count = Number(window.localStorage.getItem('review-count'));

submit_tracker.textContent = `You've posted ${review_count} reviews!`;