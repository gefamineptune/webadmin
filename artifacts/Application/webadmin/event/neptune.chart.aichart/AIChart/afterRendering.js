const chartOptions = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "column",
    },
    title: {
        text: "Total Distance and Costs by Month",
    },
    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
        title: {
            text: "Rupiah",
        },
    },
    plotOptions: {
        column: {
            stacking: "normal",
        },
    },
    series: [
        {
            name: "Operational",
            data: [350000, 330000, 450000, 320000, 680000, 520000],
            color: "#66b2a3",
        },
        {
            name: "Maintenance",
            data: [340000, 50000, 40000, 70000, 90000, 100000],
            color: "#2f44d3",
        },
        {
            name: "Fixed Cost",
            data: [100000, 70000, 50000, 50000, 200000, 60000],
            color: "#edc566",
        },
        {
            name: "Owned Risk",
            data: [0, 0, 0, 0, 0, 0],
            color: "#e91e63",
        },
        {
            name: "Total Distance",
            type: "line",
            data: [550000, 360000, 480000, 123000, 760000, 540000],
            color: "#ff4d4f",
        },
    ],
    tooltip: {
        shared: true,
    },
    legend: {
        align: "center",
        verticalAlign: "top",
        borderWidth: 0,
    },
};

Highcharts.chart("VBox30", chartOptions);
