# 🌬️ Air Quality Monitoring System

## 📋 Project Description

Advanced real-time air quality monitoring and analysis system based on **IoT**, **Big Data**, and **Artificial Intelligence**. Designed to detect environments prone to respiratory diseases and sick building syndrome in closed spaces, determining the risk level of lung disease contagion.

## 🎯 Objective

Provide an intelligent environmental monitoring system that allows:
- Collect and analyze environmental data in real-time
- Detect conditions that favor respiratory diseases
- Optimize indoor conditions for healthier spaces
- Reduce environmental impact through efficient resource management

## ✨ Key Features

### 🔧 Smart Monitoring
- **Real-time data collection** of temperature, humidity, and air quality
- **High-precision IoT sensors** for accurate measurements
- **Continuous analysis** of PM2.5, CO2, and VOCs (Volatile Organic Compounds)

### 📊 Monitored Parameters
- **Temperature**: Optimal range 20-25°C
- **Humidity**: Optimal range 30-50%
- **Air Quality**: Comprehensive pollutant analysis

### 🏢 Applications
- **Residential spaces** and home offices
- **Offices, schools, and public buildings**
- **Any closed environment** requiring air quality monitoring

### 🤝 Collaborative Features
- **Share data** with family members or team members
- **Real-time alerts** about environmental conditions
- **Custom reports** and trend analysis

## 🛠️ Technologies Used

- **Frontend**: JavaScript, HTML5, CSS3
- **Backend**: Node.js (assumed from JavaScript stack)
- **IoT**: Specialized air quality sensors
- **AI/ML**: Predictive analysis algorithms
- **Big Data**: Processing and analysis of large volumes of environmental data
- **Deployment**: Vercel

## 🏗️ System Architecture

The system is designed with a modular architecture that includes:

- **IoT Sensor Layer**: Environmental data collection
- **Processing Layer**: AI-powered data analysis
- **Presentation Layer**: Responsive web interface
- **Storage Layer**: Database optimized for Big Data

### 📚 Data Structure - Research Articles

The system includes a knowledge base with scientific articles that are dynamically rendered using JavaScript. Articles are loaded from a JSON file and displayed in the interface thanks to the `renderArticles()` function:

```javascript
const renderArticles = async () => {
    const $containerArticles = document.querySelector('#containerArticles');

    const response = await fetch('../data/articles.json', {
        mode: 'no-cors'
    });
    
    const data = await response.json();
    console.log(data);

    data.forEach(article => {
        const {nombre, descripcion, fecha_publicacion, ruta} = article;
        const $article = /* html */
            `<article class="article">
                <h3 class="article_title">${nombre}</h3>
                <p class="article_description">${descripcion}</p>
                <div class="article_flex">
                    <p class="article_date">${fecha_publicacion}</p>
                    <button id="btnMirarPDF" onclick="abrirModal('./articles/${ruta}.pdf')" class="article_button">Read Full</button>
                </div>
            </article>`;

        $containerArticles.innerHTML += $article;
    });
}
```

**JSON file structure (`articles.json`):**

```json
[
  {
    "nombre": "Determining environmental indicators related to the propagation of contagious diseases and health issues: A Systematic Literature Review",
    "descripcion": "Systematic review of environmental indicators related to the propagation of contagious diseases and health issues",
    "fecha_publicacion": "2025-05-01",
    "ruta": "Determining_environmental_indicators_related_to_the_propagation_of_contagious_diseases_and_health_issues_A_Systematic_Literature_Review"
  },
  {
    "nombre": "CameraReady-Improving Public Health Policies with Indoor Air Quality Predictive Models",
    "descripcion": "Improving public health policies through indoor air quality predictive models",
    "fecha_publicacion": "2025-05-10",
    "ruta": "CameraReady-Improving_Public_Health_Policies_with_Indoor_Air_Quality_Predictive_Models"
  },
  {
    "nombre": "Beyond One Room Comprehensive Predictive Analysis of CO2 in Indoor Air Quality",
    "descripcion": "Comprehensive predictive analysis of CO2 in indoor air quality beyond one room",
    "fecha_publicacion": "2025-05-20",
    "ruta": "Beyond_One_Room_Comprehensive_Predictive_Analysis_of_CO2_in_Indoor_Air_Quality"
  }
]
```

## 📝 Report Issues

If you find any bugs or have suggestions:
1. Check [existing issues](../../issues)
2. Create a new issue with a detailed description
3. Include steps to reproduce the problem

## 📞 Contact

For more information about the project or collaborations:
- **Website**: [https://landing-page-air-quality.vercel.app/](https://landing-page-air-quality.vercel.app/)
- **Email**: mey.scripting@gmail.com

---

**Let's work together to improve air quality!** 🌱

*Developed with ❤️ by the Air Quality Monitoring System team*