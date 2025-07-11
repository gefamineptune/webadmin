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
        floating: true,
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
            name: "Categories",
            data: [
                { name: "Work Order: 31", y: 31, color: "blue" },
                { name: "Perjalanan Dinas: 12", y: 12, color: "orange" },
                { name: "Tugas Luar: 3", y: 3, color: "teal" },
                { name: "Pribadi: 0", y: 0, color: "pink" },
            ],
        },
    ],
};

Highcharts.chart("VBox74", chartOptions);
