'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Building2,
  User,
  GraduationCap
} from 'lucide-react';
import { specialties, indianStates } from '@/lib/types';

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    specialty: '',
    registrationNumber: '',
    yearsExperience: '',
    city: '',
    state: 'Telangana',
    isSpecialist: false,
    agreeToTerms: false
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // In production, this would call an API
    console.log('Registering doctor:', formData);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">DocCircle</span>
          </Link>
          <p className="text-slate-500 mt-2">India Rural First • Doctor Registration</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
          <div className="w-12 h-1 bg-slate-200">
            <div className={`h-full bg-blue-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
          <div className="w-12 h-1 bg-slate-200">
            <div className={`h-full bg-blue-500 transition-all ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="p-6 lg:p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Basic Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Dr. Your Name"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="doctor@email.com"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Qualification *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      value={formData.qualification}
                      onChange={(e) => updateField('qualification', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="">Select Qualification</option>
                      <option value="MBBS">MBBS</option>
                      <option value="MD">MD</option>
                      <option value="MS">MS</option>
                      <option value="DNB">DNB</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Medical Registration Number *</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => updateField('registrationNumber', e.target.value)}
                      placeholder="TSMC/2020/12345"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.phone || !formData.qualification || !formData.registrationNumber}
                className="w-full mt-6 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Professional Info */}
          {step === 2 && (
            <div className="p-6 lg:p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Professional Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Specialty *</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      value={formData.specialty}
                      onChange={(e) => updateField('specialty', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="">Select Specialty</option>
                      {specialties.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Years of Experience *</label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => updateField('yearsExperience', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none bg-white"
                  >
                    <option value="">Select Experience</option>
                    {[...Array(30)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} years</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">City/Town *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      placeholder="Karimnagar"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">State *</label>
                    <select
                      value={formData.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none bg-white"
                    >
                      {indianStates.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="specialist"
                    checked={formData.isSpecialist}
                    onChange={(e) => updateField('isSpecialist', e.target.checked)}
                    className="w-5 h-5 rounded text-blue-500"
                  />
                  <label htmlFor="specialist" className="flex-1">
                    <span className="font-semibold text-slate-700">I am a Specialist (MD)</span>
                    <p className="text-sm text-slate-500">Check if you are a specialist doctor (Pediatrician, Cardiologist, etc.)</p>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="py-4 px-6 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.specialty || !formData.city || !formData.state}
                  className="flex-1 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Terms */}
          {step === 3 && (
            <div className="p-6 lg:p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Complete Registration</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-slate-800">Verification Status</p>
                    <p className="text-sm text-slate-500">Your registration will be verified within 24 hours</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl space-y-2">
                  <p className="font-semibold text-slate-700">Registration Summary:</p>
                  <p className="text-sm text-slate-600">Name: {formData.name}</p>
                  <p className="text-sm text-slate-600">Qualification: {formData.qualification}</p>
                  <p className="text-sm text-slate-600">Specialty: {formData.specialty}</p>
                  <p className="text-sm text-slate-600">Location: {formData.city}, {formData.state}</p>
                  <p className="text-sm text-slate-600">Phone: {formData.phone}</p>
                </div>

                <div className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateField('agreeToTerms', e.target.checked)}
                    className="w-5 h-5 rounded text-blue-500 mt-0.5"
                  />
                  <label htmlFor="terms" className="flex-1 text-sm text-slate-600">
                    I agree to DocCircle's <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>. I confirm all information provided is accurate.
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="py-4 px-6 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                  className="flex-1 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Complete Registration <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Login Link */}
        <p className="text-center text-slate-500 mt-6">
          Already have an account? <Link href="/login" className="text-blue-500 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
