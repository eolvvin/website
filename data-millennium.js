// data-millennium.js
// Millennium Prizes page content

const millenniumProblems = [
    { name: "Riemann Hypothesis", since: "1859", yearsOpen: "165+", status: "Solved in CTM", doi: "10.5281/zenodo.20136786" },
    { name: "Yang-Mills Mass Gap", since: "1954", yearsOpen: "70+", status: "Solved in CTM", doi: "10.5281/zenodo.20313135" },
    { name: "Hodge Conjecture", since: "1950", yearsOpen: "75+", status: "Solved in CTM", doi: "10.5281/zenodo.20313135" },
    { name: "P vs NP", since: "1971", yearsOpen: "50+", status: "Solved in CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Navier-Stokes Existence and Smoothness", since: "2000", yearsOpen: "25+", status: "Solved in CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Birch and Swinnerton-Dyer Conjecture", since: "1965", yearsOpen: "60+", status: "Solved in CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Poincaré Conjecture", since: "1904", yearsOpen: "100+", status: "Solved Perelman 2003", doi: "10.5281/zenodo.20323576" }
];

function generateMillenniumPage() {
    let rows = '';
    millenniumProblems.forEach((problem, index) => {
        const doiUrl = `https://doi.org/${problem.doi}`;
        rows += `<tr>
            <td>${index + 1}</td>
            <td><a href="${doiUrl}" class="problem-link" target="_blank" rel="noopener noreferrer">${problem.name}</a></td>
            <td>${problem.yearsOpen}</td>
            <td>${problem.since}</td>
            <td class="status-solved">✅ ${problem.status}</td>
        </tr>`;
    });
    return `<h2>Seven Millennium Prize Problems</h2>
    <p>All seven Millennium Prize Problems have been solved within Canvas Temporal Mathematics.</p>
    <table class="data-table">
        <thead><tr><th>#</th><th>Prize</th><th>Years Open</th><th>Since</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
    </table>`;
}

window.generateMillenniumPage = generateMillenniumPage;