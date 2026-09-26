import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: (email: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('student@marrow.med');
  const [password, setPassword] = useState('pathology2026');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }
    setError('');
    if (rememberMe) {
      localStorage.setItem('marrow_auth_user', email);
    }
    onLoginSuccess(email);
  };

  const handleQuickDemo = () => {
    setEmail('student@marrow.med');
    setPassword('pathology2026');
    localStorage.setItem('marrow_auth_user', 'student@marrow.med');
    onLoginSuccess('student@marrow.med');
  };

  return (
    <div className="min-h-screen bg-[#E8ECE7] flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-amber-200">
      <div className="w-full max-w-md">
        {/* Brand Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200/80">
          {/* Logo Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-3xl bg-teal-800 flex items-center justify-center text-amber-400 font-serif font-bold text-3xl shadow-md border-4 border-[#E8ECE7]">
              M
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-semibold text-stone-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-stone-500 font-sans mt-1.5">
              Sign in to your Marrow Semester IV portal
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@marrow.med"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-stone-300 text-teal-800 focus:ring-teal-800/30"
                />
                <span className="text-xs text-stone-600 font-sans">Remember me</span>
              </label>
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Demo account: use student@marrow.med / pathology2026');
                }}
                className="text-xs text-teal-800 hover:text-teal-900 font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-800 hover:bg-teal-900 active:scale-[0.99] text-white font-medium py-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm mt-2"
            >
              Sign in to Portal
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Access */}
          <div className="mt-5 pt-5 border-t border-stone-100">
            <button
              type="button"
              onClick={handleQuickDemo}
              className="w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-amber-900 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              1-Click Instant Demo Login
            </button>
            <p className="text-[11px] text-stone-400 text-center mt-2 font-sans">
              Pre-filled with Indian Nursing Council Semester IV Pathology & Genetics
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-6 text-xs text-stone-500 font-sans">
          B.Sc. Nursing Semester IV Curriculum • Pathology II & Medical Genetics
        </div>
      </div>
    </div>
  );
};
