// get results from local storage
const surveyResults = JSON.parse(localStorage.getItem('votes'));




const labels = [];
const votes = [];

surveyResults.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('chart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Votes per Product',
            data: votes,
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    } 
});


document.getElementById('chart-info').textContent = JSON.stringify(surveyResults, 0, 2);