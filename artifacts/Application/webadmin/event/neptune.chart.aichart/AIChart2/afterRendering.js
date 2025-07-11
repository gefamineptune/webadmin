const chartOptions = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "line",
    },
    title: {
        text: "Monthly Data",
    },
    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
        title: {
            text: "Values",
        },
        min: 0,
        max: 30,
    },
    series: [
        {
            name: "Data",
            data: [15, 20, 11, 25, 15, 20],
            color: "#1A237E",
            marker: {
                symbol: "circle",
                fillColor: "white",
                lineWidth: 2,
                lineColor: "#1A237E",
            },
        },
    ],
};

Highcharts.chart("VBox69", chartOptions);
