

import './App.css';
import Chart from 'react-google-charts';
import HomePageCarousel from './components/carousel/carousel.component';
import MainNavbar from './components/navbar/navbar.component';
import { GoogleMap } from '@react-google-maps/api';
import GoogleMapComponent from './components/GoogleMap/GoogleMap.component';
function App() {

  const chartData = {
      
  "cols": [
    {"id": "", "label": "Language", "pattern": "", "type": "string"},
    {"id": "", "label": "Popularity", "pattern": "", "type": "number"}
  ],
  "rows": [
    {"c": [{"v": "Python"}, {"v": 29.9}]},
    {"c": [{"v": "JavaScript"}, {"v": 19.1}]},
    {"c": [{"v": "Java"}, {"v": 15.2}]},
    {"c": [{"v": "C#"}, {"v": 9.8}]},
    {"c": [{"v": "C++"}, {"v": 7.4}]},
    {"c": [{"v": "TypeScript"}, {"v": 6.2}]},
    {"c": [{"v": "PHP"}, {"v": 5.1}]},
    {"c": [{"v": "Go"}, {"v": 3.7}]},
    {"c": [{"v": "Ruby"}, {"v": 1.8}]},
    {"c": [{"v": "Swift"}, {"v": 1.5}]}
  ]


  }
  

  return (
    <>
      <MainNavbar/>
      <HomePageCarousel/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Chart
      // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
      chartType="PieChart"
      data={chartData}
      options={{
        title: "Average Weight by Age",
      }}
      height={"400px"}
      legendToggle
    />
    
          </div>
          <div className='col'>
            <GoogleMapComponent/>
          </div>
        </div>
        
      </div>
  
    </>
  )
}

export default App
