document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia a los elementos del DOM
    const resultContainer = document.getElementById('result-container');
    const simulateButton = document.getElementById('simulate-button');

    // Manejar el evento del botón de simulación
    simulateButton.addEventListener('click', function () {
        // Simular un evento y obtener resultados
        const results = simulateEvent();

        // Mostrar los resultados en el DOM
        displayResults(results);
    });

    // Función para simular un evento y devolver resultados
    function simulateEvent() {
        // Aquí puedes implementar la lógica del juego y generar resultados aleatorios
        const goalsTeamA = Math.floor(Math.random() * 5);
        const goalsTeamB = Math.floor(Math.random() * 5);

        // Almacenar los resultados en el LocalStorage
        localStorage.setItem('lastResults', JSON.stringify({ teamA: goalsTeamA, teamB: goalsTeamB }));

        // Devolver resultados
        return { teamA: goalsTeamA, teamB: goalsTeamB };
    }

    // Función para mostrar los resultados en el DOM
    function displayResults(results) {
        resultContainer.innerHTML = `<p>Resultado: Boca Js A ${results.teamA} - ${results.teamB} River B</p>`;
    }
});
