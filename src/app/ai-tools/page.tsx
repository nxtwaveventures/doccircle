'use client';

import { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  AlertTriangle,
  MessageSquare,
  FileText,
  Microscope,
  ArrowRight,
  CheckCircle,
  XCircle,
  Loader2,
  ChevronRight,
  Phone,
  Copy,
  RefreshCw
} from 'lucide-react';
import { emergencyProtocols, getEmergencyBySymptom, type EmergencyType } from '@/lib/types';

export default function AITools() {
  const [activeTab, setActiveTab] = useState('symptom');
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState<EmergencyType | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis (in production, this would call MedGemma API)
    setTimeout(() => {
      const symptomList = symptoms.split(',').map(s => s.trim()).filter(Boolean);
      
      // Check for emergencies first
      const emergencies = getEmergencyBySymptom(symptomList);
      
      const result = {
        possibleConditions: [
          { name: 'Viral Fever', probability: 45, severity: 'moderate' },
          { name: 'Malaria', probability: 25, severity: 'high' },
          { name: 'Dengue', probability: 20, severity: 'high' },
          { name: 'Typhoid', probability: 10, severity: 'moderate' }
        ],
        emergencyDetected: emergencies.length > 0,
        emergencies: emergencies,
        recommendations: [
          'Monitor temperature every 4 hours',
          'Ensure adequate hydration with ORS',
          'Give paracetamol for fever',
          'Take blood test for malaria/dengue',
          'Watch for warning signs'
        ],
        specialistRecommendation: ['General Medicine', 'Pediatrics'],
        testsRecommended: ['CBC', 'Malaria RDT', 'Dengue NS1', 'Typhoid Test']
      };
      
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">MedGemma AI</h1>
          <p className="text-slate-500">Google's Medical AI powered by DocCircle</p>
        </div>
      </div>

      {/* Emergency Protocols */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <h2 className="text-lg font-bold text-slate-800">Emergency Protocols</h2>
          <span className="text-xs text-slate-500">(Rural India Common Emergencies)</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {emergencyProtocols.slice(0, 10).map((protocol) => (
            <button
              key={protocol.type}
              onClick={() => setSelectedEmergency(protocol.type)}
              className={`p-3 rounded-xl text-left transition-colors ${
                selectedEmergency === protocol.type
                  ? 'bg-red-500 text-white'
                  : 'bg-white border border-red-100 hover:bg-red-50'
              }`}
            >
              <div className="text-2xl mb-1">{protocol.emoji}</div>
              <div className={`text-xs font-semibold ${selectedEmergency === protocol.type ? 'text-white' : 'text-slate-700'}`}>
                {protocol.name}
              </div>
              <div className={`text-xs ${selectedEmergency === protocol.type ? 'text-red-100' : 'text-red-500'}`}>
                {protocol.severity}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Emergency Protocol */}
      {selectedEmergency && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {emergencyProtocols.filter(p => p.type === selectedEmergency).map((protocol) => (
            <div key={protocol.type}>
              <div className={`p-4 text-white ${
                protocol.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{protocol.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold">{protocol.name} Protocol</h3>
                    <p className="text-white/80 text-sm">Severity: {protocol.severity.toUpperCase()}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedEmergency(null)}
                    className="ml-auto p-2 hover:bg-white/20 rounded-lg"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-5 space-y-5">
                {/* Immediate Actions */}
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Immediate Actions
                  </h4>
                  <ul className="space-y-2">
                    {protocol.immediateActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warnings */}
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    DO NOT
                  </h4>
                  <ul className="space-y-2">
                    {protocol.warnings.map((warning, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-red-600">
                        <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">✕</span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to Refer */}
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                    When to Refer to Hospital
                  </h4>
                  <ul className="space-y-2">
                    {protocol.whenToRefer.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Emergency
                  </button>
                  <button className="flex-1 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 flex items-center justify-center gap-2">
                    <Copy className="w-5 h-5" />
                    Copy Protocol
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AI Analysis Tools */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Symptom Analyzer */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Symptom Analyzer</h3>
                <p className="text-xs text-slate-500">Powered by MedGemma AI</p>
              </div>
            </div>
          </div>
          
          <div className="p-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Enter Symptoms (comma separated)
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="e.g., fever, headache, vomiting, rash..."
              className="w-full h-32 p-4 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            
            <button
              onClick={handleAnalyze}
              disabled={!symptoms || isAnalyzing}
              className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing with MedGemma...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Analyze Symptoms
                </>
              )}
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Analysis Results</h3>
          </div>
          
          <div className="p-5">
            {analysis ? (
              <div className="space-y-4">
                {/* Emergency Warning */}
                {analysis.emergencyDetected && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                      <AlertTriangle className="w-5 h-5" />
                      Emergency Protocols Recommended
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysis.emergencies.map((e: any) => (
                        <button
                          key={e.type}
                          onClick={() => setSelectedEmergency(e.type)}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold hover:bg-red-200"
                        >
                          {e.emoji} {e.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Possible Conditions */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Possible Conditions</h4>
                  <div className="space-y-2">
                    {analysis.possibleConditions.map((condition: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800">{condition.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${condition.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`} 
                              style={{ width: `${condition.probability}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-slate-600 w-12 text-right">{condition.probability}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Recommendations</h4>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tests */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Recommended Tests</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.testsRecommended.map((test: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialists */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Suggested Specialists</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.specialistRecommendation.map((spec: string, idx: number) => (
                      <button key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 flex items-center gap-1">
                        {spec} <ChevronRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">
                <Brain className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Enter symptoms and click analyze</p>
                <p className="text-sm">to get AI-powered insights</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Other AI Tools */}
      <div className="grid md:grid-cols-3 gap-4">
        <button className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-bold text-slate-800">Report Analysis</h4>
          </div>
          <p className="text-sm text-slate-500">
            Upload lab reports (blood test, etc.) for AI explanation
          </p>
        </button>

        <button className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-800">MedGemma Chat</h4>
          </div>
          <p className="text-sm text-slate-500">
            Ask medical questions in plain language
          </p>
        </button>

        <button className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Copy className="w-5 h-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-slate-800">Documentation</h4>
          </div>
          <p className="text-sm text-slate-500">
            AI-powered case notes and documentation
          </p>
        </button>
      </div>
    </div>
  );
}
