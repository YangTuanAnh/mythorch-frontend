export interface ProgressChartData {
    data: {
        labels: string[],
        datasets: { label: string, backgroundColor: string, borderColor: string, data: number[] }
    }
}

export interface BarChartConfiguration {
    type: string,
    data: ProgressChartData,
    options: {}
}