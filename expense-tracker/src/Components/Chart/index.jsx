import Chart from "react-apexcharts";

const MyChart = () => {
    return (
      <Chart 
         height={250}
         options={
            {
               labels: ["test"],
               chart: {
                  type: "line",
                  stacked: false,
                  toolbar: {
                     show: false,
                  }
               },
               colors: ["#c69b9a", "#90b473"],
               stroke: {
                  curve: 'smooth',
                  width: 1.5
               },
               markers: {
                  size: 1,
               },
               xaxis: {
               categories: ["oct 17", "oct 18", "oct 19", "oct 20", "oct 21"]
               }
            }
         }
         series={[
            {
               name: "Series A",
               data: [20, 10, 50, 20, 40]
             },
             {
               name: "Series B",
               data: [20, 30, 10, 50, 15]
             }
         ]} 
      />
    )
};

export default MyChart; 