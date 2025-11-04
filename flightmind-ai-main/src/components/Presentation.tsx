import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, ChevronRight, Plane, AlertTriangle, Brain, 
  Zap, Database, Wifi, Cloud, Activity, BarChart3, 
  CheckCircle2, Users, Rocket, Target, TrendingUp,
  Server, Cpu, Network, Shield, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ParticleBackground } from "./ParticleBackground";
import heroCockpit from "@/assets/hero-cockpit.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import architectureFlow from "@/assets/architecture-flow.jpg";
import weatherRadar from "@/assets/weather-radar.jpg";

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < 19) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-scale-pulse" />
      </div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: "50px 50px"
      }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="max-w-7xl w-full">
            
            {/* Slide 1: Title */}
            {currentSlide === 0 && (
              <div className="relative h-[70vh] animate-fade-in">
                <div className="absolute inset-0 shimmer rounded-2xl" />
                <img 
                  src={heroCockpit} 
                  alt="Cockpit" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/50 rounded-2xl" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-scale-pulse" />
                    <Plane className="w-40 h-40 text-accent animate-float relative z-10" style={{ filter: "drop-shadow(0 0 30px hsl(var(--accent)))" }} />
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-9xl font-bold text-accent tracking-tight animate-slide-up" style={{
                      textShadow: "0 0 40px hsl(var(--accent) / 0.5)"
                    }}>
                      PreFlight AI
                    </h1>
                    <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
                  </div>
                  <p className="text-5xl text-foreground font-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    Predictive Intelligence for Aviation Operations
                  </p>
                  <p className="text-3xl text-accent/90 italic font-light animate-fade-in flex items-center gap-3" style={{ animationDelay: "0.6s" }}>
                    <Sparkles className="w-8 h-8" />
                    Forecasting Delays Before They Happen
                    <Sparkles className="w-8 h-8" />
                  </p>
                </div>
              </div>
            )}

            {/* Slide 2: The Problem */}
            {currentSlide === 1 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-4">
                  <h2 className="text-7xl font-bold text-accent mb-12" style={{ textShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}>
                    The Problem
                  </h2>
                  <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: AlertTriangle, title: "Unpredictable Variables", desc: "Weather, ATC congestion, gate conflicts", color: "text-yellow-400", delay: "0s" },
                    { icon: TrendingUp, title: "Cascading Delays", desc: "Expensive operational disruptions", color: "text-destructive", delay: "0.2s" },
                    { icon: Brain, title: "No AI Insights", desc: "Decision-makers lack real-time intelligence", color: "text-blue-400", delay: "0.4s" }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="relative group animate-fade-in" 
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-card/80 backdrop-blur border-2 border-accent/20 rounded-2xl p-10 text-center space-y-6 hover:border-accent/60 hover:transform hover:scale-105 transition-all">
                        <div className="relative inline-block">
                          <div className={cn("absolute inset-0 blur-xl rounded-full animate-scale-pulse", item.color.replace("text-", "bg-"))} style={{ opacity: 0.3 }} />
                          <item.icon className={cn("w-24 h-24 mx-auto relative z-10 animate-float", item.color)} style={{ animationDelay: `${idx * 0.5}s` }} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-lg text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-xl" />
                  <blockquote className="relative text-center text-5xl italic text-accent font-light leading-relaxed">
                    <span className="text-6xl">"</span>Airlines react to delays
                    <br/>
                    <span className="text-6xl font-bold">PreFlight AI predicts them</span>
                    <span className="text-6xl">"</span>
                  </blockquote>
                </div>
              </div>
            )}

            {/* Slide 3: The Vision */}
            {currentSlide === 2 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-scale-pulse" />
                    <Target className="w-32 h-32 text-accent mx-auto animate-float relative z-10" style={{ filter: "drop-shadow(0 0 20px hsl(var(--accent)))" }} />
                  </div>
                  <h2 className="text-7xl font-bold text-accent" style={{ textShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}>
                    The Vision
                  </h2>
                  <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {[
                    { icon: Activity, text: "Real-time delay forecasts", gradient: "from-green-500/20 to-accent/20", iconColor: "text-green-400" },
                    { icon: Brain, text: "Transparent AI explanations", gradient: "from-purple-500/20 to-accent/20", iconColor: "text-purple-400" },
                    { icon: Zap, text: "Langflow workflow automation", gradient: "from-yellow-500/20 to-accent/20", iconColor: "text-yellow-400" },
                    { icon: Shield, text: "Local, private, ethical AI", gradient: "from-blue-500/20 to-accent/20", iconColor: "text-blue-400" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="relative group animate-fade-in" 
                      style={{ animationDelay: `${idx * 0.15}s` }}
                    >
                      <div className={cn("absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl group-hover:blur-2xl transition-all", item.gradient)} />
                      <div className="relative bg-card/90 backdrop-blur border-2 border-accent/20 rounded-2xl p-10 flex items-center gap-8 hover:border-accent/60 hover:transform hover:scale-105 transition-all">
                        <div className="relative">
                          <div className={cn("absolute inset-0 blur-xl rounded-full", item.iconColor.replace("text-", "bg-"))} style={{ opacity: 0.4 }} />
                          <item.icon className={cn("w-20 h-20 flex-shrink-0 relative z-10", item.iconColor)} />
                        </div>
                        <p className="text-2xl text-foreground font-semibold">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-12">
                  <div className="absolute inset-0 shimmer rounded-2xl" />
                  <div className="relative bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 border-2 border-accent/40 rounded-2xl p-10 text-center">
                    <p className="text-2xl text-accent font-semibold leading-relaxed">
                      End-to-end open-source AI predicting flight delays using MCP operational data
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4: Solution Overview */}
            {currentSlide === 3 && (
              <div className="space-y-12 animate-slide-up">
                <h2 className="text-7xl font-bold text-accent text-center" style={{ textShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}>
                  Solution Overview
                </h2>
                
                <div className="relative">
                  <img src={aiNetwork} alt="AI Network" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50 rounded-2xl" />
                  
                  <div className="relative py-16">
                    <div className="grid md:grid-cols-5 gap-6 px-8">
                      {[
                        { icon: Database, label: "Ingest Data", color: "from-blue-500/30 to-blue-600/30", iconColor: "text-blue-400" },
                        { icon: Brain, label: "Predict", color: "from-purple-500/30 to-purple-600/30", iconColor: "text-purple-400" },
                        { icon: Activity, label: "Explain", color: "from-green-500/30 to-green-600/30", iconColor: "text-green-400" },
                        { icon: Zap, label: "Automate", color: "from-yellow-500/30 to-yellow-600/30", iconColor: "text-yellow-400" },
                        { icon: BarChart3, label: "Visualize", color: "from-accent/30 to-accent/40", iconColor: "text-accent" }
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="relative group animate-fade-in" 
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className={cn("absolute inset-0 bg-gradient-to-br rounded-2xl blur-2xl group-hover:blur-3xl transition-all", item.color)} />
                          <div className="relative bg-card/95 backdrop-blur-xl border-2 border-accent/30 rounded-2xl p-8 text-center space-y-4 hover:border-accent/60 hover:transform hover:scale-110 transition-all group">
                            <div className="relative">
                              <div className={cn("absolute inset-0 blur-xl rounded-full", item.iconColor.replace("text-", "bg-"))} style={{ opacity: 0.5 }} />
                              <item.icon className={cn("w-16 h-16 mx-auto relative z-10 group-hover:animate-float", item.iconColor)} />
                            </div>
                            <p className="text-xl font-bold text-foreground">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 shimmer rounded-xl" />
                    <div className="relative bg-gradient-to-r from-card/80 to-secondary/80 backdrop-blur border-2 border-accent/30 rounded-xl px-8 py-4">
                      <p className="text-2xl text-accent font-semibold">
                        A unified system for predictive aviation intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 5: Architecture */}
            {currentSlide === 4 && (
              <div className="space-y-10 animate-slide-up">
                <h2 className="text-6xl font-bold text-accent text-center">System Architecture</h2>
                
                <div className="relative">
                  <img src={architectureFlow} alt="Architecture" className="absolute inset-0 w-full h-full object-contain opacity-20" />
                  
                  <div className="relative space-y-4 py-8">
                    {[
                      { icon: Database, text: "MCP Server", color: "text-blue-400" },
                      { icon: Server, text: "FastAPI Backend", color: "text-green-400" },
                      { icon: Brain, text: "Prophet/LSTM Model", color: "text-purple-400" },
                      { icon: Activity, text: "SHAP Explainability", color: "text-yellow-400" },
                      { icon: Network, text: "Langflow Orchestration", color: "text-accent" },
                      { icon: Cpu, text: "Ollama (Local LLM)", color: "text-red-400" },
                      { icon: Zap, text: "AI Insights", color: "text-orange-400" },
                      { icon: BarChart3, text: "Dashboard", color: "text-cyan-400" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className={cn("bg-card/90 backdrop-blur border border-accent/30 rounded-xl px-8 py-4 flex items-center gap-4 flex-1", "hover:border-accent/60 transition-all")}>
                          <item.icon className={cn("w-10 h-10", item.color)} />
                          <span className="text-xl font-semibold text-foreground">{item.text}</span>
                        </div>
                        {idx < 7 && (
                          <div className="text-accent text-3xl">↓</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Slide 6: Backend */}
            {currentSlide === 5 && (
              <div className="space-y-12 animate-slide-up">
                <h2 className="text-6xl font-bold text-accent text-center">Backend Architecture</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-card to-secondary border border-accent/20 rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <Server className="w-16 h-16 text-accent" />
                      <h3 className="text-3xl font-bold text-accent">FastAPI</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "REST endpoints",
                        "Prophet/LSTM model",
                        "SHAP explainability",
                        "Langflow API"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                          <span className="text-lg text-foreground">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-card to-secondary border border-accent/20 rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <Network className="w-16 h-16 text-accent" />
                      <h3 className="text-3xl font-bold text-accent">Langflow</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Prompt orchestration",
                        "Ollama LLM integration",
                        "Workflow automation",
                        "Real-time alerts"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                          <span className="text-lg text-foreground">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 7: Langflow */}
            {currentSlide === 6 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Network className="w-24 h-24 text-accent mx-auto animate-pulse" />
                  <h2 className="text-6xl font-bold text-accent">Langflow Workflow Brain</h2>
                </div>

                <div className="bg-card border border-accent/20 rounded-2xl p-8">
                  <div className="flex items-center justify-center gap-4 text-xl flex-wrap">
                    {["Input", "Processing", "LLM (Ollama)", "Router", "Output"].map((text, idx) => (
                      <>
                        <div key={text} className="bg-accent/10 border border-accent/30 rounded-xl px-6 py-4 font-mono text-accent">
                          {text}
                        </div>
                        {idx < 4 && <span className="text-accent text-2xl">→</span>}
                      </>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: Zap, text: "Orchestrates model calls" },
                    { icon: Activity, text: "Business rule automation" },
                    { icon: Brain, text: "Trend summarization" },
                    { icon: Wifi, text: "Dashboard integration" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-card to-secondary border border-accent/20 rounded-xl p-6 flex items-center gap-4">
                      <item.icon className="w-12 h-12 text-accent" />
                      <span className="text-xl text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide 8: Ollama */}
            {currentSlide === 7 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Cpu className="w-24 h-24 text-accent mx-auto animate-glow" />
                  <h2 className="text-6xl font-bold text-accent">Ollama — Local AI</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Shield, title: "Private", desc: "No external API calls" },
                    { icon: Zap, title: "Fast", desc: "Local inference" },
                    { icon: Brain, title: "Explainable", desc: "Controlled generation" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-card border-2 border-accent/20 rounded-2xl p-10 text-center space-y-6 hover:border-accent/50 transition-all">
                      <item.icon className="w-20 h-20 text-accent mx-auto" />
                      <h3 className="text-3xl font-bold text-accent">{item.title}</h3>
                      <p className="text-xl text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-8 mt-8">
                  <p className="text-2xl text-accent italic">
                    "Flight EK230 shows 78% risk due to crosswinds and gate congestion. Expected delay: 23 minutes."
                  </p>
                </div>
              </div>
            )}

            {/* Slide 9: Dashboard */}
            {currentSlide === 8 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <BarChart3 className="w-24 h-24 text-accent mx-auto animate-pulse" />
                  <h2 className="text-6xl font-bold text-accent">Frontend Dashboard</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Activity, text: "Live flight table", color: "text-green-400" },
                    { icon: Brain, text: "AI explanations", color: "text-purple-400" },
                    { icon: TrendingUp, text: "Insight cards", color: "text-blue-400" },
                    { icon: Wifi, text: "Workflow feed", color: "text-yellow-400" },
                    { icon: BarChart3, text: "Analytics", color: "text-red-400" },
                    { icon: Zap, text: "Real-time updates", color: "text-accent" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-card to-secondary border border-accent/20 rounded-xl p-8 text-center space-y-4 hover:border-accent/40 transition-all">
                      <item.icon className={cn("w-16 h-16 mx-auto", item.color)} />
                      <p className="text-xl font-semibold text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-lg text-muted-foreground mt-8">
                  Built with React + TailwindCSS for speed and visual depth
                </p>
              </div>
            )}

            {/* Slide 10: Predictive Model */}
            {currentSlide === 9 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-accent/30 to-blue-500/30 blur-3xl rounded-full animate-scale-pulse" />
                    <Brain className="w-32 h-32 text-accent mx-auto animate-float relative z-10" style={{ filter: "drop-shadow(0 0 30px hsl(var(--accent)))" }} />
                  </div>
                  <h2 className="text-7xl font-bold text-accent" style={{ textShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}>
                    Predictive Model
                  </h2>
                  <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-accent/30 rounded-full px-8 py-3">
                    <p className="text-2xl text-accent font-semibold">Hybrid Prophet/LSTM</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { value: "78", unit: "%", label: "delay_prob", desc: "Probability of delay", gradient: "from-red-500/20 to-orange-500/20", iconColor: "text-orange-400" },
                    { value: "23", unit: "min", label: "minutes", desc: "Predicted delay", gradient: "from-yellow-500/20 to-accent/20", iconColor: "text-yellow-400" },
                    { value: "", unit: "", label: "SHAP", desc: "Feature weights", gradient: "from-blue-500/20 to-purple-500/20", iconColor: "text-purple-400", icon: Activity }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="relative group animate-fade-in" 
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                      <div className={cn("absolute inset-0 bg-gradient-to-br rounded-2xl blur-2xl group-hover:blur-3xl transition-all", item.gradient)} />
                      <div className="relative bg-card/90 backdrop-blur-xl border-2 border-accent/30 rounded-2xl p-10 text-center space-y-6 hover:border-accent/60 hover:transform hover:scale-105 transition-all">
                        {item.icon ? (
                          <div className="relative">
                            <div className={cn("absolute inset-0 blur-2xl rounded-full", item.iconColor.replace("text-", "bg-"))} style={{ opacity: 0.4 }} />
                            <item.icon className={cn("w-20 h-20 mx-auto relative z-10 animate-pulse", item.iconColor)} />
                          </div>
                        ) : (
                          <div className="text-8xl font-bold text-accent animate-scale-pulse">
                            {item.value}<span className="text-5xl">{item.unit}</span>
                          </div>
                        )}
                        <h3 className="text-2xl font-bold text-accent">{item.label}</h3>
                        <p className="text-lg text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 shimmer rounded-2xl" />
                  <div className="relative bg-gradient-to-r from-card/80 to-secondary/80 backdrop-blur border-2 border-accent/30 rounded-2xl p-8 text-center">
                    <p className="text-xl text-foreground">
                      <span className="text-accent font-bold">Features:</span> Weather • Gate Congestion • ATC Logs • Route Patterns
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 11: Explainability */}
            {currentSlide === 10 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Activity className="w-24 h-24 text-accent mx-auto animate-pulse" />
                  <h2 className="text-6xl font-bold text-accent">Explainability Engine</h2>
                </div>

                <div className="relative">
                  <img src={weatherRadar} alt="Weather Radar" className="w-full h-64 object-cover rounded-2xl opacity-30" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { value: "0.23", label: "Crosswind", icon: Wifi },
                    { value: "0.17", label: "Gate Congestion", icon: AlertTriangle },
                    { value: "0.14", label: "Route Delay", icon: TrendingUp }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-card border border-accent/20 rounded-xl p-6 space-y-4">
                      <item.icon className="w-12 h-12 text-accent" />
                      <div className="text-4xl font-bold text-accent">{item.value}</div>
                      <div className="text-lg text-foreground">{item.label}</div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: `${parseFloat(item.value) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
                  <p className="text-xl text-accent italic">
                    "Crosswinds and congestion are driving this delay risk. Route delay contributes moderately."
                  </p>
                </div>
              </div>
            )}

            {/* Slide 12: Automation */}
            {currentSlide === 11 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Zap className="w-24 h-24 text-accent mx-auto animate-glow" />
                  <h2 className="text-6xl font-bold text-accent">AI-Driven Automation</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { icon: Activity, title: "Anomaly Detection", desc: "Flags risks > 60%" },
                    { icon: Network, title: "Smart Routing", desc: "Internal flow logic" },
                    { icon: Database, title: "Auto Callbacks", desc: "Triggers updates" },
                    { icon: Brain, title: "AI Summaries", desc: "Operational insights" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-card to-secondary border-2 border-accent/20 rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-all">
                      <item.icon className="w-16 h-16 text-accent" />
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                  <p className="text-xl text-accent italic">
                    "3 of 8 flights show above-threshold risks due to weather systems over DXB"
                  </p>
                </div>
              </div>
            )}

            {/* Slide 13: Use Case */}
            {currentSlide === 12 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Plane className="w-24 h-24 text-accent mx-auto animate-glow" />
                  <h2 className="text-6xl font-bold text-accent">Example: Flight EK230</h2>
                  <p className="text-2xl text-muted-foreground">DXB → LHR</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Database, text: "MCP sends update" },
                    { icon: Brain, text: "78% delay probability" },
                    { icon: Network, text: "Langflow routes to Ollama" },
                    { icon: Cpu, text: "Human explanation generated" },
                    { icon: Zap, text: "Risk flagging triggered" },
                    { icon: BarChart3, text: "Dashboard live update" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="bg-accent text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="bg-card border border-accent/20 rounded-xl px-8 py-4 flex items-center gap-4 flex-1">
                        <item.icon className="w-8 h-8 text-accent" />
                        <span className="text-xl text-foreground">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-2xl font-bold text-accent">Early warning prevents delay cascade</p>
                </div>
              </div>
            )}

            {/* Slide 14: Criteria Table */}
            {currentSlide === 13 && (
              <div className="space-y-12 animate-slide-up">
                <h2 className="text-6xl font-bold text-accent text-center">Judging Criteria</h2>
                
                <div className="bg-card border border-accent/20 rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-px bg-accent/20">
                    {[
                      { icon: Network, criterion: "Langflow", impl: "Central reasoning + automation" },
                      { icon: Cpu, criterion: "Ollama", impl: "Local LLM (Llama2/Mistral)" },
                      { icon: Activity, criterion: "Predictive Analytics", impl: "Prophet/LSTM hybrid" },
                      { icon: Brain, criterion: "Explainability", impl: "SHAP + AI language" },
                      { icon: Shield, criterion: "Open-Source", impl: "100% local stack" },
                      { icon: Zap, criterion: "Creativity", impl: "Integrated orchestration" },
                      { icon: Server, criterion: "Technical Depth", impl: "Modular architecture" },
                      { icon: Target, criterion: "Applicability", impl: "Real flight operations" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-card p-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-8 h-8 text-accent" />
                          <span className="text-xl font-bold text-accent">{item.criterion}</span>
                        </div>
                        <p className="text-lg text-foreground pl-11">{item.impl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Slide 15: Impact */}
            {currentSlide === 14 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Rocket className="w-24 h-24 text-accent mx-auto animate-glow" />
                  <h2 className="text-6xl font-bold text-accent">Impact</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { icon: TrendingUp, text: "Reduced operational delays", color: "text-green-400" },
                    { icon: Brain, text: "Transparent AI predictions", color: "text-purple-400" },
                    { icon: Zap, text: "Automated intelligence", color: "text-yellow-400" },
                    { icon: Cloud, text: "Scalable to any MCP system", color: "text-blue-400" },
                    { icon: Shield, text: "Data-driven aviation safety", color: "text-accent" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-card to-secondary border-2 border-accent/20 rounded-2xl p-8 flex items-center gap-6 hover:border-accent/40 transition-all">
                      <item.icon className={cn("w-16 h-16 flex-shrink-0", item.color)} />
                      <span className="text-2xl font-semibold text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide 16: Future */}
            {currentSlide === 15 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Target className="w-24 h-24 text-accent mx-auto animate-pulse" />
                  <h2 className="text-6xl font-bold text-accent">Future Enhancements</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Wifi, text: "Live MCP integration" },
                    { icon: Cloud, text: "3D flight visualization" },
                    { icon: Activity, text: "Satellite weather" },
                    { icon: Brain, text: "Maintenance prediction" },
                    { icon: Users, text: "Crew scheduling" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-card border border-accent/20 rounded-xl p-8 text-center space-y-4 hover:border-accent/40 transition-all">
                      <item.icon className="w-16 h-16 text-accent mx-auto" />
                      <p className="text-xl text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide 17: Team */}
            {currentSlide === 16 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Users className="w-24 h-24 text-accent mx-auto animate-glow" />
                  <h2 className="text-6xl font-bold text-accent">Team</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { role: "Backend Engineer", focus: "FastAPI, Langflow" },
                    { role: "ML Engineer", focus: "Model, Explainability" },
                    { role: "AI Engineer", focus: "Ollama, Automation" },
                    { role: "Frontend Dev", focus: "React Dashboard" },
                    { role: "Designer", focus: "UI, Presentation" }
                  ].map((member, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-card to-secondary border border-accent/20 rounded-2xl p-8 text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent mx-auto flex items-center justify-center">
                        <Users className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-accent">{member.role}</h3>
                      <p className="text-muted-foreground">{member.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide 18: Demo Flow */}
            {currentSlide === 17 && (
              <div className="space-y-12 animate-slide-up">
                <div className="text-center space-y-6">
                  <Activity className="w-24 h-24 text-accent mx-auto animate-pulse" />
                  <h2 className="text-6xl font-bold text-accent">Demo Flow</h2>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { icon: BarChart3, text: "Select flight" },
                    { icon: Brain, text: "Prediction" },
                    { icon: Network, text: "Langflow" },
                    { icon: Zap, text: "Insight" },
                    { icon: CheckCircle2, text: "Visualize" }
                  ].map((step, idx) => (
                    <>
                      <div key={step.text} className="bg-card border-2 border-accent/30 rounded-2xl p-8 text-center space-y-4">
                        <step.icon className="w-16 h-16 text-accent mx-auto" />
                        <p className="text-lg font-semibold text-foreground">{step.text}</p>
                      </div>
                      {idx < 4 && <div className="flex items-center justify-center"><span className="text-accent text-4xl">→</span></div>}
                    </>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-card to-secondary border border-accent/20 rounded-xl p-6 text-center">
                  <p className="text-lg text-muted-foreground">
                    Real-time demonstration of predictive intelligence
                  </p>
                </div>
              </div>
            )}

            {/* Slide 19: Conclusion */}
            {currentSlide === 18 && (
              <div className="space-y-12 animate-fade-in text-center">
                <div className="relative h-[60vh]">
                  <img src={heroCockpit} alt="Cockpit" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 rounded-2xl" />
                  <div className="absolute inset-0 shimmer rounded-2xl" />
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-scale-pulse" />
                      <div className="relative flex items-center gap-6">
                        <Brain className="w-32 h-32 text-accent animate-float" style={{ filter: "drop-shadow(0 0 30px hsl(var(--accent)))" }} />
                        <div className="h-24 w-1 bg-gradient-to-b from-transparent via-accent to-transparent" />
                        <Plane className="w-32 h-32 text-accent animate-float" style={{ animationDelay: "1s", filter: "drop-shadow(0 0 30px hsl(var(--accent)))" }} />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h2 className="text-8xl font-bold text-accent" style={{ textShadow: "0 0 40px hsl(var(--accent) / 0.5)" }}>
                        PreFlight AI
                      </h2>
                      <div className="h-1 w-96 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
                    </div>
                    
                    <p className="text-4xl text-foreground max-w-4xl font-light leading-relaxed">
                      Transforming flight data into actionable intelligence
                    </p>
                    
                    <div className="relative mt-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-2xl rounded-full" />
                      <blockquote className="relative text-5xl italic text-accent font-light px-12 py-6">
                        <Sparkles className="inline w-10 h-10 mb-2" />
                        {" "}Predict. Explain. Automate.{" "}
                        <Sparkles className="inline w-10 h-10 mb-2" />
                      </blockquote>
                    </div>
                    
                    <p className="text-3xl text-muted-foreground font-light">
                      AI for real flight operations
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 20: Thank You */}
            {currentSlide === 19 && (
              <div className="text-center space-y-16 animate-fade-in h-[70vh] flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 blur-3xl rounded-full animate-scale-pulse" />
                  <Plane className="w-48 h-48 text-accent relative z-10 animate-float" style={{ filter: "drop-shadow(0 0 40px hsl(var(--accent)))" }} />
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-9xl font-bold text-accent animate-slide-up" style={{ textShadow: "0 0 50px hsl(var(--accent) / 0.5)" }}>
                    Thank You
                  </h1>
                  <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>
                
                <p className="text-6xl text-foreground font-light">Questions?</p>
                
                <div className="flex gap-12 text-3xl text-muted-foreground mt-12">
                  {["GitHub", "Contact", "Live Demo"].map((text, idx) => (
                    <div key={text} className="relative group">
                      <div className="absolute inset-0 bg-accent/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-all" />
                      <span className="relative group-hover:text-accent transition-colors cursor-pointer">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center gap-3 mt-8">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-3 h-3 rounded-full bg-accent animate-scale-pulse" 
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-20 p-8 flex items-center justify-between border-t border-accent/20 bg-background/80 backdrop-blur">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="lg"
            className="text-accent hover:bg-accent/10 disabled:opacity-30"
          >
            <ChevronLeft className="mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: 20 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  idx === currentSlide
                    ? "bg-accent w-8"
                    : "bg-accent/30 hover:bg-accent/50"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              {currentSlide + 1} / 20
            </span>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === 19}
              variant="ghost"
              size="lg"
              className="text-accent hover:bg-accent/10 disabled:opacity-30"
            >
              Next
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
