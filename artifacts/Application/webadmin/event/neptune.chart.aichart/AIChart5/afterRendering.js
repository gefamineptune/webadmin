const chartOptions = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "pie",
    },
    title: {
        text: "Total 46",
        verticalAlign: "middle",
        y: 0,
    },
    plotOptions: {
        pie: {
            innerSize: "50%",
            dataLabels: {
                enabled: false,
            },
            showInLegend: true,
        },
    },
    series: [
        {
            name: "Keperluan",
            data: [
                { name: "Work Order", y: 31, color: "#3498db" },
                { name: "Perjalanan Dinas", y: 12, color: "#f39c12" },
                { name: "Tugas Luar", y: 3, color: "#1abc9c" },
                { name: "Pribadi", y: 0, color: "#e91e63" },
            ],
        },
    ],
};

Highcharts.chart("VBox74", chartOptions);
