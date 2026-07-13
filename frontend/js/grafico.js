// Gráfico Plotly
function graficoOS(dados){

    const concluidas = dados.filter(function(OS){
        return OS.concluido === true;
    }).length;

    const pendencias = dados.filter(function(OS){
        return OS.concluido === false;
    }).length;

    if(dados.length > 0){
        Plotly.newPlot('grafico-os', [{
            values: [concluidas, pendencias],
            labels: ['Concluídas', 'Pendentes'],
            type: 'pie',
            marker: { colors: ['#4dd9ff', '#ff4444'] },
            hole: 0.4
        }], {
            paper_bgcolor: '#0f0f0f',
            plot_bgcolor: '#0f0f0f',
            font: { family: 'Courier New', color: '#c0d8f0' },
            showlegend: true,
            margin: { t: 20, b: 20, l: 20, r: 20 },
            autosize: true
        }, { responsive: true });
    }
}