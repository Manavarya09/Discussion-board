# NeuroCity - Smart Virtual City Simulator

![NeuroCity](https://img.shields.io/badge/NeuroCity-v1.0.0-00FFFF?style=for-the-badge)
![Java](https://img.shields.io/badge/Java-17+-orange?style=for-the-badge&logo=java)
![JavaFX](https://img.shields.io/badge/JavaFX-21.0.1-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🌟 Overview

**NeuroCity** is a cutting-edge real-time smart virtual city simulator where every citizen (NPC) is powered by an advanced emotional AI system. Each citizen behaves based on mood, stress, happiness, and social influence, creating emergent urban dynamics and realistic behavioral patterns.

### ✨ Key Features

- **🧠 Emotional AI System**: 4-dimensional emotion model (happiness, stress, anger, curiosity)
- **👥 500+ Autonomous Citizens**: Real-time simulation with multithreading
- **🎮 Interactive City Visualization**: Cyberpunk-themed UI with clickable citizens
- **📊 Real-time Analytics Dashboard**: Live charts and comprehensive statistics
- **🔧 God Mode Controls**: Weather manipulation, emotion injection, population control
- **💾 Data Persistence**: Complete save/load system with JSON serialization
- **📈 Export Capabilities**: CSV export for research and analysis
- **⚡ High Performance**: Optimized for 60 FPS with 1000+ citizens

## 🚀 Quick Start

### Prerequisites

- **Java 17+** (OpenJDK or Oracle JDK)
- **Maven 3.6+**
- **JavaFX 21.0.1** (included via Maven dependencies)

### Installation

1. **Clone or download** the NeuroCity project
```bash
git clone https://github.com/yourusername/neurocity.git
cd neurocity
```

2. **Build the project**
```bash
mvn clean compile
```

3. **Run the application**
```bash
mvn javafx:run
```

### Alternative: Using JAR file

1. **Build executable JAR**
```bash
mvn clean package
```

2. **Run the JAR**
```bash
java -jar target/neurocity-simulator-1.0.0-jar-with-dependencies.jar
```

## 🎯 How to Use

### Starting Your First Simulation

1. **Launch NeuroCity** using the instructions above
2. **Click "Start"** to begin the simulation with 500 default citizens
3. **Observe** citizens moving around the city with colored emotional indicators
4. **Click on any citizen** to view detailed emotional and behavioral statistics

### Understanding the Interface

#### 🏙️ City Visualization
- **Citizens** appear as colored dots representing their emotional states
- **Color coding**: Happiness (green), stress (red), curiosity (blue), anger (orange)
- **Zones**: Work (top), Social (middle), Residential (bottom)
- **Click citizens** for detailed information

#### 📊 Statistics Panel
- **Real-time metrics**: Population, happiness, stress, productivity
- **City Mood**: Overall emotional state indicator
- **Environmental factors**: Weather and time speed

#### 🎮 God Mode Controls
- **Population Slider**: Adjust city population (10-1000 citizens)
- **Weather Control**: Change weather affecting citizen happiness
- **Time Speed**: Control simulation speed (0.1x to 5.0x)
- **Emotion Injection**: Directly influence all citizens' emotions

#### 📈 Charts and Analytics
- **Emotional Trends**: Live charts showing happiness and stress over time
- **Productivity Trends**: Track city-wide productivity patterns
- **Historical Data**: View emotional and behavioral patterns

### Advanced Features

#### 💾 Saving and Loading
- **File → Save Simulation**: Save complete city state to JSON
- **File → Load Simulation**: Restore previous simulation
- **Auto-backup**: Automatic timestamped saves

#### 📤 Data Export
- **File → Export Data**: Export citizen data to CSV for analysis
- **Research Applications**: Use exported data for academic research
- **External Analysis**: Compatible with Excel, R, Python pandas

## 🧪 Simulation Science

### Emotional AI Model

NeuroCity implements a sophisticated 4-dimensional emotional model:

1. **Happiness** (0.0-1.0): Joy, contentment, positive outlook
2. **Stress** (0.0-1.0): Pressure, anxiety, overwhelming feelings  
3. **Anger** (0.0-1.0): Frustration, hostility, irritation
4. **Curiosity** (0.0-1.0): Interest, exploration drive, learning motivation

### Behavioral States

Citizens exhibit six primary behavioral states:
- **WORKING**: High productivity, moderate happiness
- **SOCIALIZING**: Increased happiness, social connections
- **EXPLORING**: High curiosity, random movement
- **RESTING**: Low activity, emotional recovery
- **STRESSED**: Reduced productivity, seeking relief
- **ANGRY**: Aggressive behavior, social avoidance

### Social Dynamics

- **Emotional Contagion**: Citizens influence nearby citizens' emotions
- **Social Networks**: Citizens form friendships and acquaintanceships
- **Crowd Dynamics**: Emergent group behaviors and clustering
- **Environmental Sensitivity**: Weather and city events affect emotions

## 🛠️ Development

### Project Structure

```
neurocity/
├── src/main/java/com/neurocity/
│   ├── NeuroCityApplication.java      # Main application entry
│   ├── model/
│   │   ├── Citizen.java               # Individual citizen AI
│   │   └── EmotionalState.java        # Emotion engine
│   ├── simulation/
│   │   └── CitySimulation.java        # Core simulation engine
│   ├── ui/
│   │   ├── MainController.java        # FXML controller
│   │   └── CityCanvas.java           # City visualization
│   └── util/
│       └── DataPersistence.java      # Save/load utilities
├── src/main/resources/
│   ├── fxml/main.fxml                # UI layout
│   └── css/cyberpunk-theme.css       # Cyberpunk styling
└── pom.xml                           # Maven configuration
```

### Key Classes

#### 🧠 EmotionalState
- Core emotion processing and social influence algorithms
- Personality trait modeling (optimism, resilience, sociability, creativity)
- Environmental response and emotional decay systems

#### 👤 Citizen  
- Autonomous agent with emotional AI and behavioral decision-making
- Social interaction and network formation
- Movement patterns and productivity modeling

#### 🏙️ CitySimulation
- Multi-threaded simulation engine with performance optimization
- City-wide statistics calculation and environmental modeling
- Observable properties for real-time UI binding

#### 🎨 CityCanvas
- Custom JavaFX canvas with real-time rendering
- Interactive citizen selection and visual feedback
- Cyberpunk-themed visualization with emotional color coding

### Building and Testing

```bash
# Compile project
mvn compile

# Run tests
mvn test

# Create executable JAR
mvn package

# Run with specific JVM options
java -Xmx2G -jar target/neurocity-simulator-1.0.0-jar-with-dependencies.jar
```

### Performance Optimization

- **Multithreading**: Parallel citizen updates using ForkJoinPool
- **Spatial Optimization**: Efficient neighbor detection for social interactions
- **Memory Management**: Bounded data structures and garbage collection friendly design
- **Rendering Optimization**: Efficient JavaFX canvas operations and animation timers

## 📚 Research Applications

NeuroCity is designed for:

- **Urban Planning Research**: Study crowd dynamics and social behavior
- **AI and Machine Learning**: Experiment with agent-based modeling
- **Psychology Studies**: Analyze emotional contagion and social influence
- **Educational Demonstrations**: Teach complex systems and emergent behavior
- **Game Development**: Prototype NPC AI and behavioral systems

## 🤝 Contributing

Contributions are welcome! Areas for enhancement:

- **Enhanced AI Models**: More sophisticated emotion algorithms
- **Additional Behaviors**: New citizen activities and interactions  
- **Performance Improvements**: Further optimization for larger populations
- **New Visualizations**: Additional chart types and data displays
- **Research Tools**: Built-in statistical analysis and hypothesis testing

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Dependencies

- **JavaFX 21.0.1**: User interface framework
- **Jackson 2.15.2**: JSON serialization for save/load
- **JUnit 5.10.0**: Unit testing framework

## 🐛 Troubleshooting

### Common Issues

**JavaFX Module Issues**
```bash
# Add JavaFX modules explicitly
java --module-path /path/to/javafx/lib --add-modules javafx.controls,javafx.fxml -jar neurocity.jar
```

**Memory Issues with Large Populations**
```bash
# Increase heap size
java -Xmx4G -jar neurocity.jar
```

**Performance Issues**
- Reduce population size using the slider
- Lower time speed multiplier
- Disable citizen name display
- Close unnecessary chart panels

### System Requirements

- **Minimum**: Java 17, 4GB RAM, integrated graphics
- **Recommended**: Java 17+, 8GB RAM, dedicated graphics card
- **For 1000+ citizens**: 16GB RAM, multi-core CPU

## 📞 Support

For questions, bug reports, or feature requests:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the documentation

---

**NeuroCity** - Where emotional AI meets urban simulation! 🌆🤖
# Discussion-board
