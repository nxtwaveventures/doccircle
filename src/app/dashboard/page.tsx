'use client';

import Link from 'next/link';
import { 
  Stethoscope,
  Users,
  AlertTriangle,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Plus,
  FileText,
  Phone,
  MessageSquare,
  Video,
  Sparkles,
  Activity
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Welcome back, Dr. Raj! 👋
          </h1>
          <p className="text-slate-500">
            You have 12 pending cases and 3 urgent emergency consultations
          </p>
        </div>
        <Link 
          href="/cases/new"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Case
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-green-600 font-semibold">+12%</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">156</div>
          <div className="text-sm text-slate-500">Total Cases</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">12</div>
          <div className="text-sm text-slate-500">Pending</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-red-600">3</div>
          <div className="text-sm text-slate-500">Urgent Cases</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs text-green-600 font-semibold">+8%</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">89</div>
          <div className="text-sm text-slate-500">Completed</div>
        </div>
      </div>

      {/* Emergency Cases Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Emergency Cases</h2>
            <p className="text-sm text-slate-500">Critical cases requiring immediate attention</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Snake Bite Case */}
          <div className="bg-white p-4 rounded-xl border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🐍</span>
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">SNAKE BITE</span>
            </div>
            <p className="font-semibold text-slate-800">5-year-old male</p>
            <p className="text-sm text-slate-500 mb-3">Village: Rudrangi • 30 mins ago</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600">
                View Protocol
              </button>
              <button className="py-2 px-3 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dengue Case */}
          <div className="bg-white p-4 rounded-xl border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🦟</span>
              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded">DENGUE</span>
            </div>
            <p className="font-semibold text-slate-800">8-year-old female</p>
            <p className="text-sm text-slate-500 mb-3">Village: Vemulawada • 2 hours ago</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600">
                View Protocol
              </button>
              <button className="py-2 px-3 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Seizure Case */}
          <div className="bg-white p-4 rounded-xl border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚡</span>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-bold rounded">SEIZURE</span>
            </div>
            <p className="font-semibold text-slate-800">3-year-old male</p>
            <p className="text-sm text-slate-500 mb-3">Village: Karimnagar • 1 hour ago</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-purple-500 text-white text-sm font-semibold rounded-lg hover:bg-purple-600">
                View Protocol
              </button>
              <button className="py-2 px-3 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50">
                <Video className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link 
          href="/ai-tools"
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">MedGemma AI</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Get AI-powered symptom analysis and treatment suggestions
          </p>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
            Try AI Analysis <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/circles"
          className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">My Circle</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Your trusted network of 5 specialists
          </p>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">P</div>
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
            <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">N</div>
            <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">+2</div>
          </div>
        </Link>

        <Link 
          href="/subscription"
          className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Subscription</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Pro Plan • 45 cases remaining this month
          </p>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </Link>
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Recent Cases</h2>
          <Link href="/cases" className="text-blue-600 font-semibold text-sm hover:underline">
            View All
          </Link>
        </div>
        
        <div className="divide-y divide-slate-100">
          {[
            { name: 'Rahul (7yr)', condition: 'Malaria', status: 'In Progress', village: 'Rudrangi', time: '2 hours ago' },
            { name: 'Priya (4yr)', condition: 'Dengue', status: 'Urgent', village: 'Vemulawada', time: '3 hours ago' },
            { name: 'Amit (10yr)', condition: 'Fever', status: 'Completed', village: 'Karimnagar', time: '5 hours ago' },
            { name: 'Sita (2yr)', condition: 'Diarrhea', status: 'Pending', village: 'Thorrur', time: '6 hours ago' },
          ].map((caseItem, idx) => (
            <div key={idx} className="p-4 flex items-center gap-4 hover:bg-slate-50">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">
                👶
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800">{caseItem.name}</p>
                <p className="text-sm text-slate-500">{caseItem.condition} • {caseItem.village}</p>
              </div>
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  caseItem.status === 'Urgent' ? 'bg-red-100 text-red-700' :
                  caseItem.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                  caseItem.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {caseItem.status}
                </span>
                <p className="text-xs text-slate-400 mt-1">{caseItem.time}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
